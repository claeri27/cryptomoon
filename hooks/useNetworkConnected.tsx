import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useProfile } from '.'
import { networkAtom } from '@/atoms'
import { handleNetwork, networks, nodes } from '@/utils'

const useNetworkConnected = () => {
  const { active, library } = useProfile()
  const [, setNetwork] = useAtom(networkAtom)
  const { chainId } = handleNetwork('bnb')

  useEffect(() => {
    const setupNetwork = async () => {
      try {
        await library.provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: chainId[0],
              chainName: 'Binance Smart Chain Mainnet',
              nativeCurrency: {
                name: 'BNB',
                symbol: 'bnb',
                decimals: 18,
              },
              rpcUrls: nodes,
              blockExplorerUrls: ['https://bscscan.com/'],
            },
          ],
        })
        return true
      } catch (e) {
        console.error(e)
        return false
      }
    }
    setupNetwork()
  }, [library, chainId, nodes])
}

export default useNetworkConnected
