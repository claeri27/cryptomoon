import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { networkAtom } from '@/atoms'
import { networks } from '@/utils'
import { useProfile } from '.'

const useNetworkChanged = () => {
  const { chainId } = useProfile()
  const [, setNetwork] = useAtom(networkAtom)

  useEffect(() => {
    if (typeof chainId === 'number') {
      for (let i = 0; i < networks.length; i++) {
        networks[i].chainId.map(chnId => {
          if (chnId === chainId.toString()) setNetwork(networks[i])
        })
      }
    }
  }, [chainId])
}

export default useNetworkChanged
