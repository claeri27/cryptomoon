import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useProfile } from '.'
import { networkAtom } from '@/atoms'
import { networkList } from '@/utils'

const useNetworkChanged = () => {
  const { active, library } = useProfile()
  const [, setNetwork] = useAtom(networkAtom)

  useEffect(() => {
    if (active) {
      library.provider.on('chainChanged', chainId => {
        const chainIdNumber = chainId.substr(2, chainId.length)
        Object.keys(networkList).map(key => {
          if (chainIdNumber === key) setNetwork(networkList[key])
        })
      })
    }
  }, [library, active])
}

export default useNetworkChanged
