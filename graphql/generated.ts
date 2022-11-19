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

export type AbstractDraft = {
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  originalId?: Maybe<Scalars['Int']>;
  timestamps: Timestamps;
};

export type AbstractLocation = {
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
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
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

export type Entity = {
  id: Scalars['Int'];
  timestamps: Timestamps;
};

export type Location = AbstractLocation & Entity & Timestamped & {
  __typename?: 'Location';
  approverId: Scalars['Int'];
  author: Account;
  authorId: Scalars['Int'];
  draft?: Maybe<LocationDraft>;
  id: Scalars['Int'];
  name: Scalars['String'];
  pos: Point;
  slug: Scalars['String'];
  tales: TaleConnection;
  timestamps: Timestamps;
};


export type LocationTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type LocationConnection = {
  __typename?: 'LocationConnection';
  edges: Array<LocationEdge>;
  nodes: Array<Location>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type LocationDraft = AbstractDraft & AbstractLocation & Entity & Timestamped & {
  __typename?: 'LocationDraft';
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  original?: Maybe<Location>;
  originalId?: Maybe<Scalars['Int']>;
  pos: Point;
  proposal?: Maybe<LocationProposal>;
  proposed: Scalars['Boolean'];
  timestamps: Timestamps;
};

export type LocationDraftConnection = {
  __typename?: 'LocationDraftConnection';
  edges: Array<LocationDraftEdge>;
  nodes: Array<LocationDraft>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type LocationDraftEdge = {
  __typename?: 'LocationDraftEdge';
  cursor: Scalars['String'];
  node: LocationDraft;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String'];
  node: Location;
};

export type LocationProposal = AbstractProposal & Entity & Timestamped & {
  __typename?: 'LocationProposal';
  draft: LocationDraft;
  draftId: Scalars['Int'];
  id: Scalars['Int'];
  submitter: Account;
  submitterId: Scalars['Int'];
  timestamps: Timestamps;
};

export type LocationProposalConnection = {
  __typename?: 'LocationProposalConnection';
  edges: Array<LocationProposalEdge>;
  nodes: Array<LocationProposal>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type LocationProposalEdge = {
  __typename?: 'LocationProposalEdge';
  cursor: Scalars['String'];
  node: LocationProposal;
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
  addLocationsToTale: Scalars['Boolean'];
  addLocationsToTaleDraft: Scalars['Boolean'];
  approveLocation: Scalars['Int'];
  approveTale: Scalars['Int'];
  createLocation: Location;
  createLocationDraft: LocationDraft;
  createTale: Tale;
  createTaleDraft: TaleDraft;
  deleteLocation: Scalars['Boolean'];
  deleteLocationDraft: Scalars['Boolean'];
  deleteTale: Scalars['Boolean'];
  deleteTaleDraft: Scalars['Boolean'];
  impersonate: TokenResponse;
  modifyLocation: Location;
  modifyLocationDraft: LocationDraft;
  modifyTale: Tale;
  modifyTaleDraft: TaleDraft;
  proposeLocation: Scalars['Boolean'];
  proposeTale: Scalars['Boolean'];
  refuseLocation: Scalars['Boolean'];
  refuseTale: Scalars['Boolean'];
  removeLocationsFromTale: Scalars['Boolean'];
  removeLocationsFromTaleDraft: Scalars['Boolean'];
  withdrawLocation: Scalars['Boolean'];
  withdrawTale: Scalars['Boolean'];
};


/** Mutation object */
export type MutationAddLocationsToTaleArgs = {
  locations: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationAddLocationsToTaleDraftArgs = {
  locations: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationApproveLocationArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationApproveTaleArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationCreateLocationArgs = {
  input: CreateLocationInput;
};


/** Mutation object */
export type MutationCreateLocationDraftArgs = {
  input: CreateLocationInput;
};


/** Mutation object */
export type MutationCreateTaleArgs = {
  input: CreateTaleInput;
  locations?: InputMaybe<Array<Scalars['Int']>>;
};


/** Mutation object */
export type MutationCreateTaleDraftArgs = {
  input: CreateTaleInput;
  locations?: InputMaybe<Array<Scalars['Int']>>;
};


/** Mutation object */
export type MutationDeleteLocationArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeleteLocationDraftArgs = {
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
export type MutationModifyLocationArgs = {
  id: Scalars['Int'];
  input: ModifyLocationInput;
};


/** Mutation object */
export type MutationModifyLocationDraftArgs = {
  id: Scalars['Int'];
  input: ModifyLocationInput;
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
export type MutationProposeLocationArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationProposeTaleArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefuseLocationArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefuseTaleArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRemoveLocationsFromTaleArgs = {
  locations: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationRemoveLocationsFromTaleDraftArgs = {
  locations: Array<Scalars['Int']>;
  tale: Scalars['Int'];
};


/** Mutation object */
export type MutationWithdrawLocationArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationWithdrawTaleArgs = {
  draftId: Scalars['Int'];
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
  createLocationDraftFrom: LocationDraft;
  createTaleDraftFrom: TaleDraft;
  location: Location;
  locationBySlug: Location;
  locationDraft: LocationDraft;
  locationDrafts: LocationDraftConnection;
  locationProposal: LocationProposal;
  locationProposals: LocationProposalConnection;
  locations: LocationConnection;
  me?: Maybe<Account>;
  settings: ApiSettings;
  tale: Tale;
  taleDraft: TaleDraft;
  taleDrafts: TaleDraftConnection;
  taleProposal: TaleProposal;
  taleProposals: TaleProposalConnection;
  tales: TaleConnection;
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
export type QueryCreateLocationDraftFromArgs = {
  original: Scalars['Int'];
};


/** Query object */
export type QueryCreateTaleDraftFromArgs = {
  original: Scalars['Int'];
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
export type QueryLocationDraftArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryLocationDraftsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryLocationProposalArgs = {
  draftId: Scalars['Int'];
};


/** Query object */
export type QueryLocationProposalsArgs = {
  pagination?: InputMaybe<Pagination>;
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
export type QueryTaleDraftArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryTaleDraftsArgs = {
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
  pagination?: InputMaybe<Pagination>;
};

export type Tale = AbstractTale & Entity & Timestamped & {
  __typename?: 'Tale';
  approverId: Scalars['Int'];
  author: Account;
  authorId: Scalars['Int'];
  draft?: Maybe<LocationDraft>;
  id: Scalars['Int'];
  locations: LocationConnection;
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type TaleLocationsArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type TaleConnection = {
  __typename?: 'TaleConnection';
  edges: Array<TaleEdge>;
  nodes: Array<Tale>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type TaleDraft = AbstractDraft & AbstractTale & Entity & Timestamped & {
  __typename?: 'TaleDraft';
  author: Account;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  locations: LocationConnection;
  original?: Maybe<Tale>;
  originalId?: Maybe<Scalars['Int']>;
  proposal?: Maybe<TaleProposal>;
  proposed: Scalars['Boolean'];
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type TaleDraftLocationsArgs = {
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

export type UserFragment = { __typename?: 'Account', email: string, username: string, avatar?: string | null };

export type SelfFragment = { __typename?: 'Account', permissions: Array<Permission>, email: string, username: string, avatar?: string | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'Account', permissions: Array<Permission>, email: string, username: string, avatar?: string | null } | null };

export type ApiSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type ApiSettingsQuery = { __typename?: 'Query', settings: { __typename?: 'ApiSettings', development: boolean } };

export type ImpersonateMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ImpersonateMutation = { __typename?: 'Mutation', impersonate: { __typename?: 'TokenResponse', token: string } };

export type LocationDraftFragment = { __typename?: 'LocationDraft', proposed: boolean, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetLocationDraftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetLocationDraftsQuery = { __typename?: 'Query', connection: { __typename?: 'LocationDraftConnection', totalCount: any, nodes: Array<{ __typename?: 'LocationDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetLocationDraftQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetLocationDraftQuery = { __typename?: 'Query', locationDraft: { __typename?: 'LocationDraft', proposed: boolean, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type CreateLocationDraftMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationDraftMutation = { __typename?: 'Mutation', created: { __typename?: 'LocationDraft', id: number } };

export type ModifyLocationDraftMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyLocationInput;
}>;


export type ModifyLocationDraftMutation = { __typename?: 'Mutation', modified: { __typename?: 'LocationDraft', id: number } };

export type ProposeLocationMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ProposeLocationMutation = { __typename?: 'Mutation', proposal: boolean };

export type LocationProposalPreviewFragment = { __typename?: 'LocationProposal', submitter: { __typename?: 'Account', email: string, username: string, avatar?: string | null }, draft: { __typename?: 'LocationDraft', id: number, name: string, original?: { __typename?: 'Location', id: number, name: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type GetLocationProposalsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetLocationProposalsQuery = { __typename?: 'Query', connection: { __typename?: 'LocationProposalConnection', totalCount: any, nodes: Array<{ __typename?: 'LocationProposal', submitter: { __typename?: 'Account', email: string, username: string, avatar?: string | null }, draft: { __typename?: 'LocationDraft', id: number, name: string, original?: { __typename?: 'Location', id: number, name: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetLocationProposalQueryVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type GetLocationProposalQuery = { __typename?: 'Query', proposal: { __typename?: 'LocationProposal', draft: { __typename?: 'LocationDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number }, original?: { __typename?: 'Location', id: number, name: string } | null }, submitter: { __typename?: 'Account', email: string, username: string, avatar?: string | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

export type ApproveLocationMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ApproveLocationMutation = { __typename?: 'Mutation', converted: number };

export type RefuseLocationMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type RefuseLocationMutation = { __typename?: 'Mutation', converted: boolean };

type LocationSummary_Location_Fragment = { __typename?: 'Location', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

type LocationSummary_LocationDraft_Fragment = { __typename?: 'LocationDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type LocationSummaryFragment = LocationSummary_Location_Fragment | LocationSummary_LocationDraft_Fragment;

export type LocationFragment = { __typename?: 'Location', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetLocationsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetLocationsQuery = { __typename?: 'Query', connection: { __typename?: 'LocationConnection', totalCount: any, nodes: Array<{ __typename?: 'Location', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetLocationQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetLocationQuery = { __typename?: 'Query', location: { __typename?: 'Location', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type GetLocationByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetLocationByIdQuery = { __typename?: 'Query', location: { __typename?: 'Location', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type CreateLocationMutationVariables = Exact<{
  input: CreateLocationInput;
}>;


export type CreateLocationMutation = { __typename?: 'Mutation', created: { __typename?: 'Location', id: number, slug: string } };

export type ModifyLocationMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyLocationInput;
}>;


export type ModifyLocationMutation = { __typename?: 'Mutation', modified: { __typename?: 'Location', id: number, slug: string } };

export type PosFragment = { __typename?: 'Point', x: number, y?: number | null, z: number };

type MapLocation_Location_Fragment = { __typename?: 'Location', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

type MapLocation_LocationDraft_Fragment = { __typename?: 'LocationDraft', id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type MapLocationFragment = MapLocation_Location_Fragment | MapLocation_LocationDraft_Fragment;

export type MapLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MapLocationsQuery = { __typename?: 'Query', locations: { __typename?: 'LocationConnection', totalCount: any, nodes: Array<{ __typename?: 'Location', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> } };

export type PageInfoFragment = { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any };

type WithTime_Account_Fragment = { __typename?: 'Account', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Location_Fragment = { __typename?: 'Location', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_LocationDraft_Fragment = { __typename?: 'LocationDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_LocationProposal_Fragment = { __typename?: 'LocationProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Tale_Fragment = { __typename?: 'Tale', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_TaleDraft_Fragment = { __typename?: 'TaleDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_TaleProposal_Fragment = { __typename?: 'TaleProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type WithTimeFragment = WithTime_Account_Fragment | WithTime_Location_Fragment | WithTime_LocationDraft_Fragment | WithTime_LocationProposal_Fragment | WithTime_Tale_Fragment | WithTime_TaleDraft_Fragment | WithTime_TaleProposal_Fragment;

export type GetTaleDraftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetTaleDraftsQuery = { __typename?: 'Query', connection: { __typename?: 'TaleDraftConnection', totalCount: any, nodes: Array<{ __typename?: 'TaleDraft', id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleDraftQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaleDraftQuery = { __typename?: 'Query', taleDraft: { __typename?: 'TaleDraft', proposed: boolean, text: string, id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any, nodes: Array<{ __typename?: 'Location', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> } } };

export type CreateTaleDraftMutationVariables = Exact<{
  input: CreateTaleInput;
  locations?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type CreateTaleDraftMutation = { __typename?: 'Mutation', created: { __typename?: 'TaleDraft', id: number } };

export type ModifyTaleDraftMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyTaleInput;
  addedLocations: Array<Scalars['Int']> | Scalars['Int'];
  removedLocations: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type ModifyTaleDraftMutation = { __typename?: 'Mutation', addedLocations: boolean, removedLocations: boolean, modified: { __typename?: 'TaleDraft', id: number } };

export type ProposeTaleMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ProposeTaleMutation = { __typename?: 'Mutation', proposal: boolean };

export type TaleProposalPreviewFragment = { __typename?: 'TaleProposal', submitter: { __typename?: 'Account', email: string, username: string, avatar?: string | null }, draft: { __typename?: 'TaleDraft', id: number, title: string, original?: { __typename?: 'Tale', id: number, title: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type GetTaleProposalsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetTaleProposalsQuery = { __typename?: 'Query', connection: { __typename?: 'TaleProposalConnection', totalCount: any, nodes: Array<{ __typename?: 'TaleProposal', submitter: { __typename?: 'Account', email: string, username: string, avatar?: string | null }, draft: { __typename?: 'TaleDraft', id: number, title: string, original?: { __typename?: 'Tale', id: number, title: string } | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleProposalQueryVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type GetTaleProposalQuery = { __typename?: 'Query', proposal: { __typename?: 'TaleProposal', draft: { __typename?: 'TaleDraft', text: string, id: number, title: string, original?: { __typename?: 'Tale', id: number, title: string } | null }, submitter: { __typename?: 'Account', email: string, username: string, avatar?: string | null }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

export type ApproveTaleMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ApproveTaleMutation = { __typename?: 'Mutation', converted: number };

export type RefuseTaleMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type RefuseTaleMutation = { __typename?: 'Mutation', converted: boolean };

type TaleSummary_Tale_Fragment = { __typename?: 'Tale', id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any } };

type TaleSummary_TaleDraft_Fragment = { __typename?: 'TaleDraft', id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any } };

export type TaleSummaryFragment = TaleSummary_Tale_Fragment | TaleSummary_TaleDraft_Fragment;

type Tale_Tale_Fragment = { __typename?: 'Tale', text: string, id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any, nodes: Array<{ __typename?: 'Location', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> } };

type Tale_TaleDraft_Fragment = { __typename?: 'TaleDraft', text: string, id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any, nodes: Array<{ __typename?: 'Location', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> } };

export type TaleFragment = Tale_Tale_Fragment | Tale_TaleDraft_Fragment;

export type GetTalesQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetTalesQuery = { __typename?: 'Query', connection: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaleQuery = { __typename?: 'Query', tale: { __typename?: 'Tale', text: string, id: number, title: string, locations: { __typename?: 'LocationConnection', totalCount: any, nodes: Array<{ __typename?: 'Location', slug: string, id: number, name: string, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> } } };

export type CreateTaleMutationVariables = Exact<{
  input: CreateTaleInput;
  locations?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;


export type CreateTaleMutation = { __typename?: 'Mutation', created: { __typename?: 'Tale', id: number } };

export type ModifyTaleMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyTaleInput;
  addedLocations: Array<Scalars['Int']> | Scalars['Int'];
  removedLocations: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type ModifyTaleMutation = { __typename?: 'Mutation', addedLocations: boolean, removedLocations: boolean, modified: { __typename?: 'Tale', id: number } };

export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const SelfFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Self"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}},...UserFragmentDoc.definitions]} as unknown as DocumentNode<SelfFragment, unknown>;
export const PosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<PosFragment, unknown>;
export const MapLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},...PosFragmentDoc.definitions]} as unknown as DocumentNode<MapLocationFragment, unknown>;
export const LocationDraftFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationDraft"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}},...MapLocationFragmentDoc.definitions]} as unknown as DocumentNode<LocationDraftFragment, unknown>;
export const WithTimeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}}]} as unknown as DocumentNode<WithTimeFragment, unknown>;
export const LocationProposalPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LocationProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},...WithTimeFragmentDoc.definitions,...UserFragmentDoc.definitions]} as unknown as DocumentNode<LocationProposalPreviewFragment, unknown>;
export const LocationSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LocationSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}},...MapLocationFragmentDoc.definitions]} as unknown as DocumentNode<LocationSummaryFragment, unknown>;
export const LocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Location"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Location"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},...LocationSummaryFragmentDoc.definitions]} as unknown as DocumentNode<LocationFragment, unknown>;
export const PageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const TaleProposalPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},...WithTimeFragmentDoc.definitions,...UserFragmentDoc.definitions]} as unknown as DocumentNode<TaleProposalPreviewFragment, unknown>;
export const TaleSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<TaleSummaryFragment, unknown>;
export const TaleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tale"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}}]}}]}}]}}]}},...TaleSummaryFragmentDoc.definitions,...MapLocationFragmentDoc.definitions]} as unknown as DocumentNode<TaleFragment, unknown>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Self"}}]}}]}},...SelfFragmentDoc.definitions]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const ApiSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"apiSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"development"}}]}}]}}]} as unknown as DocumentNode<ApiSettingsQuery, ApiSettingsQueryVariables>;
export const ImpersonateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"impersonate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"impersonate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<ImpersonateMutation, ImpersonateMutationVariables>;
export const GetLocationDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocationDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"locationDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...MapLocationFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationDraftsQuery, GetLocationDraftsQueryVariables>;
export const GetLocationDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocationDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"locationDraft"},"name":{"kind":"Name","value":"locationDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationDraft"}}]}}]}},...LocationDraftFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationDraftQuery, GetLocationDraftQueryVariables>;
export const CreateLocationDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLocationDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createLocationDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLocationDraftMutation, CreateLocationDraftMutationVariables>;
export const ModifyLocationDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyLocationDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyLocationDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ModifyLocationDraftMutation, ModifyLocationDraftMutationVariables>;
export const ProposeLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"proposeLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"proposeLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ProposeLocationMutation, ProposeLocationMutationVariables>;
export const GetLocationProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocationProposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"locationProposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationProposalPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...LocationProposalPreviewFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationProposalsQuery, GetLocationProposalsQueryVariables>;
export const GetLocationProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocationProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"locationProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationProposalPreview"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}}]}}]}}]}},...LocationProposalPreviewFragmentDoc.definitions,...PosFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationProposalQuery, GetLocationProposalQueryVariables>;
export const ApproveLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approveLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"approveLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ApproveLocationMutation, ApproveLocationMutationVariables>;
export const RefuseLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refuseLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"refuseLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<RefuseLocationMutation, RefuseLocationMutationVariables>;
export const GetLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"locations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LocationSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...LocationSummaryFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationsQuery, GetLocationsQueryVariables>;
export const GetLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"locationBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Location"}}]}}]}},...LocationFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationQuery, GetLocationQueryVariables>;
export const GetLocationByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getLocationById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"location"},"name":{"kind":"Name","value":"location"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Location"}}]}}]}},...LocationFragmentDoc.definitions]} as unknown as DocumentNode<GetLocationByIdQuery, GetLocationByIdQueryVariables>;
export const CreateLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CreateLocationMutation, CreateLocationMutationVariables>;
export const ModifyLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyLocation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyLocationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyLocation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ModifyLocationMutation, ModifyLocationMutationVariables>;
export const MapLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"mapLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapLocation"}}]}}]}}]}},...MapLocationFragmentDoc.definitions]} as unknown as DocumentNode<MapLocationsQuery, MapLocationsQueryVariables>;
export const GetTaleDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"taleDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...TaleSummaryFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleDraftsQuery, GetTaleDraftsQueryVariables>;
export const GetTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tale"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}}]}},...TaleFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleDraftQuery, GetTaleDraftQueryVariables>;
export const CreateTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locations"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"locations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locations"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTaleDraftMutation, CreateTaleDraftMutationVariables>;
export const ModifyTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addedLocations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removedLocations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"addedLocations"},"name":{"kind":"Name","value":"addLocationsToTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addedLocations"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"removedLocations"},"name":{"kind":"Name","value":"removeLocationsFromTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removedLocations"}}}]}]}}]} as unknown as DocumentNode<ModifyTaleDraftMutation, ModifyTaleDraftMutationVariables>;
export const ProposeTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"proposeTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"proposeTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ProposeTaleMutation, ProposeTaleMutationVariables>;
export const GetTaleProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleProposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"taleProposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleProposalPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...TaleProposalPreviewFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleProposalsQuery, GetTaleProposalsQueryVariables>;
export const GetTaleProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"taleProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleProposalPreview"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},...TaleProposalPreviewFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleProposalQuery, GetTaleProposalQueryVariables>;
export const ApproveTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approveTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"approveTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ApproveTaleMutation, ApproveTaleMutationVariables>;
export const RefuseTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refuseTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"refuseTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<RefuseTaleMutation, RefuseTaleMutationVariables>;
export const GetTalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"tales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},...TaleSummaryFragmentDoc.definitions,...PageInfoFragmentDoc.definitions]} as unknown as DocumentNode<GetTalesQuery, GetTalesQueryVariables>;
export const GetTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tale"}}]}}]}},...TaleFragmentDoc.definitions]} as unknown as DocumentNode<GetTaleQuery, GetTaleQueryVariables>;
export const CreateTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locations"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}},{"kind":"Argument","name":{"kind":"Name","value":"locations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locations"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTaleMutation, CreateTaleMutationVariables>;
export const ModifyTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addedLocations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removedLocations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"addedLocations"},"name":{"kind":"Name","value":"addLocationsToTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addedLocations"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"removedLocations"},"name":{"kind":"Name","value":"removeLocationsFromTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removedLocations"}}}]}]}}]} as unknown as DocumentNode<ModifyTaleMutation, ModifyTaleMutationVariables>;

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AbstractDraft": [
      "LocationDraft",
      "TaleDraft"
    ],
    "AbstractLocation": [
      "Location",
      "LocationDraft"
    ],
    "AbstractProposal": [
      "LocationProposal",
      "TaleProposal"
    ],
    "AbstractTale": [
      "Tale",
      "TaleDraft"
    ],
    "Entity": [
      "Account",
      "Location",
      "LocationDraft",
      "LocationProposal",
      "Tale",
      "TaleDraft",
      "TaleProposal"
    ],
    "Timestamped": [
      "Account",
      "Location",
      "LocationDraft",
      "LocationProposal",
      "Tale",
      "TaleDraft",
      "TaleProposal"
    ]
  }
};
      export default result;
    