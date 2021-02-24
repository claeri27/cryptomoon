import React, { FC } from 'react'
import dynamic from 'next/dynamic'
import { useAtom } from 'jotai'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Flex,
  Img,
  Skeleton,
  StatArrow,
  Text,
} from '@chakra-ui/react'
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { formatNum } from '@/lib/formatData'
import ReactPaginate from 'react-paginate'
import TableHeader from '@/components/TableHeader'
import { pageAtom } from '@/atoms'
import { useCoins } from '@/hooks'

const AccordionDetails = dynamic(() => import('@/components/CoinDetails'))
const Sparklines = dynamic(() => import('@/components/Sparklines'), {
  // eslint-disable-next-line react/display-name
  loading: () => (
    <Skeleton startColor="gray.300" endColor="gray.600" speed={10} w="13rem" h="3rem" />
  ),
})

interface PercentageProps {
  change: number
  type: string
}

const Percentage: FC<PercentageProps> = ({ change, type }) => {
  return (
    <Flex
      align="center"
      d={[
        type !== '24h' ? 'none' : 'flex',
        type === '1y' || type === '30d' ? 'none' : 'flex',
        'flex',
      ]}
      w={['15vw', '15vw', '11vw', '8vw', '8vw']}>
      <StatArrow mr={['.1rem', '.3rem']} type={change >= 0 ? 'increase' : 'decrease'} />
      <Text fontSize={['xs', null, 'sm', 'md']} textColor={change > 0 ? 'green.400' : 'red.400'}>
        {formatNum(change, 2, 2, true)}
      </Text>
    </Flex>
  )
}

const AccordionLoading: FC = () => (
  <>
    {[...Array(50)].map((_, idx) => (
      <AccordionItem key={idx}>
        <AccordionButton minH="73px" />
      </AccordionItem>
    ))}
  </>
)

const CoinTable: FC = () => {
  const [, setPage] = useAtom(pageAtom)
  const coins = useCoins()

  return (
    <>
      <TableHeader />
      <Accordion allowToggle>
        {coins.isLoading ? (
          <AccordionLoading />
        ) : (
          coins.data?.map(coin => {
            return (
              <AccordionItem key={coin.id}>
                <>
                  <AccordionButton justifyContent="space-between" p="0" minH="73px">
                    <Flex align="center">
                      <Flex justify="center" w={['8vw', '7vw']}>
                        <Text fontSize={['sm', null, 'lg', null, 'xl']}>
                          {coin.market_cap_rank}
                        </Text>
                      </Flex>
                      <Flex align="center" justify="center" w={['12vw', '8vw']}>
                        <Img
                          src={coin.image}
                          h={[6, null, 8, null, 10]}
                          w={[6, null, 8, null, 10]}
                          mr={['none', 5]}
                          alt="icon"
                        />
                      </Flex>
                      <Flex align="center" w={['30vw', '13vw', '10vw']}>
                        <Text align="left" fontSize={['xs', null, 'sm', 'md']}>
                          {coin.name + ` (${coin.symbol.toUpperCase()})`}
                        </Text>
                      </Flex>
                      <Box w={['30vw', '25vw', '20vw', '15vw']}>
                        <Text fontSize={['xs', null, 'sm', 'md']}>
                          {formatNum(coin.current_price, 5, 2, false)}
                        </Text>
                      </Box>
                      <Flex align="center">
                        <Percentage
                          type="1h"
                          change={coin.price_change_percentage_1h_in_currency}
                        />
                        <Percentage type="24h" change={coin.price_change_percentage_24h} />
                        <Percentage
                          type="7d"
                          change={coin.price_change_percentage_7d_in_currency}
                        />
                        <Percentage
                          type="30d"
                          change={coin.price_change_percentage_30d_in_currency}
                        />
                        <Percentage
                          type="1y"
                          change={coin.price_change_percentage_1y_in_currency}
                        />
                      </Flex>
                      <Flex ml="1rem" d={['none', null, null, 'flex']} w="15vw">
                        <Sparklines coin={coin} fill={'none'} />
                      </Flex>
                    </Flex>
                  </AccordionButton>
                  <AccordionDetails {...coin} />
                </>
              </AccordionItem>
            )
          })
        )}
      </Accordion>
      <ReactPaginate
        containerClassName="paginate-container"
        breakClassName="paginate-break"
        breakLinkClassName="paginate-break-link"
        pageClassName="paginate-page"
        pageLinkClassName="paginate-page-link"
        activeClassName="paginate-active"
        activeLinkClassName="paginate-active-link"
        previousClassName="paginate-previous"
        previousLinkClassName="paginate-previous-link"
        nextClassName="paginate-next"
        nextLinkClassName="paginate-next-link"
        disabledClassName="paginate-disabled"
        pageCount={15}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        previousLabel={<ArrowBackIcon />}
        nextLabel={<ArrowForwardIcon />}
        breakLabel={'...'}
        onPageChange={({ selected }) => setPage(selected + 1)}
      />
    </>
  )
}

export default CoinTable
