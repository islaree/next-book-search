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
  kind: string // 'books#volume'
  id: string //'X9CZDwAAQBAJ'
  etag: string // '1JI2mzsyKAk'
  selfLink: string // 'https://www.googleapis.com/books/v1/volumes/X9CZDwAAQBAJ'
  volumeInfo: bookVolumeInfo
  saleInfo: any
  accessInfo: any
  searchInfo: any
}
