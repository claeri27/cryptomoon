import {
  AccordionPanel,
  Flex,
  FlexProps,
  Img,
  SimpleGrid,
  Spinner,
  Text,
  TextProps,
} from '@chakra-ui/react'
import React, { FC } from 'react'
import type { Coin } from '@/types'
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

const GridItem: FC<FlexProps> = ({ children, ...props }) => (
  <Flex {...props} direction="column" justify="center" align="center" height="80px">
    {children}
  </Flex>
)

const GridItemHeader: FC<TextProps> = ({ children, ...props }) => (
  <Text {...props} fontSize={['xs', null, 'sm']}>
    {children}
  </Text>
)
const GridItemValue: FC<TextProps> = ({ children, ...props }) => (
  <Text {...props} fontSize={['lg', null, 'xl']}>
    {children}
  </Text>
)

const CoinDetails: FC<Coin> = props => {
  return (
    <AccordionPanel p="0rem">
      <Flex
        p=".5rem"
        justify="space-around"
        direction={['column', null, null, 'row']}
        align="center"
        my="1rem">
        <Flex w={['100%', null, null, 'auto']} mb="2rem" justify="center" align="center">
          <Img mr="1rem" src={props.image} alt="missing" w={[120, 120, 200]} h={[120, 120, 200]} />
          <Flex ml="1rem" direction="column">
            <Text fontSize="2xl">{`${props.name} (${props.symbol.toUpperCase()})`}</Text>
            <Text fontSize="2xl">{formatNum(props.current_price, 2, 2, false)}</Text>
          </Flex>
        </Flex>
        <SimpleGrid mb={['2rem', '0rem']} columns={[2, 4]} spacing={[10, 3, 10]}>
          <GridItem>
            <GridItemHeader>PRICE</GridItemHeader>
            <GridItemValue>{formatNum(props.current_price, 4, 2)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>MARKET CAP</GridItemHeader>
            <GridItemValue>{formatNum(props.market_cap)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>TOTAL VOLUME</GridItemHeader>
            <GridItemValue>{formatNum(props.total_volume)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>TOTAL SUPPLY</GridItemHeader>
            <GridItemValue>{formatNum(props.total_supply)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>24HR HIGH</GridItemHeader>
            <GridItemValue>{formatNum(props.high_24h)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>24HR LOW</GridItemHeader>
            <GridItemValue>{formatNum(props.low_24h)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>ALL TIME HIGH</GridItemHeader>
            <GridItemValue>{formatNum(props.ath)}</GridItemValue>
          </GridItem>
          <GridItem>
            <GridItemHeader>ALL TIME LOW</GridItemHeader>
            <GridItemValue>{formatNum(props.atl)}</GridItemValue>
          </GridItem>
        </SimpleGrid>
      </Flex>
      <Sparklines coin={props} />
    </AccordionPanel>
  )
}

export default CoinDetails
