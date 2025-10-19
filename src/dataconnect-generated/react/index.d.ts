import { InsertUserData, ListPublicEventsData, JoinEventData, JoinEventVariables, ListMyGroupsData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useInsertUser(options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;
export function useInsertUser(dc: DataConnect, options?: useDataConnectMutationOptions<InsertUserData, FirebaseError, void>): UseDataConnectMutationResult<InsertUserData, undefined>;

export function useListPublicEvents(options?: useDataConnectQueryOptions<ListPublicEventsData>): UseDataConnectQueryResult<ListPublicEventsData, undefined>;
export function useListPublicEvents(dc: DataConnect, options?: useDataConnectQueryOptions<ListPublicEventsData>): UseDataConnectQueryResult<ListPublicEventsData, undefined>;

export function useJoinEvent(options?: useDataConnectMutationOptions<JoinEventData, FirebaseError, JoinEventVariables>): UseDataConnectMutationResult<JoinEventData, JoinEventVariables>;
export function useJoinEvent(dc: DataConnect, options?: useDataConnectMutationOptions<JoinEventData, FirebaseError, JoinEventVariables>): UseDataConnectMutationResult<JoinEventData, JoinEventVariables>;

export function useListMyGroups(options?: useDataConnectQueryOptions<ListMyGroupsData>): UseDataConnectQueryResult<ListMyGroupsData, undefined>;
export function useListMyGroups(dc: DataConnect, options?: useDataConnectQueryOptions<ListMyGroupsData>): UseDataConnectQueryResult<ListMyGroupsData, undefined>;
