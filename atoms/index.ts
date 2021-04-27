import { Token } from '@/types'
import { atom } from 'jotai'

export const coinPriceAtom = atom<{ [x: string]: string }>({})
export const coinIdsAtom = atom<string[]>([])
export const pageAtom = atom<number>(1)
export const tokenDataAtom = atom<Token[]>([])
export const contractAddressesAtom = atom<{ name: string; contractAddress: string }[]>([])
export const networkAtom = atom<{ name: string; symbol: string; chainId: string[] }>({
  name: 'Binance Smart Chain Mainnet',
  symbol: 'bnb',
  chainId: [],
})
