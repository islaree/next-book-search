type industryIdentifiersObject = {
  type: string
  identifier: string
}

type readingModesObject = {
  text: boolean
  image: boolean
}

type panelizationSummaryObject = {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

type imageLinksObject = {
  smallThumbnail: string
  thumbnail: string
}

type bookVolumeInfo = {
  title: string
  subtitle: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: industryIdentifiersObject[]
  readingModes: readingModesObject
  pageCount: number
  printType: string
  averageRating: number
  ratingsCount: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: panelizationSummaryObject
  imageLinks: imageLinksObject
  language: string
  previewLink: string
  infoLink: string
  canonicalVolumeLink: string
}

export type bookItems = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: bookVolumeInfo
  saleInfo: any
  accessInfo: any
  searchInfo: any
}
