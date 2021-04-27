import { GetApproveCallData, GetApproveCallDataResponse } from '@/types'
import axios from 'axios'

const getApproveCallData = async ({
  chainId,
  tokenAddress,
  amount,
}: GetApproveCallData): Promise<GetApproveCallDataResponse> => {
  const url = `https://api.1inch.exchange/v3.0/${chainId}/approve/calldata?tokenAddress=${tokenAddress}${
    amount ? `&amount=${amount}` : `&infinity=true`
  }`
  const res = await axios(url)
  return res.data
}

export default getApproveCallData
