import { atom } from 'jotai'

export const coinPriceAtom = atom<{ [x: string]: string }>({})
export const coinIdsAtom = atom<string[]>([])
