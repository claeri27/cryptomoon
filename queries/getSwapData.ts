import { GetQuoteData, GetQuoteDataResponse } from '@/types'
import axios from 'axios'

const getSwapData = async ({
  chainId = '56',
  fromTokenAddress,
  toTokenAddress,
  amount,
  fromAddress,
  slippage,
  protocols,
  destReceiver,
  referrerAddress,
  fee,
  gasPrice,
  burnChi,
  complexityLevel,
  connectorTokens,
  allowPartialFill,
  disableEstimate,
  gasLimit,
  parts,
  mainRouteParts,
}) => {
  const url = `https://api.1inch.exchange/v3.0/${chainId}/swap?fromTokenAddress=${fromTokenAddress}&toTokenAddress=${toTokenAddress}&amount=${amount}&fromAddress=${fromAddress}&slippage=${slippage}`
  const res = await axios(url)
  return res.data
}

export default getSwapData
