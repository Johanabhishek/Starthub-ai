# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListPublicEvents*](#listpublicevents)
  - [*ListMyGroups*](#listmygroups)
- [**Mutations**](#mutations)
  - [*InsertUser*](#insertuser)
  - [*JoinEvent*](#joinevent)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListPublicEvents
You can execute the `ListPublicEvents` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listPublicEvents(): QueryPromise<ListPublicEventsData, undefined>;

interface ListPublicEventsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListPublicEventsData, undefined>;
}
export const listPublicEventsRef: ListPublicEventsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listPublicEvents(dc: DataConnect): QueryPromise<ListPublicEventsData, undefined>;

interface ListPublicEventsRef {
  ...
  (dc: DataConnect): QueryRef<ListPublicEventsData, undefined>;
}
export const listPublicEventsRef: ListPublicEventsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listPublicEventsRef:
```typescript
const name = listPublicEventsRef.operationName;
console.log(name);
```

### Variables
The `ListPublicEvents` query has no variables.
### Return Type
Recall that executing the `ListPublicEvents` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListPublicEventsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `ListPublicEvents`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listPublicEvents } from '@dataconnect/generated';


// Call the `listPublicEvents()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listPublicEvents();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listPublicEvents(dataConnect);

console.log(data.events);

// Or, you can use the `Promise` API.
listPublicEvents().then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

### Using `ListPublicEvents`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listPublicEventsRef } from '@dataconnect/generated';


// Call the `listPublicEventsRef()` function to get a reference to the query.
const ref = listPublicEventsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listPublicEventsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.events);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.events);
});
```

## ListMyGroups
You can execute the `ListMyGroups` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyGroups(): QueryPromise<ListMyGroupsData, undefined>;

interface ListMyGroupsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyGroupsData, undefined>;
}
export const listMyGroupsRef: ListMyGroupsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyGroups(dc: DataConnect): QueryPromise<ListMyGroupsData, undefined>;

interface ListMyGroupsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyGroupsData, undefined>;
}
export const listMyGroupsRef: ListMyGroupsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyGroupsRef:
```typescript
const name = listMyGroupsRef.operationName;
console.log(name);
```

### Variables
The `ListMyGroups` query has no variables.
### Return Type
Recall that executing the `ListMyGroups` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyGroupsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyGroupsData {
  groups: ({
    id: UUIDString;
    name: string;
    description?: string | null;
    imageUrl?: string | null;
  } & Group_Key)[];
}
```
### Using `ListMyGroups`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyGroups } from '@dataconnect/generated';


// Call the `listMyGroups()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyGroups();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyGroups(dataConnect);

console.log(data.groups);

// Or, you can use the `Promise` API.
listMyGroups().then((response) => {
  const data = response.data;
  console.log(data.groups);
});
```

### Using `ListMyGroups`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyGroupsRef } from '@dataconnect/generated';


// Call the `listMyGroupsRef()` function to get a reference to the query.
const ref = listMyGroupsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyGroupsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.groups);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.groups);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertUser
You can execute the `InsertUser` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertUser(): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertUser(dc: DataConnect): MutationPromise<InsertUserData, undefined>;

interface InsertUserRef {
  ...
  (dc: DataConnect): MutationRef<InsertUserData, undefined>;
}
export const insertUserRef: InsertUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertUserRef:
```typescript
const name = insertUserRef.operationName;
console.log(name);
```

### Variables
The `InsertUser` mutation has no variables.
### Return Type
Recall that executing the `InsertUser` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertUserData {
  user_insert: User_Key;
}
```
### Using `InsertUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertUser } from '@dataconnect/generated';


// Call the `insertUser()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertUser(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
insertUser().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `InsertUser`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertUserRef } from '@dataconnect/generated';


// Call the `insertUserRef()` function to get a reference to the mutation.
const ref = insertUserRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertUserRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## JoinEvent
You can execute the `JoinEvent` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
joinEvent(vars: JoinEventVariables): MutationPromise<JoinEventData, JoinEventVariables>;

interface JoinEventRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: JoinEventVariables): MutationRef<JoinEventData, JoinEventVariables>;
}
export const joinEventRef: JoinEventRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
joinEvent(dc: DataConnect, vars: JoinEventVariables): MutationPromise<JoinEventData, JoinEventVariables>;

interface JoinEventRef {
  ...
  (dc: DataConnect, vars: JoinEventVariables): MutationRef<JoinEventData, JoinEventVariables>;
}
export const joinEventRef: JoinEventRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the joinEventRef:
```typescript
const name = joinEventRef.operationName;
console.log(name);
```

### Variables
The `JoinEvent` mutation requires an argument of type `JoinEventVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface JoinEventVariables {
  eventId: UUIDString;
}
```
### Return Type
Recall that executing the `JoinEvent` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `JoinEventData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface JoinEventData {
  eventAttendance_insert: EventAttendance_Key;
}
```
### Using `JoinEvent`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, joinEvent, JoinEventVariables } from '@dataconnect/generated';

// The `JoinEvent` mutation requires an argument of type `JoinEventVariables`:
const joinEventVars: JoinEventVariables = {
  eventId: ..., 
};

// Call the `joinEvent()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await joinEvent(joinEventVars);
// Variables can be defined inline as well.
const { data } = await joinEvent({ eventId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await joinEvent(dataConnect, joinEventVars);

console.log(data.eventAttendance_insert);

// Or, you can use the `Promise` API.
joinEvent(joinEventVars).then((response) => {
  const data = response.data;
  console.log(data.eventAttendance_insert);
});
```

### Using `JoinEvent`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, joinEventRef, JoinEventVariables } from '@dataconnect/generated';

// The `JoinEvent` mutation requires an argument of type `JoinEventVariables`:
const joinEventVars: JoinEventVariables = {
  eventId: ..., 
};

// Call the `joinEventRef()` function to get a reference to the mutation.
const ref = joinEventRef(joinEventVars);
// Variables can be defined inline as well.
const ref = joinEventRef({ eventId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = joinEventRef(dataConnect, joinEventVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.eventAttendance_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.eventAttendance_insert);
});
```

