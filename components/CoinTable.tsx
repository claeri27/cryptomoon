import { FC, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react'
import { coinIdsAtom, coinPriceAtom } from '@/atoms'
import type { Props } from '@/types'

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
      <AccordionItem key={idx}>
        <AccordionButton minH="4rem" justifyContent="space-between">
          <Text fontSize="2xl" w="5rem" align="center">
            {coin.rank}
          </Text>
          <Text fontSize="xl" w="15rem" align="left">
            {coin.name + ` (${coin.symbol})`}
          </Text>
          <Text fontSize="xl" align="right" w="12rem">
            {formatNum(coin.volumeUsd24Hr, 0)}
          </Text>
          <Text fontSize="xl" align="right" w="12rem">
            {formatNum(coin.marketCapUsd, 0)}
          </Text>
          <Text
            align="right"
            fontSize="xl"
            w="7rem"
            textColor={Number(coin.changePercent24Hr) > 0 ? 'green.500' : 'red.500'}>
            {formatNum(coin.changePercent24Hr, 2, 2, true)}
          </Text>
          <Text fontSize="xl" w="7rem" align="right" mr="2rem">
            {formatNum(
              coinPrice[coin.id] ? coinPrice[coin.id] : coin.priceUsd,
              Number(coin.priceUsd) > 1 || Number(coinPrice[coin.id]) > 1 ? 2 : 5,
              2,
              false,
            )}
          </Text>
        </AccordionButton>
        <AccordionPanel>{coin.name}</AccordionPanel>
      </AccordionItem>
    ))
  }

  return (
    <>
      <Box>
        <Accordion allowMultiple>{CoinData()}</Accordion>
      </Box>
    </>
  )
}

export default CoinTable
