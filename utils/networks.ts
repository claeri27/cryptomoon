export const handleNetwork = (symbol: string) => networks.find(ntwk => ntwk.symbol === symbol)

export const networks = [
  {
    name: 'Ethereum',
    chainId: ['1', '3', '4', '5'],
    symbol: 'eth',
    url: 'https://tokens.1inch.exchange/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
  },
  {
    name: 'BSC',
    chainId: ['56'],
    symbol: 'bnb',
    url: 'https://tokens.1inch.exchange/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
  },
  {
    name: 'xDai',
    chainId: ['100'],
    symbol: 'dai',
    url: 'https://tokens.1inch.exchange/0x6b175474e89094c44da98b954eedeac495271d0f.png',
  },
  {
    name: 'Matic',
    chainId: ['137'],
    symbol: 'matic',
    url: 'https://tokens.1inch.exchange/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png',
  },
  // {
  //   name: 'Harmony Mainnet',
  //   chainId: ['63564c40'],
  //   symbol: 'one',
  // },
]
