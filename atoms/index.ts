import { atom } from 'jotai'

interface Data {
  id: string
  rank: string
  symbol: string
  name: string
  supply: string
  maxSupply: string
  marketCapUsd: string
  volumeUsd24Hr: string
  priceUsd: string
  changePercent24Hr: string
  vwap24Hr: string
}

export const coinPriceAtom = atom<{ [x: string]: string }>({})
export const coinDataAtom = atom<Data[]>([])
export const apiAtom = atom(process.env.ASSETS_API)
