import { AccordionPanel, Flex, Img, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import type { Coin } from '@/types'
import { formatDate, formatNum } from '@/utils'
import dynamic from 'next/dynamic'
import { GridItem, GridItemHeader, GridItemValue } from './components'

const Sparklines = dynamic(() => import('@/components/Sparklines'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => (
    <Flex align="center" justify="center" h={352}>
      <Spinner label="spinner" size="xl" />
    </Flex>
  ),
})

const CoinDetails: React.FC<Coin> = props => {
  const {
    image,
    name,
    current_price,
    symbol,
    market_cap,
    total_volume,
    total_supply,
    high_24h,
    low_24h,
    ath,
    atl,
  } = props
  return (
    <AccordionPanel p="0rem">
      <Flex
        p=".5rem"
        justify="space-around"
        direction={['column', null, null, 'row']}
        align="center"
        my="1rem">
        <Flex w={['100%', null, null, 'auto']} mb="2rem" justify="center" align="center">
          <Img mr="1rem" src={image} alt="missing" w={[120, 120, 200]} h={[120, 120, 200]} />
          <Flex ml="1rem" direction="column">
            <Text fontSize="2xl">{`${name} (${symbol.toUpperCase()})`}</Text>
            <Text fontSize="2xl">{formatNum(current_price, 2, 2, false)}</Text>
          </Flex>
        </Flex>
        <SimpleGrid mb={['2rem', '0rem']} columns={[2, 4]} spacing={[10, 3, 10]}>
          <GridItem>
            <GridItemHeader>PRICE</GridItemHeader>
            <GridItemValue>{formatNum(current_price, 4, 2)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>MARKET CAP</GridItemHeader>
            <GridItemValue>{formatNum(market_cap)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>TOTAL VOLUME</GridItemHeader>
            <GridItemValue>{formatNum(total_volume)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>TOTAL SUPPLY</GridItemHeader>
            <GridItemValue>{formatNum(total_supply)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>24HR HIGH</GridItemHeader>
            <GridItemValue>{formatNum(high_24h)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>24HR LOW</GridItemHeader>
            <GridItemValue>{formatNum(low_24h)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>ALL TIME HIGH</GridItemHeader>
            <GridItemValue>{formatNum(ath)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>ALL TIME LOW</GridItemHeader>
            <GridItemValue>{formatNum(atl)}</GridItemValue>
          </GridItem>
        </SimpleGrid>
      </Flex>
      <Sparklines coin={props} />
    </AccordionPanel>
  )
}

export default CoinDetails
