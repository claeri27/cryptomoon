import { GetQuoteData, GetQuoteDataResponse } from '@/types'
import axios from 'axios'

const getQuoteData = async ({
  chainId = '56',
  fromTokenAddress,
  toTokenAddress,
  amount,
  fee,
  protocols,
  gasPrice,
  complexityLevel,
  connectorTokens,
  gasLimit,
  parts,
  mainRouteParts,
}: GetQuoteData): Promise<GetQuoteDataResponse> => {
  const url = `https://api.1inch.exchange/v3.0/${chainId}/quote?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}`
  const res = await axios(url)
  return res.data
}

export default getQuoteData
