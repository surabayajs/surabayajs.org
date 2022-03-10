//@ts-nocheck
/* eslint-disable */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  contentType: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  height: Maybe<Scalars['Int']>;
  linkedFrom: Maybe<AssetLinkingCollections>;
  size: Maybe<Scalars['Int']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
  transform: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType: InputMaybe<Scalars['String']>;
  contentType_contains: InputMaybe<Scalars['String']>;
  contentType_exists: InputMaybe<Scalars['Boolean']>;
  contentType_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not: InputMaybe<Scalars['String']>;
  contentType_not_contains: InputMaybe<Scalars['String']>;
  contentType_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName: InputMaybe<Scalars['String']>;
  fileName_contains: InputMaybe<Scalars['String']>;
  fileName_exists: InputMaybe<Scalars['Boolean']>;
  fileName_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not: InputMaybe<Scalars['String']>;
  fileName_not_contains: InputMaybe<Scalars['String']>;
  fileName_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height: InputMaybe<Scalars['Int']>;
  height_exists: InputMaybe<Scalars['Boolean']>;
  height_gt: InputMaybe<Scalars['Int']>;
  height_gte: InputMaybe<Scalars['Int']>;
  height_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt: InputMaybe<Scalars['Int']>;
  height_lte: InputMaybe<Scalars['Int']>;
  height_not: InputMaybe<Scalars['Int']>;
  height_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size: InputMaybe<Scalars['Int']>;
  size_exists: InputMaybe<Scalars['Boolean']>;
  size_gt: InputMaybe<Scalars['Int']>;
  size_gte: InputMaybe<Scalars['Int']>;
  size_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt: InputMaybe<Scalars['Int']>;
  size_lte: InputMaybe<Scalars['Int']>;
  size_not: InputMaybe<Scalars['Int']>;
  size_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width: InputMaybe<Scalars['Int']>;
  width_exists: InputMaybe<Scalars['Boolean']>;
  width_gt: InputMaybe<Scalars['Int']>;
  width_gte: InputMaybe<Scalars['Int']>;
  width_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt: InputMaybe<Scalars['Int']>;
  width_lte: InputMaybe<Scalars['Int']>;
  width_not: InputMaybe<Scalars['Int']>;
  width_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  eventCollection: Maybe<EventCollection>;
  externalResourceCollection: Maybe<ExternalResourceCollection>;
  speakerCollection: Maybe<SpeakerCollection>;
  sponsorCollection: Maybe<SponsorCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsExternalResourceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSpeakerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSponsorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  sys: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type Event = Entry & {
  albumUrl: Maybe<Scalars['String']>;
  category: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  coordinates: Maybe<Location>;
  description: Maybe<Scalars['String']>;
  linkedFrom: Maybe<EventLinkingCollections>;
  location: Maybe<Scalars['String']>;
  notes: Maybe<Scalars['String']>;
  onlineEvent: Maybe<Scalars['Boolean']>;
  poster: Maybe<Asset>;
  quota: Maybe<Scalars['Int']>;
  sessionsCollection: Maybe<EventSessionsCollection>;
  slug: Maybe<Scalars['String']>;
  startingDate: Maybe<Scalars['DateTime']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  videoUrl: Maybe<Array<Maybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventAlbumUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventCategoryArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventCoordinatesArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventLocationArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventNotesArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventOnlineEventArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventPosterArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventQuotaArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventSessionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventSlugArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventStartingDateArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventVideoUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type EventCollection = {
  items: Array<Maybe<Event>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EventFilter = {
  AND: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR: InputMaybe<Array<InputMaybe<EventFilter>>>;
  albumUrl: InputMaybe<Scalars['String']>;
  albumUrl_contains: InputMaybe<Scalars['String']>;
  albumUrl_exists: InputMaybe<Scalars['Boolean']>;
  albumUrl_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  albumUrl_not: InputMaybe<Scalars['String']>;
  albumUrl_not_contains: InputMaybe<Scalars['String']>;
  albumUrl_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category: InputMaybe<Scalars['String']>;
  category_contains: InputMaybe<Scalars['String']>;
  category_exists: InputMaybe<Scalars['Boolean']>;
  category_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_not: InputMaybe<Scalars['String']>;
  category_not_contains: InputMaybe<Scalars['String']>;
  category_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  coordinates_exists: InputMaybe<Scalars['Boolean']>;
  coordinates_within_circle: InputMaybe<Scalars['Circle']>;
  coordinates_within_rectangle: InputMaybe<Scalars['Rectangle']>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location: InputMaybe<Scalars['String']>;
  location_contains: InputMaybe<Scalars['String']>;
  location_exists: InputMaybe<Scalars['Boolean']>;
  location_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not: InputMaybe<Scalars['String']>;
  location_not_contains: InputMaybe<Scalars['String']>;
  location_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes: InputMaybe<Scalars['String']>;
  notes_contains: InputMaybe<Scalars['String']>;
  notes_exists: InputMaybe<Scalars['Boolean']>;
  notes_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notes_not: InputMaybe<Scalars['String']>;
  notes_not_contains: InputMaybe<Scalars['String']>;
  notes_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  onlineEvent: InputMaybe<Scalars['Boolean']>;
  onlineEvent_exists: InputMaybe<Scalars['Boolean']>;
  onlineEvent_not: InputMaybe<Scalars['Boolean']>;
  poster_exists: InputMaybe<Scalars['Boolean']>;
  quota: InputMaybe<Scalars['Int']>;
  quota_exists: InputMaybe<Scalars['Boolean']>;
  quota_gt: InputMaybe<Scalars['Int']>;
  quota_gte: InputMaybe<Scalars['Int']>;
  quota_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  quota_lt: InputMaybe<Scalars['Int']>;
  quota_lte: InputMaybe<Scalars['Int']>;
  quota_not: InputMaybe<Scalars['Int']>;
  quota_not_in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sessionsCollection_exists: InputMaybe<Scalars['Boolean']>;
  slug: InputMaybe<Scalars['String']>;
  slug_contains: InputMaybe<Scalars['String']>;
  slug_exists: InputMaybe<Scalars['Boolean']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not: InputMaybe<Scalars['String']>;
  slug_not_contains: InputMaybe<Scalars['String']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startingDate: InputMaybe<Scalars['DateTime']>;
  startingDate_exists: InputMaybe<Scalars['Boolean']>;
  startingDate_gt: InputMaybe<Scalars['DateTime']>;
  startingDate_gte: InputMaybe<Scalars['DateTime']>;
  startingDate_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startingDate_lt: InputMaybe<Scalars['DateTime']>;
  startingDate_lte: InputMaybe<Scalars['DateTime']>;
  startingDate_not: InputMaybe<Scalars['DateTime']>;
  startingDate_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoUrl_contains_all: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoUrl_contains_none: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoUrl_contains_some: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  videoUrl_exists: InputMaybe<Scalars['Boolean']>;
};

export type EventLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EventOrder {
  AlbumUrlAsc = 'albumUrl_ASC',
  AlbumUrlDesc = 'albumUrl_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  OnlineEventAsc = 'onlineEvent_ASC',
  OnlineEventDesc = 'onlineEvent_DESC',
  QuotaAsc = 'quota_ASC',
  QuotaDesc = 'quota_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartingDateAsc = 'startingDate_ASC',
  StartingDateDesc = 'startingDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type EventSessionsCollection = {
  items: Array<Maybe<Session>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

/** Place to add external resource such as Link, Contact, etc. [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/externalResource) */
export type ExternalResource = Entry & {
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']>;
  image: Maybe<Asset>;
  linkedFrom: Maybe<ExternalResourceLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


/** Place to add external resource such as Link, Contact, etc. [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/externalResource) */
export type ExternalResourceDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Place to add external resource such as Link, Contact, etc. [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/externalResource) */
export type ExternalResourceImageArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** Place to add external resource such as Link, Contact, etc. [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/externalResource) */
export type ExternalResourceLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Place to add external resource such as Link, Contact, etc. [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/externalResource) */
export type ExternalResourceTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** Place to add external resource such as Link, Contact, etc. [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/externalResource) */
export type ExternalResourceUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ExternalResourceCollection = {
  items: Array<Maybe<ExternalResource>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ExternalResourceFilter = {
  AND: InputMaybe<Array<InputMaybe<ExternalResourceFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ExternalResourceFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists: InputMaybe<Scalars['Boolean']>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExternalResourceLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};


export type ExternalResourceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ExternalResourceOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width: InputMaybe<Scalars['Dimension']>;
};

export type Location = {
  lat: Maybe<Scalars['Float']>;
  lon: Maybe<Scalars['Float']>;
};

/** A place to write blog post [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/post) */
export type Post = Entry & {
  content: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom: Maybe<PostLinkingCollections>;
  slug: Maybe<Scalars['String']>;
  subtitle: Maybe<Scalars['String']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
};


/** A place to write blog post [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/post) */
export type PostContentArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** A place to write blog post [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/post) */
export type PostLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** A place to write blog post [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/post) */
export type PostSlugArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** A place to write blog post [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/post) */
export type PostSubtitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** A place to write blog post [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/post) */
export type PostTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type PostCollection = {
  items: Array<Maybe<Post>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PostFilter = {
  AND: InputMaybe<Array<InputMaybe<PostFilter>>>;
  OR: InputMaybe<Array<InputMaybe<PostFilter>>>;
  content: InputMaybe<Scalars['String']>;
  content_contains: InputMaybe<Scalars['String']>;
  content_exists: InputMaybe<Scalars['Boolean']>;
  content_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_not: InputMaybe<Scalars['String']>;
  content_not_contains: InputMaybe<Scalars['String']>;
  content_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  slug: InputMaybe<Scalars['String']>;
  slug_contains: InputMaybe<Scalars['String']>;
  slug_exists: InputMaybe<Scalars['Boolean']>;
  slug_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not: InputMaybe<Scalars['String']>;
  slug_not_contains: InputMaybe<Scalars['String']>;
  slug_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle: InputMaybe<Scalars['String']>;
  subtitle_contains: InputMaybe<Scalars['String']>;
  subtitle_exists: InputMaybe<Scalars['Boolean']>;
  subtitle_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subtitle_not: InputMaybe<Scalars['String']>;
  subtitle_not_contains: InputMaybe<Scalars['String']>;
  subtitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type PostLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};


export type PostLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PostOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  asset: Maybe<Asset>;
  assetCollection: Maybe<AssetCollection>;
  entryCollection: Maybe<EntryCollection>;
  event: Maybe<Event>;
  eventCollection: Maybe<EventCollection>;
  externalResource: Maybe<ExternalResource>;
  externalResourceCollection: Maybe<ExternalResourceCollection>;
  post: Maybe<Post>;
  postCollection: Maybe<PostCollection>;
  resources: Maybe<Resources>;
  resourcesCollection: Maybe<ResourcesCollection>;
  session: Maybe<Session>;
  sessionCollection: Maybe<SessionCollection>;
  speaker: Maybe<Speaker>;
  speakerCollection: Maybe<SpeakerCollection>;
  sponsor: Maybe<Sponsor>;
  sponsorCollection: Maybe<SponsorCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<EntryFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<EventFilter>;
};


export type QueryExternalResourceArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryExternalResourceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ExternalResourceOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ExternalResourceFilter>;
};


export type QueryPostArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryPostCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<PostOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<PostFilter>;
};


export type QueryResourcesArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QueryResourcesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<ResourcesOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<ResourcesFilter>;
};


export type QuerySessionArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QuerySessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<SessionOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SessionFilter>;
};


export type QuerySpeakerArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QuerySpeakerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<SpeakerOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SpeakerFilter>;
};


export type QuerySponsorArgs = {
  id: Scalars['String'];
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


export type QuerySponsorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  order: InputMaybe<Array<InputMaybe<SponsorOrder>>>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where: InputMaybe<SponsorFilter>;
};

/** What resource is for? (ex: Hacktoberfest, Basic javascript, etc.) [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/resources) */
export type Resources = Entry & {
  buttonText: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description: Maybe<Scalars['String']>;
  linkedFrom: Maybe<ResourcesLinkingCollections>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
};


/** What resource is for? (ex: Hacktoberfest, Basic javascript, etc.) [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/resources) */
export type ResourcesButtonTextArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** What resource is for? (ex: Hacktoberfest, Basic javascript, etc.) [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/resources) */
export type ResourcesDescriptionArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** What resource is for? (ex: Hacktoberfest, Basic javascript, etc.) [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/resources) */
export type ResourcesLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** What resource is for? (ex: Hacktoberfest, Basic javascript, etc.) [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/resources) */
export type ResourcesTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** What resource is for? (ex: Hacktoberfest, Basic javascript, etc.) [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/resources) */
export type ResourcesUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type ResourcesCollection = {
  items: Array<Maybe<Resources>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ResourcesFilter = {
  AND: InputMaybe<Array<InputMaybe<ResourcesFilter>>>;
  OR: InputMaybe<Array<InputMaybe<ResourcesFilter>>>;
  buttonText: InputMaybe<Scalars['String']>;
  buttonText_contains: InputMaybe<Scalars['String']>;
  buttonText_exists: InputMaybe<Scalars['Boolean']>;
  buttonText_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  buttonText_not: InputMaybe<Scalars['String']>;
  buttonText_not_contains: InputMaybe<Scalars['String']>;
  buttonText_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  description: InputMaybe<Scalars['String']>;
  description_contains: InputMaybe<Scalars['String']>;
  description_exists: InputMaybe<Scalars['Boolean']>;
  description_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not: InputMaybe<Scalars['String']>;
  description_not_contains: InputMaybe<Scalars['String']>;
  description_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResourcesLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};


export type ResourcesLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ResourcesOrder {
  ButtonTextAsc = 'buttonText_ASC',
  ButtonTextDesc = 'buttonText_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type Session = Entry & {
  contentfulMetadata: ContentfulMetadata;
  deckUrl: Maybe<Scalars['String']>;
  endDatetime: Maybe<Scalars['DateTime']>;
  linkedFrom: Maybe<SessionLinkingCollections>;
  speaker: Maybe<Speaker>;
  startDatetime: Maybe<Scalars['DateTime']>;
  sys: Sys;
  title: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type SessionDeckUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type SessionEndDatetimeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type SessionLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type SessionSpeakerArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type SessionStartDatetimeArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type SessionTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type SessionCollection = {
  items: Array<Maybe<Session>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SessionFilter = {
  AND: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SessionFilter>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  deckUrl: InputMaybe<Scalars['String']>;
  deckUrl_contains: InputMaybe<Scalars['String']>;
  deckUrl_exists: InputMaybe<Scalars['Boolean']>;
  deckUrl_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  deckUrl_not: InputMaybe<Scalars['String']>;
  deckUrl_not_contains: InputMaybe<Scalars['String']>;
  deckUrl_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDatetime: InputMaybe<Scalars['DateTime']>;
  endDatetime_exists: InputMaybe<Scalars['Boolean']>;
  endDatetime_gt: InputMaybe<Scalars['DateTime']>;
  endDatetime_gte: InputMaybe<Scalars['DateTime']>;
  endDatetime_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endDatetime_lt: InputMaybe<Scalars['DateTime']>;
  endDatetime_lte: InputMaybe<Scalars['DateTime']>;
  endDatetime_not: InputMaybe<Scalars['DateTime']>;
  endDatetime_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  speaker: InputMaybe<CfSpeakerNestedFilter>;
  speaker_exists: InputMaybe<Scalars['Boolean']>;
  startDatetime: InputMaybe<Scalars['DateTime']>;
  startDatetime_exists: InputMaybe<Scalars['Boolean']>;
  startDatetime_gt: InputMaybe<Scalars['DateTime']>;
  startDatetime_gte: InputMaybe<Scalars['DateTime']>;
  startDatetime_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startDatetime_lt: InputMaybe<Scalars['DateTime']>;
  startDatetime_lte: InputMaybe<Scalars['DateTime']>;
  startDatetime_not: InputMaybe<Scalars['DateTime']>;
  startDatetime_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys: InputMaybe<SysFilter>;
  title: InputMaybe<Scalars['String']>;
  title_contains: InputMaybe<Scalars['String']>;
  title_exists: InputMaybe<Scalars['Boolean']>;
  title_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not: InputMaybe<Scalars['String']>;
  title_not_contains: InputMaybe<Scalars['String']>;
  title_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SessionLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  eventCollection: Maybe<EventCollection>;
};


export type SessionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SessionLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SessionOrder {
  DeckUrlAsc = 'deckUrl_ASC',
  DeckUrlDesc = 'deckUrl_DESC',
  EndDatetimeAsc = 'endDatetime_ASC',
  EndDatetimeDesc = 'endDatetime_DESC',
  StartDatetimeAsc = 'startDatetime_ASC',
  StartDatetimeDesc = 'startDatetime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type Speaker = Entry & {
  avatar: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  employer: Maybe<Scalars['String']>;
  jobTitle: Maybe<Scalars['String']>;
  linkedFrom: Maybe<SpeakerLinkingCollections>;
  name: Maybe<Scalars['String']>;
  showEmployer: Maybe<Scalars['Boolean']>;
  sys: Sys;
  url: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerAvatarArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerEmployerArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerJobTitleArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerShowEmployerArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type SpeakerCollection = {
  items: Array<Maybe<Speaker>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SpeakerFilter = {
  AND: InputMaybe<Array<InputMaybe<SpeakerFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SpeakerFilter>>>;
  avatar_exists: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  employer: InputMaybe<Scalars['String']>;
  employer_contains: InputMaybe<Scalars['String']>;
  employer_exists: InputMaybe<Scalars['Boolean']>;
  employer_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  employer_not: InputMaybe<Scalars['String']>;
  employer_not_contains: InputMaybe<Scalars['String']>;
  employer_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobTitle: InputMaybe<Scalars['String']>;
  jobTitle_contains: InputMaybe<Scalars['String']>;
  jobTitle_exists: InputMaybe<Scalars['Boolean']>;
  jobTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobTitle_not: InputMaybe<Scalars['String']>;
  jobTitle_not_contains: InputMaybe<Scalars['String']>;
  jobTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showEmployer: InputMaybe<Scalars['Boolean']>;
  showEmployer_exists: InputMaybe<Scalars['Boolean']>;
  showEmployer_not: InputMaybe<Scalars['Boolean']>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SpeakerLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
  sessionCollection: Maybe<SessionCollection>;
};


export type SpeakerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SpeakerLinkingCollectionsSessionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SpeakerOrder {
  EmployerAsc = 'employer_ASC',
  EmployerDesc = 'employer_DESC',
  JobTitleAsc = 'jobTitle_ASC',
  JobTitleDesc = 'jobTitle_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ShowEmployerAsc = 'showEmployer_ASC',
  ShowEmployerDesc = 'showEmployer_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type Sponsor = Entry & {
  activeSponsor: Maybe<Scalars['Boolean']>;
  category: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  exclusive: Maybe<Scalars['Boolean']>;
  linkedFrom: Maybe<SponsorLinkingCollections>;
  logo: Maybe<Asset>;
  name: Maybe<Scalars['String']>;
  sys: Sys;
  url: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorActiveSponsorArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorCategoryArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorExclusiveArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorLinkedFromArgs = {
  allowedLocales: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorLogoArgs = {
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorNameArgs = {
  locale: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorUrlArgs = {
  locale: InputMaybe<Scalars['String']>;
};

export type SponsorCollection = {
  items: Array<Maybe<Sponsor>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SponsorFilter = {
  AND: InputMaybe<Array<InputMaybe<SponsorFilter>>>;
  OR: InputMaybe<Array<InputMaybe<SponsorFilter>>>;
  activeSponsor: InputMaybe<Scalars['Boolean']>;
  activeSponsor_exists: InputMaybe<Scalars['Boolean']>;
  activeSponsor_not: InputMaybe<Scalars['Boolean']>;
  category: InputMaybe<Scalars['String']>;
  category_contains: InputMaybe<Scalars['String']>;
  category_exists: InputMaybe<Scalars['Boolean']>;
  category_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_not: InputMaybe<Scalars['String']>;
  category_not_contains: InputMaybe<Scalars['String']>;
  category_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  exclusive: InputMaybe<Scalars['Boolean']>;
  exclusive_exists: InputMaybe<Scalars['Boolean']>;
  exclusive_not: InputMaybe<Scalars['Boolean']>;
  logo_exists: InputMaybe<Scalars['Boolean']>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SponsorLinkingCollections = {
  entryCollection: Maybe<EntryCollection>;
};


export type SponsorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale: InputMaybe<Scalars['String']>;
  preview: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SponsorOrder {
  ActiveSponsorAsc = 'activeSponsor_ASC',
  ActiveSponsorDesc = 'activeSponsor_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  ExclusiveAsc = 'exclusive_ASC',
  ExclusiveDesc = 'exclusive_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type Sys = {
  environmentId: Scalars['String'];
  firstPublishedAt: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  publishedVersion: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id: InputMaybe<Scalars['String']>;
  id_contains: InputMaybe<Scalars['String']>;
  id_exists: InputMaybe<Scalars['Boolean']>;
  id_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not: InputMaybe<Scalars['String']>;
  id_not_contains: InputMaybe<Scalars['String']>;
  id_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte: InputMaybe<Scalars['DateTime']>;
  publishedAt_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte: InputMaybe<Scalars['DateTime']>;
  publishedAt_not: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion: InputMaybe<Scalars['Float']>;
  publishedVersion_exists: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt: InputMaybe<Scalars['Float']>;
  publishedVersion_gte: InputMaybe<Scalars['Float']>;
  publishedVersion_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt: InputMaybe<Scalars['Float']>;
  publishedVersion_lte: InputMaybe<Scalars['Float']>;
  publishedVersion_not: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfSpeakerNestedFilter = {
  AND: InputMaybe<Array<InputMaybe<CfSpeakerNestedFilter>>>;
  OR: InputMaybe<Array<InputMaybe<CfSpeakerNestedFilter>>>;
  avatar_exists: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata: InputMaybe<ContentfulMetadataFilter>;
  employer: InputMaybe<Scalars['String']>;
  employer_contains: InputMaybe<Scalars['String']>;
  employer_exists: InputMaybe<Scalars['Boolean']>;
  employer_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  employer_not: InputMaybe<Scalars['String']>;
  employer_not_contains: InputMaybe<Scalars['String']>;
  employer_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobTitle: InputMaybe<Scalars['String']>;
  jobTitle_contains: InputMaybe<Scalars['String']>;
  jobTitle_exists: InputMaybe<Scalars['Boolean']>;
  jobTitle_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  jobTitle_not: InputMaybe<Scalars['String']>;
  jobTitle_not_contains: InputMaybe<Scalars['String']>;
  jobTitle_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: InputMaybe<Scalars['String']>;
  name_contains: InputMaybe<Scalars['String']>;
  name_exists: InputMaybe<Scalars['Boolean']>;
  name_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not: InputMaybe<Scalars['String']>;
  name_not_contains: InputMaybe<Scalars['String']>;
  name_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  showEmployer: InputMaybe<Scalars['Boolean']>;
  showEmployer_exists: InputMaybe<Scalars['Boolean']>;
  showEmployer_not: InputMaybe<Scalars['Boolean']>;
  sys: InputMaybe<SysFilter>;
  url: InputMaybe<Scalars['String']>;
  url_contains: InputMaybe<Scalars['String']>;
  url_exists: InputMaybe<Scalars['Boolean']>;
  url_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not: InputMaybe<Scalars['String']>;
  url_not_contains: InputMaybe<Scalars['String']>;
  url_not_in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export const EventMetadataFragmentDoc = /*#__PURE__*/ gql`
    fragment EventMetadata on Event {
  poster {
    url
  }
  title
  slug
  description
  category
  startingDate
  onlineEvent
  location
  url
  quota
  notes
}
    `;
export const RecentEventMetadataFragmentDoc = /*#__PURE__*/ gql`
    fragment RecentEventMetadata on Event {
  ...EventMetadata
  sessionsCollection {
    items {
      sys {
        id
      }
      speaker {
        avatar {
          url
        }
        name
      }
    }
  }
}
    `;
export const SponsorMetadataFragmentDoc = /*#__PURE__*/ gql`
    fragment SponsorMetadata on Sponsor {
  name
  category
  url
  activeSponsor
  logo {
    url
  }
  sys {
    id
  }
}
    `;
export const EventsPageQueryDocument = /*#__PURE__*/ gql`
    query eventsPageQuery($locale: String!) {
  eventCollection(limit: 50, locale: $locale, order: startingDate_DESC) {
    items {
      ...EventMetadata
      sessionsCollection(limit: 50) {
        items {
          sys {
            id
          }
          speaker {
            avatar {
              url
            }
            name
          }
        }
      }
    }
  }
}
    ${EventMetadataFragmentDoc}`;
export const HomePageQueryDocument = /*#__PURE__*/ gql`
    query homePageQuery($locale: String!) {
  eventCollection(limit: 3, locale: $locale, order: startingDate_DESC) {
    items {
      ...RecentEventMetadata
    }
  }
  sponsorCollection(order: name_ASC) {
    items {
      ...SponsorMetadata
    }
  }
}
    ${RecentEventMetadataFragmentDoc}
${EventMetadataFragmentDoc}
${SponsorMetadataFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    eventsPageQuery(variables: EventsPageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<EventsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<EventsPageQuery>(EventsPageQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'eventsPageQuery', 'query');
    },
    homePageQuery(variables: HomePageQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<HomePageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<HomePageQuery>(HomePageQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'homePageQuery', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type EventsPageQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type EventsPageQuery = { eventCollection: { items: Array<{ title: string | null, slug: string | null, description: string | null, category: string | null, startingDate: any | null, onlineEvent: boolean | null, location: string | null, url: string | null, quota: number | null, notes: string | null, sessionsCollection: { items: Array<{ sys: { id: string }, speaker: { name: string | null, avatar: { url: string | null } | null } | null } | null> } | null, poster: { url: string | null } | null } | null> } | null };

export type EventMetadataFragment = { title: string | null, slug: string | null, description: string | null, category: string | null, startingDate: any | null, onlineEvent: boolean | null, location: string | null, url: string | null, quota: number | null, notes: string | null, poster: { url: string | null } | null };

export type RecentEventMetadataFragment = { title: string | null, slug: string | null, description: string | null, category: string | null, startingDate: any | null, onlineEvent: boolean | null, location: string | null, url: string | null, quota: number | null, notes: string | null, sessionsCollection: { items: Array<{ sys: { id: string }, speaker: { name: string | null, avatar: { url: string | null } | null } | null } | null> } | null, poster: { url: string | null } | null };

export type SponsorMetadataFragment = { name: string | null, category: string | null, url: string | null, activeSponsor: boolean | null, logo: { url: string | null } | null, sys: { id: string } };

export type HomePageQueryVariables = Exact<{
  locale: Scalars['String'];
}>;


export type HomePageQuery = { eventCollection: { items: Array<{ title: string | null, slug: string | null, description: string | null, category: string | null, startingDate: any | null, onlineEvent: boolean | null, location: string | null, url: string | null, quota: number | null, notes: string | null, sessionsCollection: { items: Array<{ sys: { id: string }, speaker: { name: string | null, avatar: { url: string | null } | null } | null } | null> } | null, poster: { url: string | null } | null } | null> } | null, sponsorCollection: { items: Array<{ name: string | null, category: string | null, url: string | null, activeSponsor: boolean | null, logo: { url: string | null } | null, sys: { id: string } } | null> } | null };
