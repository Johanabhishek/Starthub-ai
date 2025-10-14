/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";
import {onRequest} from "firebase-functions/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

admin.initializeApp();

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

async function requireAdmin(request: any, response: any): Promise<admin.auth.DecodedIdToken | null> {
  const authHeader = request.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.substring(7) : null;
  if (!idToken) {
    response.status(401).json({ error: "Missing Bearer token" });
    return null;
  }
  try {
    const decoded = await admin.auth().verifyIdToken(idToken);
    const userDoc = await admin.firestore().collection("users").doc(decoded.uid).get();
    const role = userDoc.exists ? (userDoc.data()?.role as string | undefined) : undefined;
    if (role !== "admin") {
      response.status(403).json({ error: "Admin only" });
      return null;
    }
    return decoded;
  } catch (e) {
    logger.error(e);
    response.status(401).json({ error: "Invalid token" });
    return null;
  }
}

export const adminStats = onRequest(async (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();
  const decoded = await requireAdmin(req, res);
  if (!decoded) return;
  const db = admin.firestore();
  const [usersCountSnap] = await Promise.all([
    db.collection('users').count().get(),
  ]);
  res.json({ users: usersCountSnap.data().count });
});

export const adminListUsers = onRequest(async (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();
  const decoded = await requireAdmin(req, res);
  if (!decoded) return;
  const pageSize = Math.min(parseInt((req.query.limit as string) || '50', 10), 1000);
  const pageToken = (req.query.pageToken as string) || undefined;
  const result = await admin.auth().listUsers(pageSize, pageToken);
  res.json({ users: result.users.map(u => ({ uid: u.uid, email: u.email })), nextPageToken: result.pageToken || null });
});

export const adminSetUserRole = onRequest(async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();
  const decoded = await requireAdmin(req, res);
  if (!decoded) return;
  const { uid, role } = req.body || {};
  if (!uid || !role) return res.status(400).json({ error: 'uid and role are required' });
  await admin.firestore().collection('users').doc(uid).set({ role }, { merge: true });
  res.json({ ok: true });
});

export const adminExportUsersCsv = onRequest(async (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();
  const decoded = await requireAdmin(req, res);
  if (!decoded) return;
  const db = admin.firestore();
  const snapshot = await db.collection('users').get();
  const headers = ['uid','email','firstName','lastName','role','userType','createdAt','startupId'];
  const rows: string[] = [];
  rows.push(headers.join(','));
  snapshot.forEach((docSnap) => {
    const d = docSnap.data() as any;
    const row = [
      docSnap.id,
      d.email || '',
      d.firstName || '',
      d.lastName || '',
      d.role || '',
      d.userType || '',
      (d.createdAt && d.createdAt.toDate ? d.createdAt.toDate().toISOString() : (d.createdAt || '')),
      d.startupId || '',
    ].map((v) => `"${String(v).replace(/"/g, '""')}` + `"`).join(',');
    rows.push(row);
  });
  const csv = rows.join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="users.csv"');
  res.status(200).send(csv);
});

