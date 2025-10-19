const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'starthub-ai',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const insertUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertUser');
}
insertUserRef.operationName = 'InsertUser';
exports.insertUserRef = insertUserRef;

exports.insertUser = function insertUser(dc) {
  return executeMutation(insertUserRef(dc));
};

const listPublicEventsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListPublicEvents');
}
listPublicEventsRef.operationName = 'ListPublicEvents';
exports.listPublicEventsRef = listPublicEventsRef;

exports.listPublicEvents = function listPublicEvents(dc) {
  return executeQuery(listPublicEventsRef(dc));
};

const joinEventRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'JoinEvent', inputVars);
}
joinEventRef.operationName = 'JoinEvent';
exports.joinEventRef = joinEventRef;

exports.joinEvent = function joinEvent(dcOrVars, vars) {
  return executeMutation(joinEventRef(dcOrVars, vars));
};

const listMyGroupsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyGroups');
}
listMyGroupsRef.operationName = 'ListMyGroups';
exports.listMyGroupsRef = listMyGroupsRef;

exports.listMyGroups = function listMyGroups(dc) {
  return executeQuery(listMyGroupsRef(dc));
};
