import { FC } from 'react'
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
import type { Props } from '@/types'
import { formatNum } from '@/lib/formatNum'

const AccordionDetails = dynamic(() => import('@/components/AccordionDetails'))

const CoinTable: FC<Props> = ({ data }) => {
  const getSrc = (name: string): string => {
    return `/vector-icons/${name.replace(' ', '-').toLowerCase()}.svg`
  }

  return (
    <Accordion variant="striped" allowMultiple>
      {data.map((coin, idx) => (
        <AccordionItem key={idx}>
          <AccordionButton id={coin.id} minH="4rem" justifyContent="space-between">
            <Text fontSize="2xl" w="5rem" align="center">
              {coin.market_cap_rank}
            </Text>
            <Box d="flex" w="22rem" alignItems="center">
              <Img
                src={getSrc(coin.name)}
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
              {formatNum(coin.total_volume, 0)}
            </Text>
            <Text fontSize="xl" align="right" w="12rem">
              {formatNum(coin.market_cap, 0)}
            </Text>
            <Box d="flex" w="7rem" alignItems="center">
              <StatArrow
                mr=".5rem"
                type={coin.price_change_percentage_24h >= 0 ? 'increase' : 'decrease'}
              />
              <Text
                align="right"
                fontSize="xl"
                textColor={coin.price_change_percentage_24h > 0 ? 'green.500' : 'red.500'}>
                {coin.price_change_percentage_24h}
              </Text>
            </Box>
            <Text fontSize="xl" w="8rem" mr="2rem" align="right">
              {formatNum(coin.current_price, 2, 2, false)}
            </Text>
          </AccordionButton>
          <AccordionDetails {...coin} />
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CoinTable
