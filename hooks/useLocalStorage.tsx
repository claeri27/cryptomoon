import { metamask } from '@/utils'
import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

const useLocalStorage = () => {
  const { activate } = useWeb3React()

  useEffect(() => {
    const publicAddress = localStorage.getItem('network')
    if (publicAddress) activate(metamask)
  }, [activate, metamask])
}

export default useLocalStorage
