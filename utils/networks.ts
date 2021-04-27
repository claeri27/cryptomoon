// const ethNetwork = {
//   symbol: 'eth',
//   name: 'Ethereum Mainnet',
// }

// const bnbNetwork = {
//   symbol: 'bnb',
//   name: 'Binance Smart Chain Mainnet',
// }

// const daiNetwork = {
//   symbol: 'dai',
//   name: 'xDai Mainnet',
// }

// const maticNetwork = {
//   symbol: 'matic',
//   name: 'Matic Mainnet',
// }

// export const networkList = {
//   '1': ethNetwork,
//   '3': ethNetwork,
//   '4': ethNetwork,
//   '5': ethNetwork,
//   '38': bnbNetwork,
//   '42': ethNetwork,
//   '64': daiNetwork,
//   '89': maticNetwork,
// }

export const networks = [
  {
    name: 'Ethereum Mainnet',
    chainId: ['1', '3', '4', '5'],
    symbol: 'eth',
  },
  {
    name: 'Binance Smart Chain Mainnet',
    chainId: ['56'],
    symbol: 'bnb',
  },
  {
    name: 'xDai Mainnet',
    chainId: ['100'],
    symbol: 'dai',
  },
  {
    name: 'Matic Mainnet',
    chainId: ['137'],
    symbol: 'matic',
  },
  // {
  //   name: 'Harmony Mainnet',
  //   chainId: ['63564c40'],
  //   symbol: 'one',
  // },
]
