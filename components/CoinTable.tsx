import { FC } from 'react'
import dynamic from 'next/dynamic'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Img,
  Skeleton,
  StatArrow,
  Text,
} from '@chakra-ui/react'
import { formatNum } from '@/lib/formatNum'
import type { Props } from '@/types'

const AccordionDetails = dynamic(() => import('@/components/AccordionDetails'), { ssr: false })
const Sparklines = dynamic(() => import('@/components/Sparklines'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <Skeleton w="14rem" h="3rem" />,
})

const CoinTable: FC<Props> = ({ data }) => {
  return (
    <Accordion allowToggle>
      {data.map((coin, idx) => (
        <AccordionItem key={idx}>
          {({ isExpanded }) => (
            <>
              <AccordionButton minH="73px" justifyContent="space-between">
                <Text fontSize="2xl" w="5rem" align="center">
                  {coin.market_cap_rank}
                </Text>
                <Box d="flex" w="22rem" alignItems="center">
                  <Img src={coin.image} h={10} w={10} mr={5} alt="icon" />
                  <Text fontSize="xl" align="left">
                    {coin.name + ` (${coin.symbol.toUpperCase()})`}
                  </Text>
                </Box>
                <Box w="8rem" mr="4rem">
                  <Text fontSize="xl">{formatNum(coin.current_price, 2, 2, false)}</Text>
                </Box>
                <Box d="flex" w="8rem" alignItems="center">
                  <StatArrow
                    mr=".5rem"
                    type={
                      coin.price_change_percentage_1h_in_currency >= 0 ? 'increase' : 'decrease'
                    }
                  />
                  <Text
                    align="right"
                    fontSize="xl"
                    textColor={
                      coin.price_change_percentage_1h_in_currency > 0 ? 'green.500' : 'red.500'
                    }>
                    {formatNum(coin.price_change_percentage_1h_in_currency, 2, 2, true)}
                  </Text>
                </Box>
                <Box d="flex" w="8rem" alignItems="center">
                  <StatArrow
                    mr=".5rem"
                    type={coin.price_change_percentage_24h >= 0 ? 'increase' : 'decrease'}
                  />
                  <Text
                    align="right"
                    fontSize="xl"
                    textColor={coin.price_change_percentage_24h > 0 ? 'green.500' : 'red.500'}>
                    {formatNum(coin.price_change_percentage_24h, 2, 2, true)}
                  </Text>
                </Box>
                <Box d="flex" w="8rem" alignItems="center">
                  <StatArrow
                    mr=".5rem"
                    type={
                      coin.price_change_percentage_7d_in_currency >= 0 ? 'increase' : 'decrease'
                    }
                  />
                  <Text
                    align="right"
                    fontSize="xl"
                    textColor={
                      coin.price_change_percentage_7d_in_currency > 0 ? 'green.500' : 'red.500'
                    }>
                    {formatNum(coin.price_change_percentage_7d_in_currency, 2, 2, true)}
                  </Text>
                </Box>
                <Box d="flex" w="8rem" alignItems="center">
                  <StatArrow
                    mr=".5rem"
                    type={
                      coin.price_change_percentage_30d_in_currency >= 0 ? 'increase' : 'decrease'
                    }
                  />
                  <Text
                    align="right"
                    fontSize="xl"
                    textColor={
                      coin.price_change_percentage_30d_in_currency > 0 ? 'green.500' : 'red.500'
                    }>
                    {formatNum(coin.price_change_percentage_30d_in_currency, 2, 2, true)}
                  </Text>
                </Box>
                <Box d="flex" w="10rem" alignItems="center">
                  <StatArrow
                    mr=".5rem"
                    type={
                      coin.price_change_percentage_1y_in_currency >= 0 ? 'increase' : 'decrease'
                    }
                  />
                  <Text
                    align="right"
                    fontSize="xl"
                    textColor={
                      coin.price_change_percentage_1y_in_currency > 0 ? 'green.500' : 'red.500'
                    }>
                    {formatNum(coin.price_change_percentage_1y_in_currency, 2, 2, true)}
                  </Text>
                </Box>
                <Box w={250}>
                  <Sparklines coin={coin} fill={'none'} />
                </Box>
              </AccordionButton>
              <AccordionDetails {...coin} sparkline={isExpanded} />
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default CoinTable
