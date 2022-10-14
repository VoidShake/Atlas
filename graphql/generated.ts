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
  provider: Scalars['String'];
  username: Scalars['String'];
};

export type CreatePoiInput = {
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

export type ModifyPoiInput = {
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
  addPoiToTale: Scalars['Boolean'];
  createPoi: Scalars['Int'];
  createTale: Scalars['Int'];
  modifyPoi: Scalars['Boolean'];
  modifyTale: Scalars['Boolean'];
};


/** Mutation object */
export type MutationAddPoiToTaleArgs = {
  poi: Scalars['Int'];
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationCreatePoiArgs = {
  input: CreatePoiInput;
};


/** Mutation object */
export type MutationCreateTaleArgs = {
  input: CreateTaleInput;
  pois?: InputMaybe<Array<Scalars['Int']>>;
};


/** Mutation object */
export type MutationModifyPoiArgs = {
  id: Scalars['Int'];
  input: ModifyPoiInput;
};


/** Mutation object */
export type MutationModifyTaleArgs = {
  id: Scalars['Int'];
  input: ModifyTaleInput;
};

export type Poi = {
  __typename?: 'POI';
  id: Scalars['Int'];
  name: Scalars['String'];
  pos: Point;
  slug: Scalars['String'];
  tales: Array<Tale>;
};


export type PoiTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Long']>;
};

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
  me?: Maybe<Account>;
  poi: Poi;
  poiBySlug: Poi;
  pois: Array<Poi>;
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
export type QueryPoiArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryPoiBySlugArgs = {
  slug: Scalars['String'];
};


/** Query object */
export type QueryPoisArgs = {
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

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Account', email: string, username: string, avatar?: string | null } | null };

export type PosFragment = { __typename?: 'Point', x: number, y?: number | null, z: number };

export type MapPoiFragment = { __typename?: 'POI', id: number, name: string, slug: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetPoisQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPoisQuery = { __typename?: 'Query', pois: Array<{ __typename?: 'POI', id: number, name: string, slug: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> };

export type GetPoiQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPoiQuery = { __typename?: 'Query', poi: { __typename?: 'POI', id: number, name: string, slug: string, tales: Array<{ __typename?: 'Tale', title: string, text: string }>, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type CreatePoiMutationVariables = Exact<{
  input: CreatePoiInput;
}>;


export type CreatePoiMutation = { __typename?: 'Mutation', createPoi: number };

export type CreateTaleMutationVariables = Exact<{
  input: CreateTaleInput;
  pois?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type CreateTaleMutation = { __typename?: 'Mutation', createTale: number };

export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const PosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<PosFragment, unknown>;
export const MapPoiFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPOI"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"POI"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}}]}},...PosFragmentDoc.definitions]} as unknown as DocumentNode<MapPoiFragment, unknown>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}}]}},...UserFragmentDoc.definitions]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetPoisDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPois"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pois"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPOI"}}]}}]}},...MapPoiFragmentDoc.definitions]} as unknown as DocumentNode<GetPoisQuery, GetPoisQueryVariables>;
export const GetPoiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPoi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"poi"},"name":{"kind":"Name","value":"poiBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPOI"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},...MapPoiFragmentDoc.definitions]} as unknown as DocumentNode<GetPoiQuery, GetPoiQueryVariables>;
export const CreatePoiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPoi"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePOIInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPoi"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<CreatePoiMutation, CreatePoiMutationVariables>;
export const CreateTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pois"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"pois"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pois"}}}]}]}}]} as unknown as DocumentNode<CreateTaleMutation, CreateTaleMutationVariables>;