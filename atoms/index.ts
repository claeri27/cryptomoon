import { Token } from '@/types'
import { atom } from 'jotai'

interface NetworkAtom {
  name: string
  symbol: string
  url: string
  chainId: string[]
}

interface ContractAddressesAtom {
  name: string
  contractAddress: string
}

export const unchangedNetworkFormData = {
  name: 'BSC',
  symbol: 'bnb',
  type: 'mainnet',
  changed: false,
}

export const coinPriceAtom = atom<{ [x: string]: string }>({})
export const coinIdsAtom = atom<string[]>([])
export const pageAtom = atom<number>(1)
export const tokenDataAtom = atom<Token[]>([])
export const contractAddressesAtom = atom<ContractAddressesAtom[]>([])
export const networkFormDataAtom = atom(unchangedNetworkFormData)
export const networkAtom = atom<NetworkAtom>({
  name: '',
  symbol: '',
  url: '',
  chainId: [],
})
