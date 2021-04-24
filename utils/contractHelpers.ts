import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import bep20Abi from '@/config/abi/erc20.json'
import web3NoAccount from './web3'

const getContract = (abi: any, address: string, web3?: Web3) => {
  const _web3 = web3 ?? web3NoAccount
  return new _web3.eth.Contract((abi as unknown) as AbiItem, address)
}

export const getBep20Contract = (address: string, web3?: Web3) => {
  return getContract(bep20Abi, address, web3)
}
