import { atom } from 'jotai'
import type { Data } from './types'

export const coinPriceAtom = atom<{ [x: string]: string }>({})
export const coinDataAtom = atom<Data[]>([])
export const coinIdsAtom = atom<string[]>([])
