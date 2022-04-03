namespace FirestoreDocument {
  import { DocumentReference } from 'firebase/firestore'

  export interface Album {
    title: string
    year?: number
    diskNo: number
    diskNoOf: number
    production: DocumentReference
    artists: DocumentReference[]
    composers: DocumentReference[]
    genres: DocumentReference[]
  }

  export interface Song {
    title: string
    duration: number
    trackNo: number
    trackNoOf: number
    artists: DocumentReference[]
    composers: DocumentReference[]
    genres: DocumentReference[]
  }

  export interface Artist {
    name: string
  }

  export interface Composer {
    name: string
  }

  export interface Genre {
    name: string
  }

  export interface Production {
    title: string
  }
}
