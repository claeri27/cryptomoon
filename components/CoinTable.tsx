import { FC, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import dynamic from 'next/dynamic'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Img,
  Spinner,
  StatArrow,
  Text,
} from '@chakra-ui/react'
import { coinIdsAtom, coinPriceAtom } from '@/atoms'
import type { Props } from '@/types'

const AccordionDetails = dynamic(() => import('@/components/AccordionDetails'))

const CoinTable: FC<Props> = ({ data }) => {
  const [coinPrice] = useAtom(coinPriceAtom)
  const [, setCoinIds] = useAtom(coinIdsAtom)

  const [loading, setLoading] = useState(false)

  const formatNum = (numString: string, max = 2, min?: number, percent = false) => {
    const newNum = Number(numString).toLocaleString(undefined, {
      maximumFractionDigits: max,
      minimumFractionDigits: min,
    })
    if (percent) return `${newNum}%`
    else return `$${newNum}`
  }

  // Handles loading state
  useEffect(() => {
    if (data[0]) {
      setLoading(false)
      setCoinIds(data.map(coin => coin.id))
    } else setLoading(true)
  }, [data, loading, setLoading, setCoinIds])

  const CoinData = () => {
    return data.map((coin, idx) => {
      const src = `/vector-icons/${coin.id}.svg`
      return (
        <AccordionItem key={idx}>
          <AccordionButton id={coin.id} minH="4rem" justifyContent="space-between">
            <Text fontSize="2xl" w="5rem" align="center">
              {coin.rank}
            </Text>
            <Box d="flex" w="22rem" alignItems="center">
              <Img
                src={src}
                h={10}
                w={10}
                mr={5}
                alt="icon"
                fallback={<Spinner h={10} w={10} mr={5} />}
              />
              <Text fontSize="xl" align="left">
                {coin.name + ` (${coin.symbol})`}
              </Text>
            </Box>
            <Text fontSize="xl" align="right" w="12rem">
              {formatNum(coin.volumeUsd24Hr, 0)}
            </Text>
            <Text fontSize="xl" align="right" w="12rem">
              {formatNum(coin.marketCapUsd, 0)}
            </Text>
            <Box d="flex" w="7rem" alignItems="center">
              <StatArrow
                mr=".5rem"
                type={Number(coin.changePercent24Hr) >= 0 ? 'increase' : 'decrease'}
              />
              <Text
                align="right"
                fontSize="xl"
                textColor={Number(coin.changePercent24Hr) > 0 ? 'green.500' : 'red.500'}>
                {formatNum(coin.changePercent24Hr, 2, 2, true)}
              </Text>
            </Box>
            <Text fontSize="xl" w="7rem" align="right" mr="2rem">
              {formatNum(
                coinPrice[coin.id] ? coinPrice[coin.id] : coin.priceUsd,
                Number(coin.priceUsd) > 1 || Number(coinPrice[coin.id]) > 1 ? 2 : 5,
                2,
                false,
              )}
            </Text>
          </AccordionButton>
          <AccordionDetails {...coin} />
        </AccordionItem>
      )
    })
  }

  return (
    <Accordion variant="striped" allowMultiple>
      {CoinData()}
    </Accordion>
  )
}

export default CoinTable
