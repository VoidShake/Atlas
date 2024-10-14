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
  UUID: any;
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

export type AbstractCharacter = {
  author: Account;
  authorId: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  speciesId: Scalars['Int'];
  timestamps: Timestamps;
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
  icon: Icon;
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

export type AbstractSpecies = {
  author: Account;
  authorId: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  timestamps: Timestamps;
};

export type AbstractTale = {
  areas: AreaConnection;
  author: Account;
  authorId: Scalars['Int'];
  characters: CharacterConnection;
  id: Scalars['Int'];
  places: PlaceConnection;
  species: SpeciesConnection;
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type AbstractTaleAreasArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type AbstractTaleCharactersArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type AbstractTalePlacesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type AbstractTaleSpeciesArgs = {
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
  original?: Maybe<Area>;
  originalId?: Maybe<Scalars['Int']>;
  points: Array<FlatPoint>;
  proposal?: Maybe<AreaProposal>;
  proposed: Scalars['Boolean'];
  timestamps: Timestamps;
  world: Scalars['String'];
};

export type AreaDraftConnection = {
  __typename?: 'AreaDraftConnection';
  edges: Array<AreaDraftEdge>;
  nodes: Array<AreaDraft>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type AreaDraftEdge = {
  __typename?: 'AreaDraftEdge';
  cursor: Scalars['String'];
  node: AreaDraft;
};

export type AreaEdge = {
  __typename?: 'AreaEdge';
  cursor: Scalars['String'];
  node: Area;
};

export type AreaProposal = AbstractProposal & Entity & Timestamped & {
  __typename?: 'AreaProposal';
  draft: AreaDraft;
  draftId: Scalars['Int'];
  id: Scalars['Int'];
  submitter: Account;
  submitterId: Scalars['Int'];
  timestamps: Timestamps;
};

export type AreaProposalConnection = {
  __typename?: 'AreaProposalConnection';
  edges: Array<AreaProposalEdge>;
  nodes: Array<AreaProposal>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type AreaProposalEdge = {
  __typename?: 'AreaProposalEdge';
  cursor: Scalars['String'];
  node: AreaProposal;
};

export type Character = AbstractCharacter & Entity & Owned & TaleSubject & Timestamped & {
  __typename?: 'Character';
  approverId: Scalars['Int'];
  author: Account;
  authorId: Scalars['Int'];
  description: Scalars['String'];
  draft?: Maybe<CharacterDraft>;
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  speciesId: Scalars['Int'];
  taleDrafts: TaleDraftConnection;
  tales: TaleConnection;
  timestamps: Timestamps;
};


export type CharacterTaleDraftsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type CharacterTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  edges: Array<CharacterEdge>;
  nodes: Array<Character>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type CharacterDraft = AbstractCharacter & AbstractDraft & Entity & Owned & Timestamped & {
  __typename?: 'CharacterDraft';
  author: Account;
  authorId: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  original?: Maybe<Character>;
  originalId?: Maybe<Scalars['Int']>;
  proposal?: Maybe<CharacterProposal>;
  proposed: Scalars['Boolean'];
  speciesId: Scalars['Int'];
  timestamps: Timestamps;
};

export type CharacterDraftConnection = {
  __typename?: 'CharacterDraftConnection';
  edges: Array<CharacterDraftEdge>;
  nodes: Array<CharacterDraft>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type CharacterDraftEdge = {
  __typename?: 'CharacterDraftEdge';
  cursor: Scalars['String'];
  node: CharacterDraft;
};

export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  cursor: Scalars['String'];
  node: Character;
};

export type CharacterFilter = {
  author?: InputMaybe<Scalars['Int']>;
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CharacterProposal = AbstractProposal & Entity & Timestamped & {
  __typename?: 'CharacterProposal';
  draft: CharacterDraft;
  draftId: Scalars['Int'];
  id: Scalars['Int'];
  submitter: Account;
  submitterId: Scalars['Int'];
  timestamps: Timestamps;
};

export type CharacterProposalConnection = {
  __typename?: 'CharacterProposalConnection';
  edges: Array<CharacterProposalEdge>;
  nodes: Array<CharacterProposal>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type CharacterProposalEdge = {
  __typename?: 'CharacterProposalEdge';
  cursor: Scalars['String'];
  node: CharacterProposal;
};

export type CreateAreaInput = {
  maxY: Scalars['Int'];
  minY: Scalars['Int'];
  name: Scalars['String'];
  points: Array<FlatPointInput>;
  world: Scalars['String'];
};

export type CreateCharacterInput = {
  description: Scalars['String'];
  name: Scalars['String'];
  species: Scalars['Int'];
};

export type CreatePlaceInput = {
  icon: IconInput;
  name: Scalars['String'];
  world: Scalars['String'];
  x: Scalars['Int'];
  y?: InputMaybe<Scalars['Int']>;
  z: Scalars['Int'];
};

export type CreateSpeciesInput = {
  description: Scalars['String'];
  name: Scalars['String'];
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

export type Icon = {
  __typename?: 'Icon';
  name: Scalars['String'];
  provider: IconProvider;
};

export type IconInput = {
  name: Scalars['String'];
  provider: IconProvider;
};

export enum IconProvider {
  Generated = 'GENERATED',
  Leaflet = 'LEAFLET'
}

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

export type ModifyCharacterInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  species?: InputMaybe<Scalars['Int']>;
};

export type ModifyPlaceInput = {
  icon?: InputMaybe<IconInput>;
  name?: InputMaybe<Scalars['String']>;
  world?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['Int']>;
  y?: InputMaybe<Scalars['Int']>;
  z?: InputMaybe<Scalars['Int']>;
};

export type ModifySpeciesInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
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
  announce: Scalars['Boolean'];
  approveArea: Scalars['Int'];
  approveCharacter: Scalars['Int'];
  approvePlace: Scalars['Int'];
  approveSpecies: Scalars['Int'];
  approveTale: Scalars['Int'];
  createArea: Area;
  createAreaDraft: AreaDraft;
  createCharacter: Character;
  createCharacterDraft: CharacterDraft;
  createPlace: Place;
  createPlaceDraft: PlaceDraft;
  createSpecies: Species;
  createSpeciesDraft: SpeciesDraft;
  createTale: Tale;
  createTaleDraft: TaleDraft;
  deleteArea: Scalars['Boolean'];
  deleteAreaDraft: Scalars['Boolean'];
  deleteCharacter: Scalars['Boolean'];
  deleteCharacterDraft: Scalars['Boolean'];
  deletePlace: Scalars['Boolean'];
  deletePlaceDraft: Scalars['Boolean'];
  deleteSpecies: Scalars['Boolean'];
  deleteSpeciesDraft: Scalars['Boolean'];
  deleteTale: Scalars['Boolean'];
  deleteTaleDraft: Scalars['Boolean'];
  impersonate: TokenResponse;
  modifyArea: Area;
  modifyAreaDraft: AreaDraft;
  modifyCharacter: Character;
  modifyCharacterDraft: CharacterDraft;
  modifyPlace: Place;
  modifyPlaceDraft: PlaceDraft;
  modifySpecies: Species;
  modifySpeciesDraft: SpeciesDraft;
  modifyTale: Tale;
  modifyTaleDraft: TaleDraft;
  proposeArea: Scalars['Boolean'];
  proposeCharacter: Scalars['Boolean'];
  proposePlace: Scalars['Boolean'];
  proposeSpecies: Scalars['Boolean'];
  proposeTale: Scalars['Boolean'];
  refuseArea: Scalars['Boolean'];
  refuseCharacter: Scalars['Boolean'];
  refusePlace: Scalars['Boolean'];
  refuseSpecies: Scalars['Boolean'];
  refuseTale: Scalars['Boolean'];
  removeAreasFromTale: Scalars['Boolean'];
  removeAreasFromTaleDraft: Scalars['Boolean'];
  removePlacesFromTale: Scalars['Boolean'];
  removePlacesFromTaleDraft: Scalars['Boolean'];
  withdrawArea: Scalars['Boolean'];
  withdrawCharacter: Scalars['Boolean'];
  withdrawPlace: Scalars['Boolean'];
  withdrawSpecies: Scalars['Boolean'];
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
export type MutationAnnounceArgs = {
  message: Scalars['String'];
};


/** Mutation object */
export type MutationApproveAreaArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationApproveCharacterArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationApprovePlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationApproveSpeciesArgs = {
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
export type MutationCreateAreaDraftArgs = {
  input: CreateAreaInput;
};


/** Mutation object */
export type MutationCreateCharacterArgs = {
  input: CreateCharacterInput;
};


/** Mutation object */
export type MutationCreateCharacterDraftArgs = {
  input: CreateCharacterInput;
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
export type MutationCreateSpeciesArgs = {
  input: CreateSpeciesInput;
};


/** Mutation object */
export type MutationCreateSpeciesDraftArgs = {
  input: CreateSpeciesInput;
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
export type MutationDeleteAreaDraftArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeleteCharacterArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeleteCharacterDraftArgs = {
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
export type MutationDeleteSpeciesArgs = {
  id: Scalars['Int'];
};


/** Mutation object */
export type MutationDeleteSpeciesDraftArgs = {
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
export type MutationModifyAreaDraftArgs = {
  id: Scalars['Int'];
  input: ModifyAreaInput;
};


/** Mutation object */
export type MutationModifyCharacterArgs = {
  id: Scalars['Int'];
  input: ModifyCharacterInput;
};


/** Mutation object */
export type MutationModifyCharacterDraftArgs = {
  id: Scalars['Int'];
  input: ModifyCharacterInput;
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
export type MutationModifySpeciesArgs = {
  id: Scalars['Int'];
  input: ModifySpeciesInput;
};


/** Mutation object */
export type MutationModifySpeciesDraftArgs = {
  id: Scalars['Int'];
  input: ModifySpeciesInput;
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
export type MutationProposeAreaArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationProposeCharacterArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationProposePlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationProposeSpeciesArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationProposeTaleArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefuseAreaArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefuseCharacterArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefusePlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationRefuseSpeciesArgs = {
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
export type MutationWithdrawAreaArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationWithdrawCharacterArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationWithdrawPlaceArgs = {
  draftId: Scalars['Int'];
};


/** Mutation object */
export type MutationWithdrawSpeciesArgs = {
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
  CreateCharacter = 'CREATE_CHARACTER',
  CreateLocation = 'CREATE_LOCATION',
  CreateSpecies = 'CREATE_SPECIES',
  DraftCharacter = 'DRAFT_CHARACTER',
  DraftLocation = 'DRAFT_LOCATION',
  DraftSpecies = 'DRAFT_SPECIES',
  DraftTale = 'DRAFT_TALE',
  MakeAnnouncement = 'MAKE_ANNOUNCEMENT',
  PromoteAdmin = 'PROMOTE_ADMIN',
  ProposeCharacter = 'PROPOSE_CHARACTER',
  ProposeLocation = 'PROPOSE_LOCATION',
  ProposeSpecies = 'PROPOSE_SPECIES',
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
  icon: Icon;
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
  icon: Icon;
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

export type PlayerInfo = {
  __typename?: 'PlayerInfo';
  pos: Point;
  uuid: Scalars['UUID'];
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
  areaDraft: AreaDraft;
  areaDrafts: AreaDraftConnection;
  areaProposal: AreaProposal;
  areaProposals: AreaProposalConnection;
  areas: AreaConnection;
  character: Character;
  characterBySlug: Character;
  characterDraft: CharacterDraft;
  characterDrafts: CharacterDraftConnection;
  characterProposal: CharacterProposal;
  characterProposals: CharacterProposalConnection;
  characters: CharacterConnection;
  createAreaDraftFrom: AreaDraft;
  createCharacterDraftFrom: CharacterDraft;
  createPlaceDraftFrom: PlaceDraft;
  createSpeciesDraftFrom: SpeciesDraft;
  createTaleDraftFrom: TaleDraft;
  me?: Maybe<Account>;
  place: Place;
  placeBySlug: Place;
  placeDraft: PlaceDraft;
  placeDrafts: PlaceDraftConnection;
  placeProposal: PlaceProposal;
  placeProposals: PlaceProposalConnection;
  places: PlaceConnection;
  player?: Maybe<PlayerInfo>;
  players: Array<PlayerInfo>;
  server: ServerInfo;
  settings: ApiSettings;
  species: Species;
  speciesBySlug: Species;
  speciesDraft: SpeciesDraft;
  speciesDrafts: SpeciesDraftConnection;
  speciesProposal: SpeciesProposal;
  speciesProposals: SpeciesProposalConnection;
  speciess: SpeciesConnection;
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
export type QueryAreaDraftArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryAreaDraftsArgs = {
  filter?: InputMaybe<LocationFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryAreaProposalArgs = {
  draftId: Scalars['Int'];
};


/** Query object */
export type QueryAreaProposalsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryAreasArgs = {
  filter?: InputMaybe<LocationFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryCharacterArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryCharacterBySlugArgs = {
  slug: Scalars['String'];
};


/** Query object */
export type QueryCharacterDraftArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QueryCharacterDraftsArgs = {
  filter?: InputMaybe<CharacterFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryCharacterProposalArgs = {
  draftId: Scalars['Int'];
};


/** Query object */
export type QueryCharacterProposalsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryCharactersArgs = {
  filter?: InputMaybe<CharacterFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QueryCreateAreaDraftFromArgs = {
  original: Scalars['Int'];
};


/** Query object */
export type QueryCreateCharacterDraftFromArgs = {
  original: Scalars['Int'];
};


/** Query object */
export type QueryCreatePlaceDraftFromArgs = {
  original: Scalars['Int'];
};


/** Query object */
export type QueryCreateSpeciesDraftFromArgs = {
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
export type QueryPlayerArgs = {
  uuid: Scalars['String'];
};


/** Query object */
export type QuerySpeciesArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QuerySpeciesBySlugArgs = {
  slug: Scalars['String'];
};


/** Query object */
export type QuerySpeciesDraftArgs = {
  id: Scalars['Int'];
};


/** Query object */
export type QuerySpeciesDraftsArgs = {
  filter?: InputMaybe<SpeciesFilter>;
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QuerySpeciesProposalArgs = {
  draftId: Scalars['Int'];
};


/** Query object */
export type QuerySpeciesProposalsArgs = {
  pagination?: InputMaybe<Pagination>;
};


/** Query object */
export type QuerySpeciessArgs = {
  filter?: InputMaybe<SpeciesFilter>;
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

export type ServerInfo = {
  __typename?: 'ServerInfo';
  status: ServerStatus;
};

export enum ServerStatus {
  Recovered = 'RECOVERED',
  Started = 'STARTED',
  Stopped = 'STOPPED'
}

export type Species = AbstractSpecies & Entity & Owned & TaleSubject & Timestamped & {
  __typename?: 'Species';
  approverId: Scalars['Int'];
  author: Account;
  authorId: Scalars['Int'];
  description: Scalars['String'];
  draft?: Maybe<SpeciesDraft>;
  id: Scalars['Int'];
  name: Scalars['String'];
  slug: Scalars['String'];
  taleDrafts: TaleDraftConnection;
  tales: TaleConnection;
  timestamps: Timestamps;
};


export type SpeciesTaleDraftsArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type SpeciesTalesArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type SpeciesConnection = {
  __typename?: 'SpeciesConnection';
  edges: Array<SpeciesEdge>;
  nodes: Array<Species>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type SpeciesDraft = AbstractDraft & AbstractSpecies & Entity & Owned & Timestamped & {
  __typename?: 'SpeciesDraft';
  author: Account;
  authorId: Scalars['Int'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  original?: Maybe<Species>;
  originalId?: Maybe<Scalars['Int']>;
  proposal?: Maybe<SpeciesProposal>;
  proposed: Scalars['Boolean'];
  timestamps: Timestamps;
};

export type SpeciesDraftConnection = {
  __typename?: 'SpeciesDraftConnection';
  edges: Array<SpeciesDraftEdge>;
  nodes: Array<SpeciesDraft>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type SpeciesDraftEdge = {
  __typename?: 'SpeciesDraftEdge';
  cursor: Scalars['String'];
  node: SpeciesDraft;
};

export type SpeciesEdge = {
  __typename?: 'SpeciesEdge';
  cursor: Scalars['String'];
  node: Species;
};

export type SpeciesFilter = {
  author?: InputMaybe<Scalars['Int']>;
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  modifiedAfter?: InputMaybe<Scalars['DateTime']>;
  modifiedBefore?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
};

export type SpeciesProposal = AbstractProposal & Entity & Timestamped & {
  __typename?: 'SpeciesProposal';
  draft: SpeciesDraft;
  draftId: Scalars['Int'];
  id: Scalars['Int'];
  submitter: Account;
  submitterId: Scalars['Int'];
  timestamps: Timestamps;
};

export type SpeciesProposalConnection = {
  __typename?: 'SpeciesProposalConnection';
  edges: Array<SpeciesProposalEdge>;
  nodes: Array<SpeciesProposal>;
  pageInfo: PageInfo;
  totalCount: Scalars['Long'];
};

export type SpeciesProposalEdge = {
  __typename?: 'SpeciesProposalEdge';
  cursor: Scalars['String'];
  node: SpeciesProposal;
};

export type Tale = AbstractTale & Entity & Owned & Timestamped & {
  __typename?: 'Tale';
  approverId: Scalars['Int'];
  areas: AreaConnection;
  author: Account;
  authorId: Scalars['Int'];
  characters: CharacterConnection;
  draft?: Maybe<TaleDraft>;
  id: Scalars['Int'];
  places: PlaceConnection;
  species: SpeciesConnection;
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type TaleAreasArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TaleCharactersArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TalePlacesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TaleSpeciesArgs = {
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
  characters: CharacterConnection;
  id: Scalars['Int'];
  original?: Maybe<Tale>;
  originalId?: Maybe<Scalars['Int']>;
  places: PlaceConnection;
  proposal?: Maybe<TaleProposal>;
  proposed: Scalars['Boolean'];
  species: SpeciesConnection;
  text: Scalars['String'];
  timestamps: Timestamps;
  title: Scalars['String'];
};


export type TaleDraftAreasArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TaleDraftCharactersArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TaleDraftPlacesArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type TaleDraftSpeciesArgs = {
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

export type AreaDraftFragment = { __typename?: 'AreaDraft', proposed: boolean, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> };

export type GetAreaDraftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetAreaDraftsQuery = { __typename?: 'Query', connection: { __typename?: 'AreaDraftConnection', totalCount: any, nodes: Array<{ __typename?: 'AreaDraft', id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetAreaDraftQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAreaDraftQuery = { __typename?: 'Query', areaDraft: { __typename?: 'AreaDraft', proposed: boolean, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> } };

export type CreateAreaDraftMutationVariables = Exact<{
  input: CreateAreaInput;
}>;


export type CreateAreaDraftMutation = { __typename?: 'Mutation', created: { __typename?: 'AreaDraft', id: number } };

export type ModifyAreaDraftMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyAreaInput;
}>;


export type ModifyAreaDraftMutation = { __typename?: 'Mutation', modified: { __typename?: 'AreaDraft', id: number } };

export type ProposeAreaMutationVariables = Exact<{
  draft: Scalars['Int'];
}>;


export type ProposeAreaMutation = { __typename?: 'Mutation', proposal: boolean };

type AreaSummary_Area_Fragment = { __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }>, tales: { __typename?: 'TaleConnection', totalCount: any } };

type AreaSummary_AreaDraft_Fragment = { __typename?: 'AreaDraft', id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> };

export type AreaSummaryFragment = AreaSummary_Area_Fragment | AreaSummary_AreaDraft_Fragment;

export type AreaFragment = { __typename?: 'Area', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> };

export type GetAreasQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filter?: InputMaybe<LocationFilter>;
}>;


export type GetAreasQuery = { __typename?: 'Query', connection: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }>, tales: { __typename?: 'TaleConnection', totalCount: any } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetAreaQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetAreaQuery = { __typename?: 'Query', area: { __typename?: 'Area', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> } };

export type GetAreaByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAreaByIdQuery = { __typename?: 'Query', area: { __typename?: 'Area', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> } };

export type CreateAreaMutationVariables = Exact<{
  input: CreateAreaInput;
}>;


export type CreateAreaMutation = { __typename?: 'Mutation', created: { __typename?: 'Area', id: number, slug: string } };

export type ModifyAreaMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyAreaInput;
}>;


export type ModifyAreaMutation = { __typename?: 'Mutation', modified: { __typename?: 'Area', id: number, slug: string } };

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

export type IconFragment = { __typename?: 'Icon', provider: IconProvider, name: string };

type MapPlace_Place_Fragment = { __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

type MapPlace_PlaceDraft_Fragment = { __typename?: 'PlaceDraft', id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type MapPlaceFragment = MapPlace_Place_Fragment | MapPlace_PlaceDraft_Fragment;

type MapArea_Area_Fragment = { __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> };

type MapArea_AreaDraft_Fragment = { __typename?: 'AreaDraft', id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> };

export type MapAreaFragment = MapArea_Area_Fragment | MapArea_AreaDraft_Fragment;

export type WorldFragment = { __typename?: 'World', id: string, name: string };

export type MapLocationsQueryVariables = Exact<{ [key: string]: never; }>;


export type MapLocationsQuery = { __typename?: 'Query', places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> } };

export type GetWorldsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWorldsQuery = { __typename?: 'Query', worlds: Array<{ __typename?: 'World', id: string, name: string }> };

export type PageInfoFragment = { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any };

export type PlaceDraftFragment = { __typename?: 'PlaceDraft', proposed: boolean, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetPlaceDraftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetPlaceDraftsQuery = { __typename?: 'Query', connection: { __typename?: 'PlaceDraftConnection', totalCount: any, nodes: Array<{ __typename?: 'PlaceDraft', id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetPlaceDraftQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlaceDraftQuery = { __typename?: 'Query', placeDraft: { __typename?: 'PlaceDraft', proposed: boolean, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

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

type PlaceSummary_Place_Fragment = { __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number }, tales: { __typename?: 'TaleConnection', totalCount: any } };

type PlaceSummary_PlaceDraft_Fragment = { __typename?: 'PlaceDraft', id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type PlaceSummaryFragment = PlaceSummary_Place_Fragment | PlaceSummary_PlaceDraft_Fragment;

export type PlaceFragment = { __typename?: 'Place', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetPlacesQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filter?: InputMaybe<LocationFilter>;
}>;


export type GetPlacesQuery = { __typename?: 'Query', connection: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number }, tales: { __typename?: 'TaleConnection', totalCount: any } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetPlaceQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPlaceQuery = { __typename?: 'Query', place: { __typename?: 'Place', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type GetPlaceByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlaceByIdQuery = { __typename?: 'Query', place: { __typename?: 'Place', slug: string, id: number, name: string, tales: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, text: string }> }, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } } };

export type CreatePlaceMutationVariables = Exact<{
  input: CreatePlaceInput;
}>;


export type CreatePlaceMutation = { __typename?: 'Mutation', created: { __typename?: 'Place', id: number, slug: string } };

export type ModifyPlaceMutationVariables = Exact<{
  id: Scalars['Int'];
  input: ModifyPlaceInput;
}>;


export type ModifyPlaceMutation = { __typename?: 'Mutation', modified: { __typename?: 'Place', id: number, slug: string } };

export type MapPlayerFragment = { __typename?: 'PlayerInfo', uuid: any, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } };

export type GetPlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPlayersQuery = { __typename?: 'Query', players: Array<{ __typename?: 'PlayerInfo', uuid: any, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> };

export type RelationsGraphQueryVariables = Exact<{ [key: string]: never; }>;


export type RelationsGraphQuery = { __typename?: 'Query', tales: { __typename?: 'TaleConnection', nodes: Array<{ __typename?: 'Tale', id: number, authorId: number, title: string, places: { __typename?: 'PlaceConnection', nodes: Array<{ __typename?: 'Place', id: number }> }, areas: { __typename?: 'AreaConnection', nodes: Array<{ __typename?: 'Area', id: number }> }, species: { __typename?: 'SpeciesConnection', nodes: Array<{ __typename?: 'Species', id: number }> }, characters: { __typename?: 'CharacterConnection', nodes: Array<{ __typename?: 'Character', id: number }> } }> }, places: { __typename?: 'PlaceConnection', nodes: Array<{ __typename?: 'Place', id: number, authorId: number, name: string }> }, areas: { __typename?: 'AreaConnection', nodes: Array<{ __typename?: 'Area', id: number, authorId: number, name: string }> }, species: { __typename?: 'SpeciesConnection', nodes: Array<{ __typename?: 'Species', id: number, authorId: number, name: string }> }, characters: { __typename?: 'CharacterConnection', nodes: Array<{ __typename?: 'Character', id: number, authorId: number, speciesId: number, name: string }> } };

type WithTime_Account_Fragment = { __typename?: 'Account', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Area_Fragment = { __typename?: 'Area', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_AreaDraft_Fragment = { __typename?: 'AreaDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_AreaProposal_Fragment = { __typename?: 'AreaProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Character_Fragment = { __typename?: 'Character', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_CharacterDraft_Fragment = { __typename?: 'CharacterDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_CharacterProposal_Fragment = { __typename?: 'CharacterProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Place_Fragment = { __typename?: 'Place', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_PlaceDraft_Fragment = { __typename?: 'PlaceDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_PlaceProposal_Fragment = { __typename?: 'PlaceProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Species_Fragment = { __typename?: 'Species', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_SpeciesDraft_Fragment = { __typename?: 'SpeciesDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_SpeciesProposal_Fragment = { __typename?: 'SpeciesProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_Tale_Fragment = { __typename?: 'Tale', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_TaleDraft_Fragment = { __typename?: 'TaleDraft', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type WithTime_TaleProposal_Fragment = { __typename?: 'TaleProposal', timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type WithTimeFragment = WithTime_Account_Fragment | WithTime_Area_Fragment | WithTime_AreaDraft_Fragment | WithTime_AreaProposal_Fragment | WithTime_Character_Fragment | WithTime_CharacterDraft_Fragment | WithTime_CharacterProposal_Fragment | WithTime_Place_Fragment | WithTime_PlaceDraft_Fragment | WithTime_PlaceProposal_Fragment | WithTime_Species_Fragment | WithTime_SpeciesDraft_Fragment | WithTime_SpeciesProposal_Fragment | WithTime_Tale_Fragment | WithTime_TaleDraft_Fragment | WithTime_TaleProposal_Fragment;

type SubjectSummary_Area_Fragment = { __typename?: 'Area', tales: { __typename?: 'TaleConnection', totalCount: any } };

type SubjectSummary_Character_Fragment = { __typename?: 'Character', tales: { __typename?: 'TaleConnection', totalCount: any } };

type SubjectSummary_Place_Fragment = { __typename?: 'Place', tales: { __typename?: 'TaleConnection', totalCount: any } };

type SubjectSummary_Species_Fragment = { __typename?: 'Species', tales: { __typename?: 'TaleConnection', totalCount: any } };

export type SubjectSummaryFragment = SubjectSummary_Area_Fragment | SubjectSummary_Character_Fragment | SubjectSummary_Place_Fragment | SubjectSummary_Species_Fragment;

export type GetTaleDraftsQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
}>;


export type GetTaleDraftsQuery = { __typename?: 'Query', connection: { __typename?: 'TaleDraftConnection', totalCount: any, nodes: Array<{ __typename?: 'TaleDraft', id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any }, areas: { __typename?: 'AreaConnection', totalCount: any }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleDraftQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaleDraftQuery = { __typename?: 'Query', taleDraft: { __typename?: 'TaleDraft', proposed: boolean, text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

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

type Tale_Tale_Fragment = { __typename?: 'Tale', text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

type Tale_TaleDraft_Fragment = { __typename?: 'TaleDraft', text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } };

export type TaleFragment = Tale_Tale_Fragment | Tale_TaleDraft_Fragment;

export type GetTalesQueryVariables = Exact<{
  pagination?: InputMaybe<Pagination>;
  filter?: InputMaybe<TaleFilter>;
}>;


export type GetTalesQuery = { __typename?: 'Query', connection: { __typename?: 'TaleConnection', totalCount: any, nodes: Array<{ __typename?: 'Tale', id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any }, areas: { __typename?: 'AreaConnection', totalCount: any }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } }>, pageInfo: { __typename?: 'PageInfo', hasPreviousPage: boolean, hasNextPage: boolean, startCursor?: string | null, endCursor?: string | null, offset: any } } };

export type GetTaleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetTaleQuery = { __typename?: 'Query', tale: { __typename?: 'Tale', text: string, id: number, title: string, places: { __typename?: 'PlaceConnection', totalCount: any, nodes: Array<{ __typename?: 'Place', slug: string, id: number, name: string, icon: { __typename?: 'Icon', provider: IconProvider, name: string }, pos: { __typename?: 'Point', x: number, y?: number | null, z: number } }> }, areas: { __typename?: 'AreaConnection', totalCount: any, nodes: Array<{ __typename?: 'Area', slug: string, id: number, name: string, points: Array<{ __typename?: 'FlatPoint', x: number, z: number }> }> }, timestamps: { __typename?: 'Timestamps', createdAt: number, modifiedAt: number } } };

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
export const SelfFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Self"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<SelfFragment, unknown>;
export const FlatPosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<FlatPosFragment, unknown>;
export const MapAreaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<MapAreaFragment, unknown>;
export const AreaDraftFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AreaDraft"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AreaDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<AreaDraftFragment, unknown>;
export const SubjectSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<SubjectSummaryFragment, unknown>;
export const AreaSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AreaSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<AreaSummaryFragment, unknown>;
export const AreaFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Area"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AreaSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AreaSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}}]} as unknown as DocumentNode<AreaFragment, unknown>;
export const WithTimeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}}]} as unknown as DocumentNode<WithTimeFragment, unknown>;
export const PlaceProposalPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<PlaceProposalPreviewFragment, unknown>;
export const MapLocationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapLocation"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractLocation"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<MapLocationFragment, unknown>;
export const WorldFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"World"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"World"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<WorldFragment, unknown>;
export const PageInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<PageInfoFragment, unknown>;
export const PosFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<PosFragment, unknown>;
export const IconFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<IconFragment, unknown>;
export const MapPlaceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<MapPlaceFragment, unknown>;
export const PlaceDraftFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceDraft"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}}]} as unknown as DocumentNode<PlaceDraftFragment, unknown>;
export const PlaceSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]} as unknown as DocumentNode<PlaceSummaryFragment, unknown>;
export const PlaceFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Place"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}}]} as unknown as DocumentNode<PlaceFragment, unknown>;
export const MapPlayerFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<MapPlayerFragment, unknown>;
export const TaleProposalPreviewFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]} as unknown as DocumentNode<TaleProposalPreviewFragment, unknown>;
export const TaleSummaryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}}]} as unknown as DocumentNode<TaleSummaryFragment, unknown>;
export const TaleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tale"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<TaleFragment, unknown>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Self"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Self"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAccountsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAccounts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AccountFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accounts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetAccountsQuery, GetAccountsQueryVariables>;
export const ApiSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"apiSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"development"}}]}}]}}]} as unknown as DocumentNode<ApiSettingsQuery, ApiSettingsQueryVariables>;
export const GetAreaDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAreaDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"areaDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetAreaDraftsQuery, GetAreaDraftsQueryVariables>;
export const GetAreaDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAreaDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"areaDraft"},"name":{"kind":"Name","value":"areaDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AreaDraft"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AreaDraft"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AreaDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}}]} as unknown as DocumentNode<GetAreaDraftQuery, GetAreaDraftQueryVariables>;
export const CreateAreaDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAreaDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAreaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createAreaDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateAreaDraftMutation, CreateAreaDraftMutationVariables>;
export const ModifyAreaDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyAreaDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyAreaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyAreaDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ModifyAreaDraftMutation, ModifyAreaDraftMutationVariables>;
export const ProposeAreaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"proposeArea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"proposeArea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ProposeAreaMutation, ProposeAreaMutationVariables>;
export const GetAreasDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAreas"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocationFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"areas"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AreaSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AreaSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetAreasQuery, GetAreasQueryVariables>;
export const GetAreaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"area"},"name":{"kind":"Name","value":"areaBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Area"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AreaSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Area"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AreaSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<GetAreaQuery, GetAreaQueryVariables>;
export const GetAreaByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAreaById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"area"},"name":{"kind":"Name","value":"area"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Area"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AreaSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Area"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AreaSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<GetAreaByIdQuery, GetAreaByIdQueryVariables>;
export const CreateAreaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createArea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAreaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createArea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CreateAreaMutation, CreateAreaMutationVariables>;
export const ModifyAreaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyArea"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyAreaInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyArea"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ModifyAreaMutation, ModifyAreaMutationVariables>;
export const ImpersonateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"impersonate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"impersonate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<ImpersonateMutation, ImpersonateMutationVariables>;
export const GetPlaceProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceProposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"placeProposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceProposalPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetPlaceProposalsQuery, GetPlaceProposalsQueryVariables>;
export const GetPlaceProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"placeProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceProposalPreview"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}}]} as unknown as DocumentNode<GetPlaceProposalQuery, GetPlaceProposalQueryVariables>;
export const ApprovePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approvePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"approvePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ApprovePlaceMutation, ApprovePlaceMutationVariables>;
export const RefusePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refusePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"refusePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<RefusePlaceMutation, RefusePlaceMutationVariables>;
export const MapLocationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"mapLocations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<MapLocationsQuery, MapLocationsQueryVariables>;
export const GetWorldsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWorlds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"worlds"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"World"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"World"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"World"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<GetWorldsQuery, GetWorldsQueryVariables>;
export const GetPlaceDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"placeDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetPlaceDraftsQuery, GetPlaceDraftsQueryVariables>;
export const GetPlaceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"placeDraft"},"name":{"kind":"Name","value":"placeDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceDraft"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceDraft"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}}]} as unknown as DocumentNode<GetPlaceDraftQuery, GetPlaceDraftQueryVariables>;
export const CreatePlaceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPlaceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createPlaceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatePlaceDraftMutation, CreatePlaceDraftMutationVariables>;
export const ModifyPlaceDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyPlaceDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyPlaceDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<ModifyPlaceDraftMutation, ModifyPlaceDraftMutationVariables>;
export const ProposePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"proposePlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"proposePlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ProposePlaceMutation, ProposePlaceMutationVariables>;
export const GetPlacesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaces"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LocationFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"places"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetPlacesQuery, GetPlacesQueryVariables>;
export const GetPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"place"},"name":{"kind":"Name","value":"placeBySlug"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Place"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Place"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaceQuery, GetPlaceQueryVariables>;
export const GetPlaceByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlaceById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"place"},"name":{"kind":"Name","value":"place"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Place"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubjectSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleSubject"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PlaceSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubjectSummary"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Place"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PlaceSummary"}},{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]} as unknown as DocumentNode<GetPlaceByIdQuery, GetPlaceByIdQueryVariables>;
export const CreatePlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreatePlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<CreatePlaceMutation, CreatePlaceMutationVariables>;
export const ModifyPlaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyPlace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyPlaceInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyPlace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<ModifyPlaceMutation, ModifyPlaceMutationVariables>;
export const GetPlayersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPlayers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"players"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlayer"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlayer"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlayerInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uuid"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}}]}}]} as unknown as DocumentNode<GetPlayersQuery, GetPlayersQueryVariables>;
export const RelationsGraphDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"relationsGraph"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"species"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"species"},"name":{"kind":"Name","value":"speciess"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"characters"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"speciesId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RelationsGraphQuery, RelationsGraphQueryVariables>;
export const GetTaleDraftsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleDrafts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"taleDrafts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetTaleDraftsQuery, GetTaleDraftsQueryVariables>;
export const GetTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"taleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tale"}},{"kind":"Field","name":{"kind":"Name","value":"proposed"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tale"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}}]}}]}}]}}]} as unknown as DocumentNode<GetTaleDraftQuery, GetTaleDraftQueryVariables>;
export const CreateTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaleInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"created"},"name":{"kind":"Name","value":"createTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateTaleDraftMutation, CreateTaleDraftMutationVariables>;
export const ModifyTaleDraftDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"modifyTaleDraft"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ModifyTaleInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addedPlaces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"removedPlaces"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"modified"},"name":{"kind":"Name","value":"modifyTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"addedLocations"},"name":{"kind":"Name","value":"addPlacesToTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addedPlaces"}}}]},{"kind":"Field","alias":{"kind":"Name","value":"removedLocations"},"name":{"kind":"Name","value":"removePlacesFromTaleDraft"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"ids"},"value":{"kind":"Variable","name":{"kind":"Name","value":"removedPlaces"}}}]}]}}]} as unknown as DocumentNode<ModifyTaleDraftMutation, ModifyTaleDraftMutationVariables>;
export const ProposeTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"proposeTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"proposeTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ProposeTaleMutation, ProposeTaleMutationVariables>;
export const GetTaleProposalsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleProposals"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"taleProposals"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleProposalPreview"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetTaleProposalsQuery, GetTaleProposalsQueryVariables>;
export const GetTaleProposalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTaleProposal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"proposal"},"name":{"kind":"Name","value":"taleProposal"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleProposalPreview"}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Account"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleProposalPreview"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TaleProposal"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"submitter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"draft"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"original"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetTaleProposalQuery, GetTaleProposalQueryVariables>;
export const ApproveTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"approveTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"approveTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<ApproveTaleMutation, ApproveTaleMutationVariables>;
export const RefuseTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refuseTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"draft"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"converted"},"name":{"kind":"Name","value":"refuseTale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"draftId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"draft"}}}]}]}}]} as unknown as DocumentNode<RefuseTaleMutation, RefuseTaleMutationVariables>;
export const GetTalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TaleFilter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"connection"},"name":{"kind":"Name","value":"tales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfo"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}}]}}]} as unknown as DocumentNode<GetTalesQuery, GetTalesQueryVariables>;
export const GetTaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tale"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Tale"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WithTime"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Timestamped"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timestamps"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"modifiedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TaleSummary"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WithTime"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Point"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"y"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Icon"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Icon"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapPlace"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractPlace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pos"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Place"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PlaceDraft"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Icon"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FlatPos"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FlatPoint"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"x"}},{"kind":"Field","name":{"kind":"Name","value":"z"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MapArea"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"points"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FlatPos"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Area"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Tale"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AbstractTale"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TaleSummary"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"places"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapPlace"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"areas"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MapArea"}}]}}]}}]}}]} as unknown as DocumentNode<GetTaleQuery, GetTaleQueryVariables>;
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
    "AbstractCharacter": [
      "Character",
      "CharacterDraft"
    ],
    "AbstractDraft": [
      "AreaDraft",
      "CharacterDraft",
      "PlaceDraft",
      "SpeciesDraft",
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
      "AreaProposal",
      "CharacterProposal",
      "PlaceProposal",
      "SpeciesProposal",
      "TaleProposal"
    ],
    "AbstractSpecies": [
      "Species",
      "SpeciesDraft"
    ],
    "AbstractTale": [
      "Tale",
      "TaleDraft"
    ],
    "Entity": [
      "Account",
      "Area",
      "AreaDraft",
      "AreaProposal",
      "Character",
      "CharacterDraft",
      "CharacterProposal",
      "Place",
      "PlaceDraft",
      "PlaceProposal",
      "Species",
      "SpeciesDraft",
      "SpeciesProposal",
      "Tale",
      "TaleDraft",
      "TaleProposal"
    ],
    "Owned": [
      "Area",
      "AreaDraft",
      "Character",
      "CharacterDraft",
      "Place",
      "PlaceDraft",
      "Species",
      "SpeciesDraft",
      "Tale",
      "TaleDraft"
    ],
    "TaleSubject": [
      "Area",
      "Character",
      "Place",
      "Species"
    ],
    "Timestamped": [
      "Account",
      "Area",
      "AreaDraft",
      "AreaProposal",
      "Character",
      "CharacterDraft",
      "CharacterProposal",
      "Place",
      "PlaceDraft",
      "PlaceProposal",
      "Species",
      "SpeciesDraft",
      "SpeciesProposal",
      "Tale",
      "TaleDraft",
      "TaleProposal"
    ]
  }
};
      export default result;
    