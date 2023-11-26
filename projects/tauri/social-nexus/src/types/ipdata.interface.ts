export interface IpdataResponse {
  ip: string
  isEu: boolean
  city: string
  region: string
  regionCode: string
  regionType: string
  countryName: string
  countryCode: string
  continentName: string
  continentCode: string
  latitude: number
  longitude: number
  postal: string
  callingCode: string
  flag: string
  emojiFlag: string
  emojiUnicode: string
  asn: Asn
  languages: Language[]
  currency: Currency
  timeZone: TimeZone
  threat: Threat
  count: string
}

export interface Asn {
  asn: string
  name: string
  domain: null
  route: string
  type: string
}

export interface Currency {
  name: string
  code: string
  symbol: string
  native: string
  plural: string
}

export interface Language {
  name: string
  native: string
  code: string
}

export interface Threat {
  isTor: boolean
  isIcloudRelay: boolean
  isProxy: boolean
  isDatacenter: boolean
  isAnonymous: boolean
  isKnownAttacker: boolean
  isKnownAbuser: boolean
  isThreat: boolean
  isBogon: boolean
  blocklists: unknown[]
}

export interface TimeZone {
  name: string
  abbr: string
  offset: string
  isDst: boolean
  currentTime: Date
}
