import { getBep20Contract } from '@/utils/contractHelpers'
import { useMemo } from 'react'
import useWeb3 from './useWeb3'

const useERC20Contract = (address: string) => {
  const web3 = useWeb3()
  return useMemo(() => getBep20Contract(address, web3), [address, web3])
}

export default useERC20Contract
