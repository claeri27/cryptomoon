import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useProfile } from '.'
import { networkAtom } from '@/atoms'
import { networks } from '@/utils'

const useNetworkConnected = () => {
  const { active, library } = useProfile()
  const [, setNetwork] = useAtom(networkAtom)

  useEffect(() => {
    if (active) {
      library.provider.on('connect', (chainId: string) => {
        const chainIdNumber = chainId.substr(2, chainId.length)
        for (let i = 0; i < networks.length; i++) {
          networks[i].chainId.map(chnId => {
            if (chnId == chainIdNumber) setNetwork(networks[i])
          })
        }
        // Object.keys(networkList).map(key => {
        //   if (chainIdNumber === key) setNetwork(networkList[key])
        // })
      })
    }
  }, [library, active])
}

export default useNetworkConnected
