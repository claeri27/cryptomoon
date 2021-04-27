import axios from 'axios'
import type { Coin, Token } from '@/types'

export async function getCoins(page: string): Promise<Coin[]> {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true&price_change_percentage=1h%2C7d%2C30d%2C1y`
  const res = await axios(url)
  return res.data
}

export async function getTokenData(): Promise<Token[]> {
  const url = `https://dex.binance.org/api/v1/tokens?limit=1000`
  const res = await axios(url)
  return res.data
}
