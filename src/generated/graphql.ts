export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: any;
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: any;
};

export type Query = {
  __typename?: "Query";
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  sponsor?: Maybe<Sponsor>;
  sponsorCollection?: Maybe<SponsorCollection>;
  event?: Maybe<Event>;
  eventCollection?: Maybe<EventCollection>;
  session?: Maybe<Session>;
  sessionCollection?: Maybe<SessionCollection>;
  speaker?: Maybe<Speaker>;
  speakerCollection?: Maybe<SpeakerCollection>;
};

export type QueryAssetArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QueryAssetCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<AssetFilter>;
  order?: Maybe<Array<Maybe<AssetOrder>>>;
};

export type QuerySponsorArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QuerySponsorCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<SponsorFilter>;
  order?: Maybe<Array<Maybe<SponsorOrder>>>;
};

export type QueryEventArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QueryEventCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<EventFilter>;
  order?: Maybe<Array<Maybe<EventOrder>>>;
};

export type QuerySessionArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QuerySessionCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<SessionFilter>;
  order?: Maybe<Array<Maybe<SessionOrder>>>;
};

export type QuerySpeakerArgs = {
  id: Scalars["String"];
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type QuerySpeakerCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
  where?: Maybe<SpeakerFilter>;
  order?: Maybe<Array<Maybe<SpeakerOrder>>>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: "Asset";
  sys: Sys;
  title?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  contentType?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  size?: Maybe<Scalars["Int"]>;
  url?: Maybe<Scalars["String"]>;
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  transform?: Maybe<ImageTransformOptions>;
};

export type Sys = {
  __typename?: "Sys";
  id: Scalars["String"];
  spaceId: Scalars["String"];
  environmentId: Scalars["String"];
  publishedAt?: Maybe<Scalars["DateTime"]>;
  firstPublishedAt?: Maybe<Scalars["DateTime"]>;
  publishedVersion?: Maybe<Scalars["Int"]>;
};

export type ImageTransformOptions = {
  /** Desired width in pixels. Defaults to the original image width. */
  width?: Maybe<Scalars["Dimension"]>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: Maybe<Scalars["Dimension"]>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: Maybe<Scalars["Quality"]>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: Maybe<Scalars["Int"]>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: Maybe<ImageResizeStrategy>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: Maybe<ImageResizeFocus>;
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: Maybe<Scalars["HexColor"]>;
  /** Desired image format. Defaults to the original image format. */
  format?: Maybe<ImageFormat>;
};

export enum ImageResizeStrategy {
  /** Resizes the image to fit into the specified dimensions. */
  Fit = "FIT",
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = "PAD",
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = "FILL",
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = "SCALE",
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = "CROP",
  /** Creates a thumbnail from the image. */
  Thumb = "THUMB",
}

export enum ImageResizeFocus {
  /** Focus the resizing on the center. */
  Center = "CENTER",
  /** Focus the resizing on the top. */
  Top = "TOP",
  /** Focus the resizing on the top right. */
  TopRight = "TOP_RIGHT",
  /** Focus the resizing on the right. */
  Right = "RIGHT",
  /** Focus the resizing on the bottom right. */
  BottomRight = "BOTTOM_RIGHT",
  /** Focus the resizing on the bottom. */
  Bottom = "BOTTOM",
  /** Focus the resizing on the bottom left. */
  BottomLeft = "BOTTOM_LEFT",
  /** Focus the resizing on the left. */
  Left = "LEFT",
  /** Focus the resizing on the top left. */
  TopLeft = "TOP_LEFT",
  /** Focus the resizing on the largest face. */
  Face = "FACE",
  /** Focus the resizing on the area containing all the faces. */
  Faces = "FACES",
}

export enum ImageFormat {
  /** JPG image format. */
  Jpg = "JPG",
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = "JPG_PROGRESSIVE",
  /** PNG image format */
  Png = "PNG",
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = "PNG8",
  /** WebP image format. */
  Webp = "WEBP",
}

export type AssetLinkingCollections = {
  __typename?: "AssetLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  sponsorCollection?: Maybe<SponsorCollection>;
  eventCollection?: Maybe<EventCollection>;
  speakerCollection?: Maybe<SpeakerCollection>;
};

export type AssetLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type AssetLinkingCollectionsSponsorCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type AssetLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type AssetLinkingCollectionsSpeakerCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type EntryCollection = {
  __typename?: "EntryCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Entry>>;
};

export type Entry = {
  sys: Sys;
};

export type SponsorCollection = {
  __typename?: "SponsorCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Sponsor>>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type Sponsor = Entry & {
  __typename?: "Sponsor";
  sys: Sys;
  linkedFrom?: Maybe<SponsorLinkingCollections>;
  name?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  url?: Maybe<Scalars["String"]>;
  logo?: Maybe<Asset>;
  activeSponsor?: Maybe<Scalars["Boolean"]>;
  exclusive?: Maybe<Scalars["Boolean"]>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/sponsor) */
export type SponsorLogoArgs = {
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SponsorLinkingCollections = {
  __typename?: "SponsorLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type SponsorLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type EventCollection = {
  __typename?: "EventCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Event>>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type Event = Entry & {
  __typename?: "Event";
  sys: Sys;
  linkedFrom?: Maybe<EventLinkingCollections>;
  poster?: Maybe<Asset>;
  title?: Maybe<Scalars["String"]>;
  slug?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  category?: Maybe<Scalars["String"]>;
  startingDate?: Maybe<Scalars["DateTime"]>;
  sessionsCollection?: Maybe<EventSessionsCollection>;
  onlineEvent?: Maybe<Scalars["Boolean"]>;
  location?: Maybe<Scalars["String"]>;
  coordinates?: Maybe<Location>;
  url?: Maybe<Scalars["String"]>;
  albumUrl?: Maybe<Scalars["String"]>;
  quota?: Maybe<Scalars["Int"]>;
  notes?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventPosterArgs = {
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/event) */
export type EventSessionsCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type EventLinkingCollections = {
  __typename?: "EventLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
};

export type EventLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type EventSessionsCollection = {
  __typename?: "EventSessionsCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Session>>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type Session = Entry & {
  __typename?: "Session";
  sys: Sys;
  linkedFrom?: Maybe<SessionLinkingCollections>;
  title?: Maybe<Scalars["String"]>;
  speaker?: Maybe<Speaker>;
  startDatetime?: Maybe<Scalars["DateTime"]>;
  endDatetime?: Maybe<Scalars["DateTime"]>;
  deckUrl?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/session) */
export type SessionSpeakerArgs = {
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SessionLinkingCollections = {
  __typename?: "SessionLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  eventCollection?: Maybe<EventCollection>;
};

export type SessionLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SessionLinkingCollectionsEventCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type Speaker = Entry & {
  __typename?: "Speaker";
  sys: Sys;
  linkedFrom?: Maybe<SpeakerLinkingCollections>;
  avatar?: Maybe<Asset>;
  name?: Maybe<Scalars["String"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  employer?: Maybe<Scalars["String"]>;
  showEmployer?: Maybe<Scalars["Boolean"]>;
  url?: Maybe<Scalars["String"]>;
};

/** [See type definition](https://app.contentful.com/spaces/z273njukdgu1/content_types/speaker) */
export type SpeakerAvatarArgs = {
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SpeakerLinkingCollections = {
  __typename?: "SpeakerLinkingCollections";
  entryCollection?: Maybe<EntryCollection>;
  sessionCollection?: Maybe<SessionCollection>;
};

export type SpeakerLinkingCollectionsEntryCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SpeakerLinkingCollectionsSessionCollectionArgs = {
  skip?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  preview?: Maybe<Scalars["Boolean"]>;
  locale?: Maybe<Scalars["String"]>;
};

export type SessionCollection = {
  __typename?: "SessionCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Session>>;
};

export type Location = {
  __typename?: "Location";
  lat?: Maybe<Scalars["Float"]>;
  lon?: Maybe<Scalars["Float"]>;
};

export type SpeakerCollection = {
  __typename?: "SpeakerCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Speaker>>;
};

export type AssetFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  description_exists?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  url_exists?: Maybe<Scalars["Boolean"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  size_exists?: Maybe<Scalars["Boolean"]>;
  size?: Maybe<Scalars["Int"]>;
  size_not?: Maybe<Scalars["Int"]>;
  size_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  size_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  size_gt?: Maybe<Scalars["Int"]>;
  size_gte?: Maybe<Scalars["Int"]>;
  size_lt?: Maybe<Scalars["Int"]>;
  size_lte?: Maybe<Scalars["Int"]>;
  contentType_exists?: Maybe<Scalars["Boolean"]>;
  contentType?: Maybe<Scalars["String"]>;
  contentType_not?: Maybe<Scalars["String"]>;
  contentType_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  contentType_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  contentType_contains?: Maybe<Scalars["String"]>;
  contentType_not_contains?: Maybe<Scalars["String"]>;
  fileName_exists?: Maybe<Scalars["Boolean"]>;
  fileName?: Maybe<Scalars["String"]>;
  fileName_not?: Maybe<Scalars["String"]>;
  fileName_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  fileName_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  fileName_contains?: Maybe<Scalars["String"]>;
  fileName_not_contains?: Maybe<Scalars["String"]>;
  width_exists?: Maybe<Scalars["Boolean"]>;
  width?: Maybe<Scalars["Int"]>;
  width_not?: Maybe<Scalars["Int"]>;
  width_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  width_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  width_gt?: Maybe<Scalars["Int"]>;
  width_gte?: Maybe<Scalars["Int"]>;
  width_lt?: Maybe<Scalars["Int"]>;
  width_lte?: Maybe<Scalars["Int"]>;
  height_exists?: Maybe<Scalars["Boolean"]>;
  height?: Maybe<Scalars["Int"]>;
  height_not?: Maybe<Scalars["Int"]>;
  height_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  height_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  height_gt?: Maybe<Scalars["Int"]>;
  height_gte?: Maybe<Scalars["Int"]>;
  height_lt?: Maybe<Scalars["Int"]>;
  height_lte?: Maybe<Scalars["Int"]>;
  OR?: Maybe<Array<Maybe<AssetFilter>>>;
  AND?: Maybe<Array<Maybe<AssetFilter>>>;
};

export type SysFilter = {
  id_exists?: Maybe<Scalars["Boolean"]>;
  id?: Maybe<Scalars["String"]>;
  id_not?: Maybe<Scalars["String"]>;
  id_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  id_contains?: Maybe<Scalars["String"]>;
  id_not_contains?: Maybe<Scalars["String"]>;
  publishedAt_exists?: Maybe<Scalars["Boolean"]>;
  publishedAt?: Maybe<Scalars["String"]>;
  publishedAt_not?: Maybe<Scalars["String"]>;
  publishedAt_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedAt_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedAt_contains?: Maybe<Scalars["String"]>;
  publishedAt_not_contains?: Maybe<Scalars["String"]>;
  firstPublishedAt_exists?: Maybe<Scalars["Boolean"]>;
  firstPublishedAt?: Maybe<Scalars["String"]>;
  firstPublishedAt_not?: Maybe<Scalars["String"]>;
  firstPublishedAt_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  firstPublishedAt_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  firstPublishedAt_contains?: Maybe<Scalars["String"]>;
  firstPublishedAt_not_contains?: Maybe<Scalars["String"]>;
  publishedVersion_exists?: Maybe<Scalars["Boolean"]>;
  publishedVersion?: Maybe<Scalars["String"]>;
  publishedVersion_not?: Maybe<Scalars["String"]>;
  publishedVersion_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedVersion_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  publishedVersion_contains?: Maybe<Scalars["String"]>;
  publishedVersion_not_contains?: Maybe<Scalars["String"]>;
};

export enum AssetOrder {
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  ContentTypeAsc = "contentType_ASC",
  ContentTypeDesc = "contentType_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type AssetCollection = {
  __typename?: "AssetCollection";
  total: Scalars["Int"];
  skip: Scalars["Int"];
  limit: Scalars["Int"];
  items: Array<Maybe<Asset>>;
};

export type SponsorFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  category_exists?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Scalars["String"]>;
  category_not?: Maybe<Scalars["String"]>;
  category_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  category_contains?: Maybe<Scalars["String"]>;
  category_not_contains?: Maybe<Scalars["String"]>;
  url_exists?: Maybe<Scalars["Boolean"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  activeSponsor_exists?: Maybe<Scalars["Boolean"]>;
  activeSponsor?: Maybe<Scalars["Boolean"]>;
  activeSponsor_not?: Maybe<Scalars["Boolean"]>;
  exclusive_exists?: Maybe<Scalars["Boolean"]>;
  exclusive?: Maybe<Scalars["Boolean"]>;
  exclusive_not?: Maybe<Scalars["Boolean"]>;
  OR?: Maybe<Array<Maybe<SponsorFilter>>>;
  AND?: Maybe<Array<Maybe<SponsorFilter>>>;
};

export enum SponsorOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  CategoryAsc = "category_ASC",
  CategoryDesc = "category_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  ActiveSponsorAsc = "activeSponsor_ASC",
  ActiveSponsorDesc = "activeSponsor_DESC",
  ExclusiveAsc = "exclusive_ASC",
  ExclusiveDesc = "exclusive_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type EventFilter = {
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  slug_exists?: Maybe<Scalars["Boolean"]>;
  slug?: Maybe<Scalars["String"]>;
  slug_not?: Maybe<Scalars["String"]>;
  slug_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  slug_contains?: Maybe<Scalars["String"]>;
  slug_not_contains?: Maybe<Scalars["String"]>;
  description_exists?: Maybe<Scalars["Boolean"]>;
  description?: Maybe<Scalars["String"]>;
  description_not?: Maybe<Scalars["String"]>;
  description_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  description_contains?: Maybe<Scalars["String"]>;
  description_not_contains?: Maybe<Scalars["String"]>;
  category_exists?: Maybe<Scalars["Boolean"]>;
  category?: Maybe<Scalars["String"]>;
  category_not?: Maybe<Scalars["String"]>;
  category_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  category_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  category_contains?: Maybe<Scalars["String"]>;
  category_not_contains?: Maybe<Scalars["String"]>;
  startingDate_exists?: Maybe<Scalars["Boolean"]>;
  startingDate?: Maybe<Scalars["DateTime"]>;
  startingDate_not?: Maybe<Scalars["DateTime"]>;
  startingDate_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startingDate_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startingDate_gt?: Maybe<Scalars["DateTime"]>;
  startingDate_gte?: Maybe<Scalars["DateTime"]>;
  startingDate_lt?: Maybe<Scalars["DateTime"]>;
  startingDate_lte?: Maybe<Scalars["DateTime"]>;
  onlineEvent_exists?: Maybe<Scalars["Boolean"]>;
  onlineEvent?: Maybe<Scalars["Boolean"]>;
  onlineEvent_not?: Maybe<Scalars["Boolean"]>;
  location_exists?: Maybe<Scalars["Boolean"]>;
  location?: Maybe<Scalars["String"]>;
  location_not?: Maybe<Scalars["String"]>;
  location_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  location_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  location_contains?: Maybe<Scalars["String"]>;
  location_not_contains?: Maybe<Scalars["String"]>;
  coordinates_exists?: Maybe<Scalars["Boolean"]>;
  coordinates_within_circle?: Maybe<Scalars["Circle"]>;
  coordinates_within_rectangle?: Maybe<Scalars["Rectangle"]>;
  url_exists?: Maybe<Scalars["Boolean"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  albumUrl_exists?: Maybe<Scalars["Boolean"]>;
  albumUrl?: Maybe<Scalars["String"]>;
  albumUrl_not?: Maybe<Scalars["String"]>;
  albumUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  albumUrl_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  albumUrl_contains?: Maybe<Scalars["String"]>;
  albumUrl_not_contains?: Maybe<Scalars["String"]>;
  quota_exists?: Maybe<Scalars["Boolean"]>;
  quota?: Maybe<Scalars["Int"]>;
  quota_not?: Maybe<Scalars["Int"]>;
  quota_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  quota_not_in?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  quota_gt?: Maybe<Scalars["Int"]>;
  quota_gte?: Maybe<Scalars["Int"]>;
  quota_lt?: Maybe<Scalars["Int"]>;
  quota_lte?: Maybe<Scalars["Int"]>;
  notes_exists?: Maybe<Scalars["Boolean"]>;
  notes?: Maybe<Scalars["String"]>;
  notes_not?: Maybe<Scalars["String"]>;
  notes_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notes_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  notes_contains?: Maybe<Scalars["String"]>;
  notes_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<EventFilter>>>;
  AND?: Maybe<Array<Maybe<EventFilter>>>;
};

export enum EventOrder {
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  CategoryAsc = "category_ASC",
  CategoryDesc = "category_DESC",
  StartingDateAsc = "startingDate_ASC",
  StartingDateDesc = "startingDate_DESC",
  OnlineEventAsc = "onlineEvent_ASC",
  OnlineEventDesc = "onlineEvent_DESC",
  LocationAsc = "location_ASC",
  LocationDesc = "location_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  AlbumUrlAsc = "albumUrl_ASC",
  AlbumUrlDesc = "albumUrl_DESC",
  QuotaAsc = "quota_ASC",
  QuotaDesc = "quota_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type SessionFilter = {
  speaker?: Maybe<CfSpeakerNestedFilter>;
  sys?: Maybe<SysFilter>;
  title_exists?: Maybe<Scalars["Boolean"]>;
  title?: Maybe<Scalars["String"]>;
  title_not?: Maybe<Scalars["String"]>;
  title_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  title_contains?: Maybe<Scalars["String"]>;
  title_not_contains?: Maybe<Scalars["String"]>;
  startDatetime_exists?: Maybe<Scalars["Boolean"]>;
  startDatetime?: Maybe<Scalars["DateTime"]>;
  startDatetime_not?: Maybe<Scalars["DateTime"]>;
  startDatetime_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDatetime_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  startDatetime_gt?: Maybe<Scalars["DateTime"]>;
  startDatetime_gte?: Maybe<Scalars["DateTime"]>;
  startDatetime_lt?: Maybe<Scalars["DateTime"]>;
  startDatetime_lte?: Maybe<Scalars["DateTime"]>;
  endDatetime_exists?: Maybe<Scalars["Boolean"]>;
  endDatetime?: Maybe<Scalars["DateTime"]>;
  endDatetime_not?: Maybe<Scalars["DateTime"]>;
  endDatetime_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  endDatetime_not_in?: Maybe<Array<Maybe<Scalars["DateTime"]>>>;
  endDatetime_gt?: Maybe<Scalars["DateTime"]>;
  endDatetime_gte?: Maybe<Scalars["DateTime"]>;
  endDatetime_lt?: Maybe<Scalars["DateTime"]>;
  endDatetime_lte?: Maybe<Scalars["DateTime"]>;
  deckUrl_exists?: Maybe<Scalars["Boolean"]>;
  deckUrl?: Maybe<Scalars["String"]>;
  deckUrl_not?: Maybe<Scalars["String"]>;
  deckUrl_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  deckUrl_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  deckUrl_contains?: Maybe<Scalars["String"]>;
  deckUrl_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<SessionFilter>>>;
  AND?: Maybe<Array<Maybe<SessionFilter>>>;
};

export type CfSpeakerNestedFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  jobTitle_exists?: Maybe<Scalars["Boolean"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  jobTitle_not?: Maybe<Scalars["String"]>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  jobTitle_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  jobTitle_contains?: Maybe<Scalars["String"]>;
  jobTitle_not_contains?: Maybe<Scalars["String"]>;
  employer_exists?: Maybe<Scalars["Boolean"]>;
  employer?: Maybe<Scalars["String"]>;
  employer_not?: Maybe<Scalars["String"]>;
  employer_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  employer_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  employer_contains?: Maybe<Scalars["String"]>;
  employer_not_contains?: Maybe<Scalars["String"]>;
  showEmployer_exists?: Maybe<Scalars["Boolean"]>;
  showEmployer?: Maybe<Scalars["Boolean"]>;
  showEmployer_not?: Maybe<Scalars["Boolean"]>;
  url_exists?: Maybe<Scalars["Boolean"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<CfSpeakerNestedFilter>>>;
  AND?: Maybe<Array<Maybe<CfSpeakerNestedFilter>>>;
};

export enum SessionOrder {
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  StartDatetimeAsc = "startDatetime_ASC",
  StartDatetimeDesc = "startDatetime_DESC",
  EndDatetimeAsc = "endDatetime_ASC",
  EndDatetimeDesc = "endDatetime_DESC",
  DeckUrlAsc = "deckUrl_ASC",
  DeckUrlDesc = "deckUrl_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type SpeakerFilter = {
  sys?: Maybe<SysFilter>;
  name_exists?: Maybe<Scalars["Boolean"]>;
  name?: Maybe<Scalars["String"]>;
  name_not?: Maybe<Scalars["String"]>;
  name_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  name_contains?: Maybe<Scalars["String"]>;
  name_not_contains?: Maybe<Scalars["String"]>;
  jobTitle_exists?: Maybe<Scalars["Boolean"]>;
  jobTitle?: Maybe<Scalars["String"]>;
  jobTitle_not?: Maybe<Scalars["String"]>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  jobTitle_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  jobTitle_contains?: Maybe<Scalars["String"]>;
  jobTitle_not_contains?: Maybe<Scalars["String"]>;
  employer_exists?: Maybe<Scalars["Boolean"]>;
  employer?: Maybe<Scalars["String"]>;
  employer_not?: Maybe<Scalars["String"]>;
  employer_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  employer_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  employer_contains?: Maybe<Scalars["String"]>;
  employer_not_contains?: Maybe<Scalars["String"]>;
  showEmployer_exists?: Maybe<Scalars["Boolean"]>;
  showEmployer?: Maybe<Scalars["Boolean"]>;
  showEmployer_not?: Maybe<Scalars["Boolean"]>;
  url_exists?: Maybe<Scalars["Boolean"]>;
  url?: Maybe<Scalars["String"]>;
  url_not?: Maybe<Scalars["String"]>;
  url_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_not_in?: Maybe<Array<Maybe<Scalars["String"]>>>;
  url_contains?: Maybe<Scalars["String"]>;
  url_not_contains?: Maybe<Scalars["String"]>;
  OR?: Maybe<Array<Maybe<SpeakerFilter>>>;
  AND?: Maybe<Array<Maybe<SpeakerFilter>>>;
};

export enum SpeakerOrder {
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  JobTitleAsc = "jobTitle_ASC",
  JobTitleDesc = "jobTitle_DESC",
  EmployerAsc = "employer_ASC",
  EmployerDesc = "employer_DESC",
  ShowEmployerAsc = "showEmployer_ASC",
  ShowEmployerDesc = "showEmployer_DESC",
  UrlAsc = "url_ASC",
  UrlDesc = "url_DESC",
  SysIdAsc = "sys_id_ASC",
  SysIdDesc = "sys_id_DESC",
  SysPublishedAtAsc = "sys_publishedAt_ASC",
  SysPublishedAtDesc = "sys_publishedAt_DESC",
  SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
  SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
  SysPublishedVersionAsc = "sys_publishedVersion_ASC",
  SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}
