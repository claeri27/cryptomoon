import axios from 'axios'

const getHealthcheck = async (chainId = '56'): Promise<{ status: 'string' }> => {
  const url = `https://api.1inch.exchange/v3.0/${chainId}/healthcheck`
  const res = await axios(url)
  return res.data
}

export default getHealthcheck
