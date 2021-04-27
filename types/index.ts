export interface Coin {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  fully_diluted_valuation: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  price_change_percentage_1h_in_currency: number
  price_change_percentage_7d_in_currency: number
  price_change_percentage_30d_in_currency: number
  price_change_percentage_1y_in_currency: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number
  max_supply: number
  ath: number
  ath_change_percentage: number
  ath_date: string
  atl: number
  atl_change_percentage: number
  atl_date: string
  roi: null
  last_updated: string
  sparkline_in_7d: {
    price: number[]
  }
}

export interface Token {
  contract_address: string
  contract_decimals: number
  mintable: boolean
  name: string
  original_symbol: string
  owner: string
  symbol: string
  total_supply: string
}

export interface GetApproveCallData {
  chainId: string
  tokenAddress: string
  amount?: string
}

export interface GetApproveCallDataResponse {
  to: string[]
  value: string
  gasPrice: string
  data: string
}

export interface GetQuoteData {
  chainId: string
  fromTokenAddress: string
  toTokenAddress: string
  amount: number
  fee?: number
  protocols?: string
  gasPrice?: string
  complexityLevel?: string
  connectorTokens?: string
  gasLimit?: number
  parts?: number
  mainRouteParts?: number
}

interface Protocol {
  name: string
  part: number
  fromTokenAddress: string
  toTokenAddress: string
}

export interface GetQuoteDataResponse {
  fromToken: {
    symbol: string
    name: string
    address: string
    decimals: number
    logoURI: string
  }
  toToken: {
    symbol: string
    name: string
    address: string
    decimals: number
    logoURI: string
  }
  toTokenAmount: string // result amount of toToken in minimal divisible units
  fromTokenAmount: string // input amount of fromToken in minimal divisible units
  protocols: Protocol[]
  estimatedGas: number
}

export interface GetSwapData {
  chainId: string
  fromTokenAddress: string
  toTokenAddress: string
  amount: number
  fromAddress: string
  slippage: number
  protocols: string
  destReceiver: string
  referrerAddress: string
  fee: number
  gasPrice: string
  burnChi: boolean
  complexityLevel: string
  connectorTokens: string
  allowPartialFill: boolean
  disableEstimate: boolean
  gasLimit: number
  parts: number
  mainRouteParts: number
}

interface TokenData {
  symbol: string
  name: string
  decimals: number
  address: string
  logoURI: string
}

export interface GetSwapDataResponse {
  fromToken: TokenData
  toToken: TokenData
  toTokenAmount: string
  fromTokenAmount: string
  protocols: Protocol[]
  tx: {
    from: string
    to: string // our contract address
    data: string
    value: string // 100 eth
    gasPrice: string // 23 gwei
    gas: number // increase this amount by 25%
  }
}
