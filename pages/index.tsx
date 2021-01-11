import { FC, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { coinDataAtom, coinIdsAtom, coinPriceAtom } from '@/atoms'
import CoinTable from '@/components/CoinTable'
import AppBar from '@/components/AppBar'

const Home: FC = () => {
  const [coinIds] = useAtom(coinIdsAtom)
  const [coinData, setCoinData] = useAtom(coinDataAtom)
  const [, setCoinPrice] = useAtom(coinPriceAtom)

  // Gets initial data from backend and updates state
  useEffect(() => {
    const getAssets = async () => {
      const res = await axios(process.env.NEXT_PUBLIC_ASSETS_API)
      setCoinData(res.data.data)
    }
    getAssets()
    const interval = setInterval(() => getAssets(), 10000)
    return () => clearInterval(interval)
  }, [setCoinData])

  // Sets initial price data before websocket takes over
  useEffect(() => {
    const prices = {}
    coinData.forEach(coin => (prices[coin.id] = coin.priceUsd))
    setCoinPrice(prices)
  }, [coinData, setCoinPrice])

  // Sets up websocket
  useEffect(() => {
    if (coinIds[0]) {
      const socket = new WebSocket(process.env.NEXT_PUBLIC_ASSETS_WS + coinIds.map(id => id))
      socket.onerror = err => console.log(err)
      socket.onmessage = msg => setCoinPrice(prev => ({ ...prev, ...JSON.parse(msg.data) }))
    }
  }, [coinIds, setCoinPrice])

  return (
    <Box>
      <Head>
        <title>Cryptomoon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <CoinTable />
    </Box>
  )
}

export default Home
