import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
  Short: any;
};

export type Account = {
  __typename?: 'Account';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  permissions: Array<Permission>;
  provider: Scalars['String'];
  role: AccountRole;
  username: Scalars['String'];
};

export enum AccountRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type CreateLocationInput = {
  name: Scalars['String'];
  world: Scalars['String'];
  x: Scalars['Int'];
  y?: InputMaybe<Scalars['Int']>;
  z: Scalars['Int'];
};

export type CreateTaleInput = {
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  id: Scalars['Int'];
  name: Scalars['String'];
  pos: Point;
  slug: Scalars['String'];
  tales: Array<Tale>;
};


export type LocationTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type ModifyLocationInput = {
  name?: InputMaybe<Scalars['String']>;
  world?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['Int']>;
  y?: InputMaybe<Scalars['Int']>;
  z?: InputMaybe<Scalars['Int']>;
};

export type ModifyTaleInput = {
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** Mutation object */
export type Mutation = {
  __typename?: 'Mutation';
  addLocationToTale: Scalars['Boolean'];
  createLocation: Scalars['Int'];
  createTale: Scalars['Int'];
  modifyLocation: Scalars['Boolean'];
  modifyTale: Scalars['Boolean'];
};


/** Mutation object */
export type MutationAddLocationToTaleArgs = {
  location: Scalars['Int'];
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


/** Mutation object */
export type MutationCreateTaleArgs = {
  input: CreateTaleInput;
  locations?: InputMaybe<Array<Scalars['Int']>>;
};


/** Mutation object */
export type MutationModifyLocationArgs = {
  id: Scalars['Int'];
  input: ModifyLocationInput;
};


/** Mutation object */
export type MutationModifyTaleArgs = {
  id: Scalars['Int'];
  input: ModifyTaleInput;
};

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Long']>;
};

export enum Permission {
  CreateLocation = 'CREATE_LOCATION',
  PromoteAdmin = 'PROMOTE_ADMIN',
  ProposeTale = 'PROPOSE_TALE',
  TellTale = 'TELL_TALE',
  ViewOtherPermissions = 'VIEW_OTHER_PERMISSIONS'
}

export type Point = {
  __typename?: 'Point';
  world: Scalars['String'];
  x: Scalars['Int'];
  y?: Maybe<Scalars['Int']>;
  z: Scalars['Int'];
};

/** Query object */
export type Query = {
  __typename?: 'Query';
  account: Account;
  accounts: Array<Account>;
  location: Location;
  locationBySlug: Location;
  locations: Array<Location>;
  me?: Maybe<Account>;
  tale: Tale;
  tales: Array<Tale>;
};


/** Query object */
export type QueryAccountArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryAccountsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryLocationArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryLocationBySlugArgs = {
  slug: Scalars['String'];
};


/** Query object */
export type QueryLocationsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryTaleArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type Tale = {
  __typename?: 'Tale';
  id: Scalars['Int'];
  text: Scalars['String'];
  title: Scalars['String'];
};

export type UserFragment = { __typename?: 'Account', email: string, username: string, avatar?: string | null };

export type SelfFragment = { __typename?: 'Account', permissions: Array<Permission>, email: string, username: string, avatar?: string | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Account', permissions: Array<Permission>, email: string, username: string, avatar?: string | null } | null };

export type PosFragment = { __typename?: 'Point', x: number, y?: number | null, z: number };

export type MapLocationFragment = { __typename?: 'Location', id: number, name: string, slug: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLocationsQuery = { __typename?: 'Query', locations: Array<{ __typename?: 'Location', id: number, name: string, slug: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> };

export type GetLocationQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLocationQuery = { __typename?: 'Query', location: { __typename?: 'Location', id: number, name: string, slug: string, tales: Array<{ __typename?: 'Tale', title: string, text: string }>, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', createLocation: number };

export type CreateTaleMutationVariables = Exact<{
  input: CreateTaleInput;
  locations?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type CreateTaleMutation = { __typename?: 'Mutation', createTale: number };

export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const SelfFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Self"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}},...UserFragmentDoc.definitions]} as unknown as DocumentNode<SelfFragment, unknown>;
export const PosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<PosFragment, unknown>;
export const MapLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}}]}},...PosFragmentDoc.definitions]} as unknown as DocumentNode<MapLocationFragment, unknown>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Self"}}]}}]}},...SelfFragmentDoc.definitions]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}}]}}]}},...MapLocationFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"locationBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},...MapLocationFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>;
export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const CreateTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locations"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"locations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locations"}}}]}]}}]} as unknown as DocumentNode<CreateTaleMutation, CreateTaleMutationVariables>;