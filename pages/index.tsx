import { FC, useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import axios, { AxiosResponse } from 'axios'
import { Box } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { coinIdsAtom, coinPriceAtom } from '@/atoms'
import CoinTable from '@/components/CoinTable'
import AppBar from '@/components/AppBar'
import type { Props } from '@/types'

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
    const onMessage = (msg: MessageEvent<any>) => {
      setCoinPrice(prev => ({ ...prev, ...JSON.parse(msg.data) }))
    }

    if (coinIds[0]) {
      const socket = new WebSocket(process.env.NEXT_PUBLIC_ASSETS_WS + coinIds.map(id => id))
      socket.onerror = err => console.log(err)
      socket.onmessage = msg => onMessage(msg)
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
  const res: AxiosResponse<Props> = await axios(process.env.NEXT_PUBLIC_ASSETS_API)
  return { props: { data: res.data.data } }
}

export default Home
