import { AccordionPanel, Flex, Img, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import type { Data } from '@/types'
import { formatDate, formatNum } from '@/lib/formatData'
import dynamic from 'next/dynamic'

const Sparklines = dynamic(() => import('@/components/Sparklines'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => (
    <Flex align="center" justify="center" h={352}>
      <Spinner label="spinner" size="xl" />
    </Flex>
  ),
})

const CoinDetails: FC<Data> = props => {
  return (
    <AccordionPanel>
      <Flex justify="space-between" align="center" my="1rem">
        <Flex align="center">
          <Img ml="1rem" src={props.image} alt="missing" w={200} h={200} />
          <Flex px={5} direction="column">
            <Text fontSize="3xl">{`${props.name} (${props.symbol.toUpperCase()})`}</Text>
            <Text fontSize="2xl">{formatNum(props.current_price, 2, 2, false)}</Text>
          </Flex>
        </Flex>
        <SimpleGrid columns={4} spacing={10}>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">CURRENT PRICE</Text>
            <Text fontSize="2xl">{formatNum(props.current_price, 4, 2)}</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">MARKET CAP</Text>
            <Text fontSize="2xl">{formatNum(props.market_cap)}</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">TOTAL VOLUME</Text>
            <Text fontSize="2xl">{formatNum(props.total_volume)}</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">TOTAL SUPPLY</Text>
            <Text fontSize="2xl">{formatNum(props.total_supply)}</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">24HR HIGH</Text>
            <Text fontSize="2xl">{formatNum(props.high_24h)}</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">24HR LOW</Text>
            <Text fontSize="2xl">{formatNum(props.low_24h)}</Text>
          </Flex>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">ALL TIME HIGH</Text>
            <Text fontSize="2xl" px="1rem">
              {formatNum(props.ath)}
            </Text>
            {/* <Flex>
              <Text>{formatNum(props.ath_change_percentage, 2, 2, true)}</Text>
              <Text>{formatDate(props.ath_date)}</Text>
            </Flex> */}
          </Flex>
          <Flex direction="column" justify="center" align="center" height="80px">
            <Text fontSize="sm">ALL TIME LOW</Text>
            <Text fontSize="2xl">{formatNum(props.atl)}</Text>
            {/* <Flex>
              <Text mr="1rem">{formatNum(props.atl_change_percentage, 2, 2, true)}</Text>
              <Text>{formatDate(props.atl_date)}</Text>
            </Flex> */}
          </Flex>
        </SimpleGrid>
      </Flex>
      <Sparklines coin={props} />
    </AccordionPanel>
  )
}

export default CoinDetails
