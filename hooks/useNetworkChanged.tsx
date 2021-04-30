import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { networkAtom } from '@/atoms'
import { networks } from '@/utils'
import { useProfile } from '.'
import { useWeb3React } from '@web3-react/core'

const useNetworkChanged = () => {
  const { chainId } = useProfile()
  const [, setNetwork] = useAtom(networkAtom)

  useEffect(() => {
    const handleNetworkChange = async () => {
      if (typeof chainId === 'number') {
        for (let i = 0; i < networks.length; i++) {
          networks[i].chainIdNumber.map(chnId => {
            if (chnId === chainId.toString()) setNetwork(networks[i])
          })
        }
      }
    }
    handleNetworkChange()
  }, [chainId])
}

export default useNetworkChanged
