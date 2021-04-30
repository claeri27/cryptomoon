import { networks, nodes } from '.'

interface WindowChain {
  ethereum?: {
    isMetaMask?: true
    request?: (...args: any[]) => void
  }
}

export const handleNetwork = (symbol: string) => networks.find(ntwk => ntwk.symbol === symbol)

export const setupBnBNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x38',
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
    console.error('BNB ERROR:', e)
    return false
  }
}

export const setupEthNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x1',
          chainName: 'Ethereum Mainnet',
          nativeCurrency: {
            name: 'ETH',
            symbol: 'eth',
            decimals: 18,
          },
          rpcUrls: ['https://mainnet.infura.io/v3/undefined'],
          blockExplorerUrls: ['https://etherscan.io'],
        },
      ],
    })
    return true
  } catch (e) {
    console.error('ETH ERROR: ', e)
    return false
  }
}

export const setupMaticNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x89',
          chainName: 'Matic Mainnet',
          nativeCurrency: {
            name: 'MATIC',
            symbol: 'matic',
            decimals: 18,
          },
          rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
          blockExplorerUrls: ['https://explorer.matic.network'],
        },
      ],
    })
    return true
  } catch (e) {
    console.error('MATIC ERROR: ', e)
    return false
  }
}

export const setupDaiNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x64',
          chainName: 'xDai Chain',
          nativeCurrency: {
            name: 'XDAI',
            symbol: 'xdai',
            decimals: 18,
          },
          rpcUrls: ['https://dai.poa.network'],
          blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
        },
      ],
    })
    return true
  } catch (e) {
    console.error('DAI ERROR: ', e)
    return false
  }
}

export const setupHarmonyNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x63564c40',
          chainName: 'Harmony Mainnet',
          nativeCurrency: {
            name: 'ONE',
            symbol: 'one',
            decimals: 18,
          },
          rpcUrls: ['https://api.harmony.one'],
          blockExplorerUrls: ['https://explorer.harmony.one/#/'],
        },
      ],
    })
    return true
  } catch (e) {
    console.error('HARMONY ERROR: ', e)
    return false
  }
}

export const setupAvalancheNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0xa86a',
          chainName: 'Avalanche Mainnet',
          nativeCurrency: {
            name: 'AVAX',
            symbol: 'avax',
            decimals: 18,
          },
          rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
          blockExplorerUrls: ['https://cchain.explorer.avax.network/'],
        },
      ],
    })
    return true
  } catch (e) {
    console.error('AVALANCHE ERROR: ', e)
    return false
  }
}

export const setupHuobiNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x80',
          chainName: 'Huobi Mainnet',
          nativeCurrency: {
            name: 'HT',
            symbol: 'ht',
            decimals: 18,
          },
          rpcUrls: ['https://http-mainnet.hecochain.com'],
          blockExplorerUrls: ['https://hecoinfo.com'],
        },
      ],
    })
    return true
  } catch (e) {
    console.error('HUOBI ERROR: ', e)
    return false
  }
}

export const setupFantomNetwork = async () => {
  try {
    const provider = (window as WindowChain).ethereum
    await provider.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0xfa',
          chainName: 'Fantom Mainnet',
          nativeCurrency: {
            name: 'FTM',
            symbol: 'ftm',
            decimals: 18,
          },
          rpcUrls: ['https://rpcapi.fantom.network'],
          blockExplorerUrls: ['https://ftmscan.com'],
        },
      ],
    })
    return true
  } catch (e) {
    console.error('FANTOM ERROR: ', e)
    return false
  }
}
