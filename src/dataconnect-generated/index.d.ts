import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface EventAttendance_Key {
  userId: UUIDString;
  eventId: UUIDString;
  __typename?: 'EventAttendance_Key';
}

export interface Event_Key {
  id: UUIDString;
  __typename?: 'Event_Key';
}

export interface GroupMembership_Key {
  userId: UUIDString;
  groupId: UUIDString;
  __typename?: 'GroupMembership_Key';
}

export interface Group_Key {
  id: UUIDString;
  __typename?: 'Group_Key';
}

export interface InsertUserData {
  user_insert: User_Key;
}

export interface JoinEventData {
  eventAttendance_insert: EventAttendance_Key;
}

export interface JoinEventVariables {
  eventId: UUIDString;
}

export interface ListMyGroupsData {
  groups: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    imageUrl?: string | null;
  } & Group_Key)[];
}

export interface ListPublicEventsData {
  events: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    location: string;
    startTime: TimestampString;
    endTime: TimestampString;
  } & Event_Key)[];
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
  operationName: string;
}
export const insertUserRef: InsertUserRef;

export function insertUser(): MutationPromise<InsertUserData, undefined>;
export function insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface ListPublicEventsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicEventsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListPublicEventsData, undefined>;
  operationName: string;
}
export const listPublicEventsRef: ListPublicEventsRef;

export function listPublicEvents(): QueryPromise<ListPublicEventsData, undefined>;
export function listPublicEvents(dc: DataConnect): QueryPromise<ListPublicEventsData, undefined>;

interface JoinEventRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinEventVariables): MutationRef<JoinEventData, JoinEventVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: JoinEventVariables): MutationRef<JoinEventData, JoinEventVariables>;
  operationName: string;
}
export const joinEventRef: JoinEventRef;

export function joinEvent(vars: JoinEventVariables): MutationPromise<JoinEventData, JoinEventVariables>;
export function joinEvent(dc: DataConnect, vars: JoinEventVariables): MutationPromise<JoinEventData, JoinEventVariables>;

interface ListMyGroupsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyGroupsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyGroupsData, undefined>;
  operationName: string;
}
export const listMyGroupsRef: ListMyGroupsRef;

export function listMyGroups(): QueryPromise<ListMyGroupsData, undefined>;
export function listMyGroups(dc: DataConnect): QueryPromise<ListMyGroupsData, undefined>;

