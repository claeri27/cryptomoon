import axios from 'axios'
import { Token } from '@/types'

export default async function getChartData(): Promise<Token[]> {
  const url = `https://dex.binance.org/api/v1/tokens?limit=1000`
  const res = await axios(url)
  return res.data
}
