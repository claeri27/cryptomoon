import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { coinDataAtom, coinIdsAtom, coinPriceAtom } from '@/atoms'

const Loading = () => (
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
)

export default function CoinTable() {
  const [coinData] = useAtom(coinDataAtom)
  const [coinPrice] = useAtom(coinPriceAtom)
  const [, setCoinIds] = useAtom(coinIdsAtom)

  const [loading, setLoading] = useState(true)

  const formatNum = (numString: string, max = 2, min?: number) => {
    const newNum = Number(numString).toLocaleString(undefined, {
      maximumFractionDigits: max,
      minimumFractionDigits: min,
    })
    return '$' + newNum
  }

  // Handles loading state
  useEffect(() => {
    if (coinData[0]) {
      setLoading(false)
      setCoinIds(coinData.map(coin => coin.id))
    } else setLoading(true)
  }, [coinData, loading, setLoading, setCoinIds])

  const CoinData = () => {
    return coinData.map((coin, idx) => (
      <Tr key={idx}>
        <Td>{coin.rank}</Td>
        <Td>{coin.name + ` (${coin.symbol})`}</Td>
        <Td isNumeric>{formatNum(coin.volumeUsd24Hr, 0)}</Td>
        <Td isNumeric>{formatNum(coin.marketCapUsd, 0)}</Td>
        <Td isNumeric>{formatNum(coin.changePercent24Hr, 2, 2)}</Td>
        <Td isNumeric>{formatNum(coinPrice[coin.id], 2, 2)}</Td>
      </Tr>
    ))
  }

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
        <Tbody>{loading ? Loading() : CoinData()}</Tbody>
      </Table>
    </>
  )
}
