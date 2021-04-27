import axios from 'axios'

const getApproveSpender = async (chainId = '56') => {
  const url = `https://api.1inch.exchange/v3.0/${chainId}/approve/spender`
  const res = await axios(url)
  return res.data
}

export default getApproveSpender
