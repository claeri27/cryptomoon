import React, { useEffect } from 'react'
import Head from 'next/head'
import { Box, Flex, Heading, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import CoinTable from '@/components/CoinTable'
import axios from 'axios'
import { coinDataAtom, coinIdsAtom, coinPriceAtom } from '@/atoms'
import { useAtom } from 'jotai'

export default function Home() {
  const [coinIds] = useAtom(coinIdsAtom)
  const [coinData, setCoinData] = useAtom(coinDataAtom)
  const [, setCoinPrice] = useAtom(coinPriceAtom)

  // Gets initial data from backend and updates state
  useEffect(() => {
    const getAssets = async () => {
      const res = await axios('http://localhost:3000/api/coinData')
      setCoinData(res.data)
    }
    getAssets()
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
      const socket = new WebSocket(`wss://ws.coincap.io/prices?assets=${coinIds.map(id => id)}`)
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
      <Flex align="center" h="20" w="100%" bg="blue.300" justify="space-between">
        <Heading size="2xl" ml="4">
          CRYPTOMOON
        </Heading>
        <Box>
          <InputGroup>
            <InputLeftElement>
              <Search2Icon color="white" />
            </InputLeftElement>
            <Input w="xs" mr="4" />
          </InputGroup>
        </Box>
      </Flex>
      <CoinTable />
    </Box>
  )
}
