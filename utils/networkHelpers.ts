import { networks, nodes } from '.'

interface WindowChain {
  ethereum?: {
    isMetaMask?: true
    request?: (...args: any[]) => void
  }
}

export const handleNetwork = (symbol: string) => networks.find(ntwk => ntwk.symbol === symbol)

export const setupNetwork = async (symbol: string) => {
  const { chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls } = handleNetwork(symbol)
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [{ chainId, chainName, nativeCurrency, rpcUrls, blockExplorerUrls }],
    })
    return true
  } catch (e) {
    console.error('NETWORK SETUP ERROR:', e)
    return false
  }
}
