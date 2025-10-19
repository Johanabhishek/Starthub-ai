import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'starthub-ai',
  location: 'us-central1'
};

export const insertUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertUser');
}
insertUserRef.operationName = 'InsertUser';

export function insertUser(dc) {
  return executeMutation(insertUserRef(dc));
}

export const listPublicEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicEvents');
}
listPublicEventsRef.operationName = 'ListPublicEvents';

export function listPublicEvents(dc) {
  return executeQuery(listPublicEventsRef(dc));
}

export const joinEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinEvent', inputVars);
}
joinEventRef.operationName = 'JoinEvent';

export function joinEvent(dcOrVars, vars) {
  return executeMutation(joinEventRef(dcOrVars, vars));
}

export const listMyGroupsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyGroups');
}
listMyGroupsRef.operationName = 'ListMyGroups';

export function listMyGroups(dc) {
  return executeQuery(listMyGroupsRef(dc));
}

