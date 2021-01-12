import { FC, useEffect } from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { coinIdsAtom, coinPriceAtom } from '@/atoms'
import CoinTable from '@/components/CoinTable'
import AppBar from '@/components/AppBar'
import axios from 'axios'
import type { Props } from '@/types'
import { GetStaticProps } from 'next'

const Home: FC<Props> = ({ data }) => {
  const [coinIds] = useAtom(coinIdsAtom)
  const [, setCoinPrice] = useAtom(coinPriceAtom)

  // Sets initial price data before websocket takes over
  useEffect(() => {
    const prices = {}
    data.forEach(coin => (prices[coin.id] = coin.priceUsd))
    setCoinPrice(prices)
  }, [data, setCoinPrice])

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
      <CoinTable data={data} />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios(process.env.NEXT_PUBLIC_ASSETS_API)
  return { props: { data: res.data.data } }
}

export default Home
