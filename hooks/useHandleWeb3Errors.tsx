import { useWeb3React } from '@web3-react/core'
import { useEffect } from 'react'

const useHandleWeb3Errors = () => {
  const { error } = useWeb3React()

  useEffect(() => {
    if (error) console.log('WEB3 ERROR: ', error)
  }, [error])
}

export default useHandleWeb3Errors
