/* eslint-disable */
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
  DateTime: number;
  Long: any;
  Short: any;
};

export type AbstractArea = {
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  maxY: Scalars['Int'];
  minY: Scalars['Int'];
  name: Scalars['String'];
  points: Array<FlatPoint>;
  timestamps: Timestamps;
  world: Scalars['String'];
};

export type AbstractDraft = {
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  originalId?: Maybe<Scalars['Int']>;
  timestamps: Timestamps;
};

export type AbstractLocation = {
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  timestamps: Timestamps;
};

export type AbstractPlace = {
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  pos: Point;
  timestamps: Timestamps;
};

export type AbstractProposal = {
  draftId: Scalars['Int'];
  id: Scalars['Int'];
  submitterId: Scalars['Int'];
  timestamps: Timestamps;
};

export type AbstractTale = {
  areas: AreaConnection;
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  places: PlaceConnection;
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type AbstractTaleAreasArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type AbstractTalePlacesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type Account = Entity & Timestamped & {
  __typename?: 'Account';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  permissions: Array<Permission>;
  provider: AccountProvider;
  role: AccountRole;
  timestamps: Timestamps;
  username: Scalars['String'];
};

export type AccountConnection = {
  __typename?: 'AccountConnection';
  edges: Array<AccountEdge>;
  nodes: Array<Account>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type AccountEdge = {
  __typename?: 'AccountEdge';
  cursor: Scalars['String'];
  node: Account;
};

export type AccountFilter = {
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']>;
  role?: InputMaybe<AccountRole>;
  username?: InputMaybe<Scalars['String']>;
};

export enum AccountProvider {
  Discord = 'DISCORD',
  Seeded = 'SEEDED'
}

export enum AccountRole {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  SuperAdmin = 'SUPER_ADMIN',
  User = 'USER'
}

export type ApiSettings = {
  __typename?: 'ApiSettings';
  development: Scalars['Boolean'];
};

export type Area = AbstractArea & AbstractLocation & Entity & Owned & TaleSubject & Timestamped & {
  __typename?: 'Area';
  approverId: Scalars['Int'];
  author: Account;
  authorId: Scalars['Int'];
  draft?: Maybe<AreaDraft>;
  id: Scalars['Int'];
  maxY: Scalars['Int'];
  minY: Scalars['Int'];
  name: Scalars['String'];
  points: Array<FlatPoint>;
  slug: Scalars['String'];
  taleDrafts: TaleDraftConnection;
  tales: TaleConnection;
  timestamps: Timestamps;
  world: Scalars['String'];
};


export type AreaTaleDraftsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type AreaTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type AreaConnection = {
  __typename?: 'AreaConnection';
  edges: Array<AreaEdge>;
  nodes: Array<Area>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type AreaDraft = AbstractArea & AbstractDraft & AbstractLocation & Entity & Owned & Timestamped & {
  __typename?: 'AreaDraft';
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  maxY: Scalars['Int'];
  minY: Scalars['Int'];
  name: Scalars['String'];
  originalId?: Maybe<Scalars['Int']>;
  points: Array<FlatPoint>;
  timestamps: Timestamps;
  world: Scalars['String'];
};

export type AreaEdge = {
  __typename?: 'AreaEdge';
  cursor: Scalars['String'];
  node: Area;
};

export type CreateAreaInput = {
  maxY: Scalars['Int'];
  minY: Scalars['Int'];
  name: Scalars['String'];
  points: Array<FlatPointInput>;
  world: Scalars['String'];
};

export type CreatePlaceInput = {
  name: Scalars['String'];
  world: Scalars['String'];
  x: Scalars['Int'];
  y?: InputMaybe<Scalars['Int']>;
  z: Scalars['Int'];
};

export type CreateTaleInput = {
  places?: InputMaybe<Array<Scalars['Int']>>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Entity = {
  id: Scalars['Int'];
  timestamps: Timestamps;
};

export type FlatPoint = {
  __typename?: 'FlatPoint';
  x: Scalars['Int'];
  z: Scalars['Int'];
};

export type FlatPointInput = {
  x: Scalars['Int'];
  z: Scalars['Int'];
};

export type LocationFilter = {
  author?: InputMaybe<Scalars['Int']>;
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  world?: InputMaybe<Scalars['String']>;
};

export type ModifyAreaInput = {
  maxY?: InputMaybe<Scalars['Int']>;
  minY?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  points?: InputMaybe<Array<FlatPointInput>>;
  world?: InputMaybe<Scalars['String']>;
};

export type ModifyPlaceInput = {
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
  addAreasToTale: Scalars['Boolean'];
  addAreasToTaleDraft: Scalars['Boolean'];
  addPlacesToTale: Scalars['Boolean'];
  addPlacesToTaleDraft: Scalars['Boolean'];
  approvePlace: Scalars['Int'];
  approveTale: Scalars['Int'];
  createArea: Area;
  createPlace: Place;
  createPlaceDraft: PlaceDraft;
  createTale: Tale;
  createTaleDraft: TaleDraft;
  deleteArea: Scalars['Boolean'];
  deletePlace: Scalars['Boolean'];
  deletePlaceDraft: Scalars['Boolean'];
  deleteTale: Scalars['Boolean'];
  deleteTaleDraft: Scalars['Boolean'];
  impersonate: TokenResponse;
  modifyArea: Area;
  modifyPlace: Place;
  modifyPlaceDraft: PlaceDraft;
  modifyTale: Tale;
  modifyTaleDraft: TaleDraft;
  proposePlace: Scalars['Boolean'];
  proposeTale: Scalars['Boolean'];
  refusePlace: Scalars['Boolean'];
  refuseTale: Scalars['Boolean'];
  removeAreasFromTale: Scalars['Boolean'];
  removeAreasFromTaleDraft: Scalars['Boolean'];
  removePlacesFromTale: Scalars['Boolean'];
  removePlacesFromTaleDraft: Scalars['Boolean'];
  withdrawPlace: Scalars['Boolean'];
  withdrawTale: Scalars['Boolean'];
};


/** Mutation object */
export type MutationAddAreasToTaleArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationAddAreasToTaleDraftArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationAddPlacesToTaleArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationAddPlacesToTaleDraftArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationApprovePlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationApproveTaleArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationCreateAreaArgs = {
  input: CreateAreaInput;
};


/** Mutation object */
export type MutationCreatePlaceArgs = {
  input: CreatePlaceInput;
};


/** Mutation object */
export type MutationCreatePlaceDraftArgs = {
  input: CreatePlaceInput;
};


/** Mutation object */
export type MutationCreateTaleArgs = {
  input: CreateTaleInput;
};


/** Mutation object */
export type MutationCreateTaleDraftArgs = {
  input: CreateTaleInput;
};


/** Mutation object */
export type MutationDeleteAreaArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeletePlaceArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeletePlaceDraftArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeleteTaleArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeleteTaleDraftArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationImpersonateArgs = {
  email: Scalars['String'];
};


/** Mutation object */
export type MutationModifyAreaArgs = {
  id: Scalars['Int'];
  input: ModifyAreaInput;
};


/** Mutation object */
export type MutationModifyPlaceArgs = {
  id: Scalars['Int'];
  input: ModifyPlaceInput;
};


/** Mutation object */
export type MutationModifyPlaceDraftArgs = {
  id: Scalars['Int'];
  input: ModifyPlaceInput;
};


/** Mutation object */
export type MutationModifyTaleArgs = {
  id: Scalars['Int'];
  input: ModifyTaleInput;
};


/** Mutation object */
export type MutationModifyTaleDraftArgs = {
  id: Scalars['Int'];
  input: ModifyTaleInput;
};


/** Mutation object */
export type MutationProposePlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationProposeTaleArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefusePlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefuseTaleArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRemoveAreasFromTaleArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationRemoveAreasFromTaleDraftArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationRemovePlacesFromTaleArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationRemovePlacesFromTaleDraftArgs = {
  ids: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationWithdrawPlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationWithdrawTaleArgs = {
  draftId: Scalars['Int'];
};

export type Owned = {
  author: Account;
  authorId: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  offset: Scalars['Long'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Pagination = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export enum Permission {
  CreateLocation = 'CREATE_LOCATION',
  DraftLocation = 'DRAFT_LOCATION',
  DraftTale = 'DRAFT_TALE',
  PromoteAdmin = 'PROMOTE_ADMIN',
  ProposeLocation = 'PROPOSE_LOCATION',
  ProposeTale = 'PROPOSE_TALE',
  TellTale = 'TELL_TALE',
  ViewOtherPermissions = 'VIEW_OTHER_PERMISSIONS',
  ViewOtherProposals = 'VIEW_OTHER_PROPOSALS'
}

export type Place = AbstractLocation & AbstractPlace & Entity & Owned & TaleSubject & Timestamped & {
  __typename?: 'Place';
  approverId: Scalars['Int'];
  author: Account;
  authorId: Scalars['Int'];
  draft?: Maybe<PlaceDraft>;
  id: Scalars['Int'];
  name: Scalars['String'];
  pos: Point;
  slug: Scalars['String'];
  taleDrafts: TaleDraftConnection;
  tales: TaleConnection;
  timestamps: Timestamps;
};


export type PlaceTaleDraftsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type PlaceTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type PlaceConnection = {
  __typename?: 'PlaceConnection';
  edges: Array<PlaceEdge>;
  nodes: Array<Place>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type PlaceDraft = AbstractDraft & AbstractLocation & AbstractPlace & Entity & Owned & Timestamped & {
  __typename?: 'PlaceDraft';
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  original?: Maybe<Place>;
  originalId?: Maybe<Scalars['Int']>;
  pos: Point;
  proposal?: Maybe<PlaceProposal>;
  proposed: Scalars['Boolean'];
  timestamps: Timestamps;
};

export type PlaceDraftConnection = {
  __typename?: 'PlaceDraftConnection';
  edges: Array<PlaceDraftEdge>;
  nodes: Array<PlaceDraft>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type PlaceDraftEdge = {
  __typename?: 'PlaceDraftEdge';
  cursor: Scalars['String'];
  node: PlaceDraft;
};

export type PlaceEdge = {
  __typename?: 'PlaceEdge';
  cursor: Scalars['String'];
  node: Place;
};

export type PlaceProposal = AbstractProposal & Entity & Timestamped & {
  __typename?: 'PlaceProposal';
  draft: PlaceDraft;
  draftId: Scalars['Int'];
  id: Scalars['Int'];
  submitter: Account;
  submitterId: Scalars['Int'];
  timestamps: Timestamps;
};

export type PlaceProposalConnection = {
  __typename?: 'PlaceProposalConnection';
  edges: Array<PlaceProposalEdge>;
  nodes: Array<PlaceProposal>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type PlaceProposalEdge = {
  __typename?: 'PlaceProposalEdge';
  cursor: Scalars['String'];
  node: PlaceProposal;
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
  accounts: AccountConnection;
  area: Area;
  areaBySlug: Area;
  areas: AreaConnection;
  createPlaceDraftFrom: PlaceDraft;
  createTaleDraftFrom: TaleDraft;
  me?: Maybe<Account>;
  place: Place;
  placeBySlug: Place;
  placeDraft: PlaceDraft;
  placeDrafts: PlaceDraftConnection;
  placeProposal: PlaceProposal;
  placeProposals: PlaceProposalConnection;
  places: PlaceConnection;
  settings: ApiSettings;
  tale: Tale;
  taleDraft: TaleDraft;
  taleDrafts: TaleDraftConnection;
  taleProposal: TaleProposal;
  taleProposals: TaleProposalConnection;
  tales: TaleConnection;
  world: World;
  worlds: Array<World>;
};


/** Query object */
export type QueryAccountArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryAccountsArgs = {
  filter?: InputMaybe<AccountFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryAreaArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryAreaBySlugArgs = {
  slug: Scalars['String'];
};


/** Query object */
export type QueryAreasArgs = {
  filter?: InputMaybe<LocationFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryCreatePlaceDraftFromArgs = {
  original: Scalars['Int'];
};


/** Query object */
export type QueryCreateTaleDraftFromArgs = {
  original: Scalars['Int'];
};


/** Query object */
export type QueryPlaceArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryPlaceBySlugArgs = {
  slug: Scalars['String'];
};


/** Query object */
export type QueryPlaceDraftArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryPlaceDraftsArgs = {
  filter?: InputMaybe<LocationFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryPlaceProposalArgs = {
  draftId: Scalars['Int'];
};


/** Query object */
export type QueryPlaceProposalsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryPlacesArgs = {
  filter?: InputMaybe<LocationFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryTaleArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryTaleDraftArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryTaleDraftsArgs = {
  filter?: InputMaybe<TaleFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryTaleProposalArgs = {
  draftId: Scalars['Int'];
};


/** Query object */
export type QueryTaleProposalsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryTalesArgs = {
  filter?: InputMaybe<TaleFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryWorldArgs = {
  id: Scalars['String'];
};

export type Tale = AbstractTale & Entity & Owned & Timestamped & {
  __typename?: 'Tale';
  approverId: Scalars['Int'];
  areas: AreaConnection;
  author: Account;
  authorId: Scalars['Int'];
  draft?: Maybe<TaleDraft>;
  id: Scalars['Int'];
  places: PlaceConnection;
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type TaleAreasArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TalePlacesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type TaleConnection = {
  __typename?: 'TaleConnection';
  edges: Array<TaleEdge>;
  nodes: Array<Tale>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type TaleDraft = AbstractDraft & AbstractTale & Entity & Owned & Timestamped & {
  __typename?: 'TaleDraft';
  areas: AreaConnection;
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  original?: Maybe<Tale>;
  originalId?: Maybe<Scalars['Int']>;
  places: PlaceConnection;
  proposal?: Maybe<TaleProposal>;
  proposed: Scalars['Boolean'];
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type TaleDraftAreasArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TaleDraftPlacesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type TaleDraftConnection = {
  __typename?: 'TaleDraftConnection';
  edges: Array<TaleDraftEdge>;
  nodes: Array<TaleDraft>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type TaleDraftEdge = {
  __typename?: 'TaleDraftEdge';
  cursor: Scalars['String'];
  node: TaleDraft;
};

export type TaleEdge = {
  __typename?: 'TaleEdge';
  cursor: Scalars['String'];
  node: Tale;
};

export type TaleFilter = {
  author?: InputMaybe<Scalars['Int']>;
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type TaleProposal = AbstractProposal & Entity & Timestamped & {
  __typename?: 'TaleProposal';
  draft: TaleDraft;
  draftId: Scalars['Int'];
  id: Scalars['Int'];
  submitter: Account;
  submitterId: Scalars['Int'];
  timestamps: Timestamps;
};

export type TaleProposalConnection = {
  __typename?: 'TaleProposalConnection';
  edges: Array<TaleProposalEdge>;
  nodes: Array<TaleProposal>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type TaleProposalEdge = {
  __typename?: 'TaleProposalEdge';
  cursor: Scalars['String'];
  node: TaleProposal;
};

export type TaleSubject = {
  id: Scalars['Int'];
  taleDrafts: TaleDraftConnection;
  tales: TaleConnection;
  timestamps: Timestamps;
};


export type TaleSubjectTaleDraftsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TaleSubjectTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type Timestamped = {
  timestamps: Timestamps;
};

export type Timestamps = {
  __typename?: 'Timestamps';
  createdAt: Scalars['DateTime'];
  modifiedAt: Scalars['DateTime'];
};

export type TokenResponse = {
  __typename?: 'TokenResponse';
  id: Scalars['Int'];
  token: Scalars['String'];
  user: UserData;
};

export type UserData = {
  __typename?: 'UserData';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  username: Scalars['String'];
};

export type World = {
  __typename?: 'World';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type UserFragment = { __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null };

export type SelfFragment = { __typename?: 'Account', permissions: Array<Permission>, id: number, email: string, username: string, avatar?: string | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Account', permissions: Array<Permission>, id: number, email: string, username: string, avatar?: string | null } | null };

export type GetAccountsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filter?: InputMaybe<AccountFilter>;
}>;


export type GetAccountsQuery = { __typename?: 'Query', accounts: { __typename?: 'AccountConnection', nodes: Array<{ __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type ApiSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ApiSettingsQuery = { __typename?: 'Query', settings: { __typename?: 'ApiSettings', development: boolean } };

export type ImpersonateMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ImpersonateMutation = { __typename?: 'Mutation', impersonate: { __typename?: 'TokenResponse', token: string } };

export type PlaceProposalPreviewFragment = { __typename?: 'PlaceProposal', submitter: { __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null }, draft: { __typename?: 'PlaceDraft', id: number, name: string, original?: { __typename?: 'Place', id: number, name: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type GetPlaceProposalsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetPlaceProposalsQuery = { __typename?: 'Query', connection: { __typename?: 'PlaceProposalConnection', totalCount: any, nodes: Array<{ __typename?: 'PlaceProposal', submitter: { __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null }, draft: { __typename?: 'PlaceDraft', id: number, name: string, original?: { __typename?: 'Place', id: number, name: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetPlaceProposalQueryVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type GetPlaceProposalQuery = { __typename?: 'Query', proposal: { __typename?: 'PlaceProposal', draft: { __typename?: 'PlaceDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number }, original?: { __typename?: 'Place', id: number, name: string } | null }, submitter: { __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

export type ApprovePlaceMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ApprovePlaceMutation = { __typename?: 'Mutation', converted: number };

export type RefusePlaceMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type RefusePlaceMutation = { __typename?: 'Mutation', converted: boolean };

export type PosFragment = { __typename?: 'Point', x: number, y?: number | null, z: number };

export type FlatPosFragment = { __typename?: 'FlatPoint', x: number, z: number };

type MapLocation_Area_Fragment = { __typename?: 'Area', id: number, name: string };

type MapLocation_AreaDraft_Fragment = { __typename?: 'AreaDraft', id: number, name: string };

type MapLocation_Place_Fragment = { __typename?: 'Place', id: number, name: string };

type MapLocation_PlaceDraft_Fragment = { __typename?: 'PlaceDraft', id: number, name: string };

export type MapLocationFragment = MapLocation_Area_Fragment | MapLocation_AreaDraft_Fragment | MapLocation_Place_Fragment | MapLocation_PlaceDraft_Fragment;

type MapPlace_Place_Fragment = { __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

type MapPlace_PlaceDraft_Fragment = { __typename?: 'PlaceDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type MapPlaceFragment = MapPlace_Place_Fragment | MapPlace_PlaceDraft_Fragment;

type MapArea_Area_Fragment = { __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> };

type MapArea_AreaDraft_Fragment = { __typename?: 'AreaDraft', id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> };

export type MapAreaFragment = MapArea_Area_Fragment | MapArea_AreaDraft_Fragment;

export type WorldFragment = { __typename?: 'World', id: string, name: string };

export type MapLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MapLocationsQuery = { __typename?: 'Query', places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> } };

export type GetWorldsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorldsQuery = { __typename?: 'Query', worlds: Array<{ __typename?: 'World', id: string, name: string }> };

export type PageInfoFragment = { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any };

export type PlaceDraftFragment = { __typename?: 'PlaceDraft', proposed: boolean, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetPlaceDraftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetPlaceDraftsQuery = { __typename?: 'Query', connection: { __typename?: 'PlaceDraftConnection', totalCount: any, nodes: Array<{ __typename?: 'PlaceDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetPlaceDraftQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlaceDraftQuery = { __typename?: 'Query', placeDraft: { __typename?: 'PlaceDraft', proposed: boolean, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type CreatePlaceDraftMutationVariables = Exact<{
  input: CreatePlaceInput;
}>;


export type CreatePlaceDraftMutation = { __typename?: 'Mutation', created: { __typename?: 'PlaceDraft', id: number } };

export type ModifyPlaceDraftMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyPlaceInput;
}>;


export type ModifyPlaceDraftMutation = { __typename?: 'Mutation', modified: { __typename?: 'PlaceDraft', id: number } };

export type ProposePlaceMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ProposePlaceMutation = { __typename?: 'Mutation', proposal: boolean };

type PlaceSummary_Place_Fragment = { __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number }, tales: { __typename?: 'TaleConnection', totalCount: any } };

type PlaceSummary_PlaceDraft_Fragment = { __typename?: 'PlaceDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type PlaceSummaryFragment = PlaceSummary_Place_Fragment | PlaceSummary_PlaceDraft_Fragment;

export type PlaceFragment = { __typename?: 'Place', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetPlacesQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filter?: InputMaybe<LocationFilter>;
}>;


export type GetPlacesQuery = { __typename?: 'Query', connection: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number }, tales: { __typename?: 'TaleConnection', totalCount: any } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetPlaceQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place: { __typename?: 'Place', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type GetPlaceByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlaceByIdQuery = { __typename?: 'Query', place: { __typename?: 'Place', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type CreatePlaceMutationVariables = Exact<{
  input: CreatePlaceInput;
}>;


export type CreatePlaceMutation = { __typename?: 'Mutation', created: { __typename?: 'Place', id: number, slug: string } };

export type ModifyPlaceMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyPlaceInput;
}>;


export type ModifyPlaceMutation = { __typename?: 'Mutation', modified: { __typename?: 'Place', id: number, slug: string } };

type WithTime_Account_Fragment = { __typename?: 'Account', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Area_Fragment = { __typename?: 'Area', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_AreaDraft_Fragment = { __typename?: 'AreaDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Place_Fragment = { __typename?: 'Place', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_PlaceDraft_Fragment = { __typename?: 'PlaceDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_PlaceProposal_Fragment = { __typename?: 'PlaceProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Tale_Fragment = { __typename?: 'Tale', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_TaleDraft_Fragment = { __typename?: 'TaleDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_TaleProposal_Fragment = { __typename?: 'TaleProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type WithTimeFragment = WithTime_Account_Fragment | WithTime_Area_Fragment | WithTime_AreaDraft_Fragment | WithTime_Place_Fragment | WithTime_PlaceDraft_Fragment | WithTime_PlaceProposal_Fragment | WithTime_Tale_Fragment | WithTime_TaleDraft_Fragment | WithTime_TaleProposal_Fragment;

type SubjectSummary_Area_Fragment = { __typename?: 'Area', tales: { __typename?: 'TaleConnection', totalCount: any } };

type SubjectSummary_Place_Fragment = { __typename?: 'Place', tales: { __typename?: 'TaleConnection', totalCount: any } };

export type SubjectSummaryFragment = SubjectSummary_Area_Fragment | SubjectSummary_Place_Fragment;

export type GetTaleDraftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetTaleDraftsQuery = { __typename?: 'Query', connection: { __typename?: 'TaleDraftConnection', totalCount: any, nodes: Array<{ __typename?: 'TaleDraft', id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any }, areas: { __typename?: 'AreaConnection', totalCount: any }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleDraftQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaleDraftQuery = { __typename?: 'Query', taleDraft: { __typename?: 'TaleDraft', proposed: boolean, text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

export type CreateTaleDraftMutationVariables = Exact<{
  input: CreateTaleInput;
}>;


export type CreateTaleDraftMutation = { __typename?: 'Mutation', created: { __typename?: 'TaleDraft', id: number } };

export type ModifyTaleDraftMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyTaleInput;
  addedPlaces: Array<Scalars['Int']> | Scalars['Int'];
  removedPlaces: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type ModifyTaleDraftMutation = { __typename?: 'Mutation', addedLocations: boolean, removedLocations: boolean, modified: { __typename?: 'TaleDraft', id: number } };

export type ProposeTaleMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ProposeTaleMutation = { __typename?: 'Mutation', proposal: boolean };

export type TaleProposalPreviewFragment = { __typename?: 'TaleProposal', submitter: { __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null }, draft: { __typename?: 'TaleDraft', id: number, title: string, original?: { __typename?: 'Tale', id: number, title: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type GetTaleProposalsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetTaleProposalsQuery = { __typename?: 'Query', connection: { __typename?: 'TaleProposalConnection', totalCount: any, nodes: Array<{ __typename?: 'TaleProposal', submitter: { __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null }, draft: { __typename?: 'TaleDraft', id: number, title: string, original?: { __typename?: 'Tale', id: number, title: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleProposalQueryVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type GetTaleProposalQuery = { __typename?: 'Query', proposal: { __typename?: 'TaleProposal', draft: { __typename?: 'TaleDraft', text: string, id: number, title: string, original?: { __typename?: 'Tale', id: number, title: string } | null }, submitter: { __typename?: 'Account', id: number, email: string, username: string, avatar?: string | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

export type ApproveTaleMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ApproveTaleMutation = { __typename?: 'Mutation', converted: number };

export type RefuseTaleMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type RefuseTaleMutation = { __typename?: 'Mutation', converted: boolean };

type TaleSummary_Tale_Fragment = { __typename?: 'Tale', id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any }, areas: { __typename?: 'AreaConnection', totalCount: any }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type TaleSummary_TaleDraft_Fragment = { __typename?: 'TaleDraft', id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any }, areas: { __typename?: 'AreaConnection', totalCount: any }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type TaleSummaryFragment = TaleSummary_Tale_Fragment | TaleSummary_TaleDraft_Fragment;

type Tale_Tale_Fragment = { __typename?: 'Tale', text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type Tale_TaleDraft_Fragment = { __typename?: 'TaleDraft', text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type TaleFragment = Tale_Tale_Fragment | Tale_TaleDraft_Fragment;

export type GetTalesQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filter?: InputMaybe<TaleFilter>;
}>;


export type GetTalesQuery = { __typename?: 'Query', connection: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any }, areas: { __typename?: 'AreaConnection', totalCount: any }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaleQuery = { __typename?: 'Query', tale: { __typename?: 'Tale', text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

export type CreateTaleMutationVariables = Exact<{
  input: CreateTaleInput;
}>;


export type CreateTaleMutation = { __typename?: 'Mutation', created: { __typename?: 'Tale', id: number } };

export type ModifyTaleMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyTaleInput;
  addedPlaces: Array<Scalars['Int']> | Scalars['Int'];
  removedPlaces: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type ModifyTaleMutation = { __typename?: 'Mutation', addedLocations: boolean, removedLocations: boolean, modified: { __typename?: 'Tale', id: number } };

export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const SelfFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Self"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<SelfFragment, unknown>;
export const WithTimeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}}]} as unknown as DocumentNode<WithTimeFragment, unknown>;
export const PlaceProposalPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<PlaceProposalPreviewFragment, unknown>;
export const MapLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<MapLocationFragment, unknown>;
export const WorldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"World"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"World"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<WorldFragment, unknown>;
export const PageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const PosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<PosFragment, unknown>;
export const MapPlaceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<MapPlaceFragment, unknown>;
export const PlaceDraftFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceDraft"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}}]} as unknown as DocumentNode<PlaceDraftFragment, unknown>;
export const SubjectSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<SubjectSummaryFragment, unknown>;
export const PlaceSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}}]} as unknown as DocumentNode<PlaceSummaryFragment, unknown>;
export const PlaceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Place"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<PlaceFragment, unknown>;
export const TaleProposalPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<TaleProposalPreviewFragment, unknown>;
export const TaleSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<TaleSummaryFragment, unknown>;
export const FlatPosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<FlatPosFragment, unknown>;
export const MapAreaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<MapAreaFragment, unknown>;
export const TaleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tale"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}}]}}]}}]}}]} as unknown as DocumentNode<TaleFragment, unknown>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Self"}}]}}]}},...SelfFragmentDoc.definitions,...UserFragmentDoc.definitions]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...UserFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetAccountsQuery, GetAccountsQueryVariables>;
export const ApiSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"apiSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"development"}}]}}]}}]} as unknown as DocumentNode<ApiSettingsQuery, ApiSettingsQueryVariables>;
export const ImpersonateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"impersonate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"impersonate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<ImpersonateMutation, ImpersonateMutationVariables>;
export const GetPlaceProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceProposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"placeProposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceProposalPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...PlaceProposalPreviewFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...UserFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetPlaceProposalsQuery, GetPlaceProposalsQueryVariables>;
export const GetPlaceProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"placeProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceProposalPreview"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}}]}}]}}]}},...PlaceProposalPreviewFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...UserFragmentDoc.definitions,...PosFragmentDoc.definitions]} as unknown as DocumentNode<GetPlaceProposalQuery, GetPlaceProposalQueryVariables>;
export const ApprovePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approvePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"approvePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ApprovePlaceMutation, ApprovePlaceMutationVariables>;
export const RefusePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refusePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"refusePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<RefusePlaceMutation, RefusePlaceMutationVariables>;
export const MapLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"mapLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}}]}}]}}]}},...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions,...MapAreaFragmentDoc.definitions,...FlatPosFragmentDoc.definitions]} as unknown as DocumentNode<MapLocationsQuery, MapLocationsQueryVariables>;
export const GetWorldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWorlds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worlds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"World"}}]}}]}},...WorldFragmentDoc.definitions]} as unknown as DocumentNode<GetWorldsQuery, GetWorldsQueryVariables>;
export const GetPlaceDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"placeDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetPlaceDraftsQuery, GetPlaceDraftsQueryVariables>;
export const GetPlaceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"placeDraft"},"name":{"kind":"Name","value":"placeDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceDraft"}}]}}]}},...PlaceDraftFragmentDoc.definitions,...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions]} as unknown as DocumentNode<GetPlaceDraftQuery, GetPlaceDraftQueryVariables>;
export const CreatePlaceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPlaceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createPlaceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePlaceDraftMutation, CreatePlaceDraftMutationVariables>;
export const ModifyPlaceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyPlaceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyPlaceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ModifyPlaceDraftMutation, ModifyPlaceDraftMutationVariables>;
export const ProposePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"proposePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"proposePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ProposePlaceMutation, ProposePlaceMutationVariables>;
export const GetPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocationFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"places"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...PlaceSummaryFragmentDoc.definitions,...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions,...SubjectSummaryFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetPlacesQuery, GetPlacesQueryVariables>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"place"},"name":{"kind":"Name","value":"placeBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Place"}}]}}]}},...PlaceFragmentDoc.definitions,...PlaceSummaryFragmentDoc.definitions,...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions,...SubjectSummaryFragmentDoc.definitions]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
export const GetPlaceByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"place"},"name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Place"}}]}}]}},...PlaceFragmentDoc.definitions,...PlaceSummaryFragmentDoc.definitions,...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions,...SubjectSummaryFragmentDoc.definitions]} as unknown as DocumentNode<GetPlaceByIdQuery, GetPlaceByIdQueryVariables>;
export const CreatePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const ModifyPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ModifyPlaceMutation, ModifyPlaceMutationVariables>;
export const GetTaleDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"taleDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...TaleSummaryFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleDraftsQuery, GetTaleDraftsQueryVariables>;
export const GetTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tale"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}}]}},...TaleFragmentDoc.definitions,...TaleSummaryFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions,...MapAreaFragmentDoc.definitions,...FlatPosFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleDraftQuery, GetTaleDraftQueryVariables>;
export const CreateTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTaleDraftMutation, CreateTaleDraftMutationVariables>;
export const ModifyTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addedPlaces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removedPlaces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"addedLocations"},"name":{"kind":"Name","value":"addPlacesToTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addedPlaces"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"removedLocations"},"name":{"kind":"Name","value":"removePlacesFromTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removedPlaces"}}}]}]}}]} as unknown as DocumentNode<ModifyTaleDraftMutation, ModifyTaleDraftMutationVariables>;
export const ProposeTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"proposeTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"proposeTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ProposeTaleMutation, ProposeTaleMutationVariables>;
export const GetTaleProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleProposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"taleProposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleProposalPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...TaleProposalPreviewFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...UserFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleProposalsQuery, GetTaleProposalsQueryVariables>;
export const GetTaleProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"taleProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleProposalPreview"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},...TaleProposalPreviewFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...UserFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleProposalQuery, GetTaleProposalQueryVariables>;
export const ApproveTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approveTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"approveTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ApproveTaleMutation, ApproveTaleMutationVariables>;
export const RefuseTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refuseTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"refuseTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<RefuseTaleMutation, RefuseTaleMutationVariables>;
export const GetTalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaleFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"tales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...TaleSummaryFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTalesQuery, GetTalesQueryVariables>;
export const GetTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tale"}}]}}]}},...TaleFragmentDoc.definitions,...TaleSummaryFragmentDoc.definitions,...WithTimeFragmentDoc.definitions,...MapPlaceFragmentDoc.definitions,...PosFragmentDoc.definitions,...MapAreaFragmentDoc.definitions,...FlatPosFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleQuery, GetTaleQueryVariables>;
export const CreateTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTaleMutation, CreateTaleMutationVariables>;
export const ModifyTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addedPlaces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removedPlaces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"addedLocations"},"name":{"kind":"Name","value":"addPlacesToTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addedPlaces"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"removedLocations"},"name":{"kind":"Name","value":"removePlacesFromTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removedPlaces"}}}]}]}}]} as unknown as DocumentNode<ModifyTaleMutation, ModifyTaleMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AbstractArea": [
      "Area",
      "AreaDraft"
    ],
    "AbstractDraft": [
      "AreaDraft",
      "PlaceDraft",
      "TaleDraft"
    ],
    "AbstractLocation": [
      "Area",
      "AreaDraft",
      "Place",
      "PlaceDraft"
    ],
    "AbstractPlace": [
      "Place",
      "PlaceDraft"
    ],
    "AbstractProposal": [
      "PlaceProposal",
      "TaleProposal"
    ],
    "AbstractTale": [
      "Tale",
      "TaleDraft"
    ],
    "Entity": [
      "Account",
      "Area",
      "AreaDraft",
      "Place",
      "PlaceDraft",
      "PlaceProposal",
      "Tale",
      "TaleDraft",
      "TaleProposal"
    ],
    "Owned": [
      "Area",
      "AreaDraft",
      "Place",
      "PlaceDraft",
      "Tale",
      "TaleDraft"
    ],
    "TaleSubject": [
      "Area",
      "Place"
    ],
    "Timestamped": [
      "Account",
      "Area",
      "AreaDraft",
      "Place",
      "PlaceDraft",
      "PlaceProposal",
      "Tale",
      "TaleDraft",
      "TaleProposal"
    ]
  }
};
      export default result;
    