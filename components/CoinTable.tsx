import { coinDataAtom, coinPriceAtom } from '@/atoms'
import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CoinTable() {
  const [coinData, setCoinData] = useAtom(coinDataAtom)
  const [coinPrice, setCoinPrice] = useAtom(coinPriceAtom)
  const [loading, setLoading] = useState(true)
  const [ids, setIds] = useState([])

  const formatNum = (numString: string, max = 2, min?: number) => {
    const newNum = Number(numString).toLocaleString(undefined, {
      maximumFractionDigits: max,
      minimumFractionDigits: min,
    })
    return '$' + newNum
  }

  useEffect(() => {
    const getAssets = async () => {
      const res = await axios('http://localhost:3000/api/hello')
      setCoinData(res.data)
    }
    getAssets()
  }, [setCoinData])

  useEffect(() => {
    if (ids[0]) {
      const socket = new WebSocket(`wss://ws.coincap.io/prices?assets=${ids.map(id => id)}`)
      socket.onerror = err => console.log(err)
      socket.onmessage = msg => setCoinPrice(prev => ({ ...prev, ...JSON.parse(msg.data) }))
    }
  }, [ids, setCoinPrice])

  useEffect(() => {
    if (coinData[0]) {
      setLoading(false)
      setIds(coinData.map(coin => coin.id))
    } else setLoading(true)
  }, [coinData, loading, setLoading, setCoinPrice])

  useEffect(() => {
    const prices = {}
    coinData.forEach(coin => (prices[coin.id] = coin.priceUsd))
    setCoinPrice(prices)
  }, [coinData, setCoinPrice])

  return (
    <>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th isNumeric>24hr Volume</Th>
            <Th isNumeric>Market Cap</Th>
            <Th isNumeric>24hr</Th>
            <Th isNumeric>Price(USD)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {loading ? (
            <>
              {[...Array(100)].map((_, index) => (
                <Tr key={index}>
                  <Td w="1">{index + 1}</Td>
                  {[...Array(5)].map((_, idx) => (
                    <Td key={idx}>
                      <Skeleton h="20px" />
                    </Td>
                  ))}
                </Tr>
              ))}
            </>
          ) : (
            coinData.map((coin, idx) => {
              return (
                <Tr key={idx}>
                  <Td>{coin.rank}</Td>
                  <Td>{coin.name + ` (${coin.symbol})`}</Td>
                  <Td isNumeric>{formatNum(coin.volumeUsd24Hr, 0)}</Td>
                  <Td isNumeric>{formatNum(coin.marketCapUsd, 0)}</Td>
                  <Td isNumeric>{formatNum(coin.changePercent24Hr, 2, 2)}</Td>
                  <Td isNumeric>{formatNum(coinPrice[coin.id], 2, 2)}</Td>
                </Tr>
              )
            })
          )}
        </Tbody>
      </Table>
    </>
  )
}
