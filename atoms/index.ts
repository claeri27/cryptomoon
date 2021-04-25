import { atom } from 'jotai'

export const coinPriceAtom = atom<{ [x: string]: string }>({})
export const coinIdsAtom = atom<string[]>([])
export const pageAtom = atom<number>(1)
export const networkAtom = atom<{ name: string; symbol: string }>({
  name: 'Binance Smart Chain Mainnet',
  symbol: 'bnb',
})
