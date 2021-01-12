import { FC, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Skeleton, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { coinIdsAtom, coinPriceAtom } from '@/atoms'
import type { Props } from '@/types'

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

const CoinTable: FC<Props> = ({ data }) => {
  const [coinPrice] = useAtom(coinPriceAtom)
  const [, setCoinIds] = useAtom(coinIdsAtom)

  const [loading, setLoading] = useState(false)

  const formatNum = (numString: string, max = 2, min?: number, percent = false) => {
    const newNum = Number(numString).toLocaleString(undefined, {
      maximumFractionDigits: max,
      minimumFractionDigits: min,
    })
    if (percent) return newNum + '%'
    else return '$' + newNum
  }

  // Handles loading state
  useEffect(() => {
    if (data[0]) {
      setLoading(false)
      setCoinIds(data.map(coin => coin.id))
    } else setLoading(true)
  }, [data, loading, setLoading, setCoinIds])

  const CoinData = () => {
    return data.map((coin, idx) => (
      <Tr key={idx}>
        <Td>{coin.rank}</Td>
        <Td>{coin.name + ` (${coin.symbol})`}</Td>
        <Td isNumeric>{formatNum(coin.volumeUsd24Hr, 0)}</Td>
        <Td isNumeric>{formatNum(coin.marketCapUsd, 0)}</Td>
        <Td textColor={Number(coin.changePercent24Hr) > 0 ? 'green.500' : 'red.500'} isNumeric>
          {formatNum(coin.changePercent24Hr, 2, 2, true)}
        </Td>
        <Td isNumeric>
          {formatNum(coinPrice[coin.id] ? coinPrice[coin.id] : coin.priceUsd, 2, 2)}
        </Td>
      </Tr>
    ))
  }

  return (
    <>
      <Table variant="unstyled" size="lg">
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

export default CoinTable
