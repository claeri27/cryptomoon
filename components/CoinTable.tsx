import React, { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import { useAtom } from 'jotai'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
  Img,
  Skeleton,
  Spinner,
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

const CoinTable: FC = () => {
  const [, setPage] = useAtom(pageAtom)
  const coins = useCoins()

  return (
    <>
      <TableHeader />
      <Accordion allowToggle>
        {coins.isLoading ? (
          <>
            {[...Array(50)].map((_, idx) => (
              <AccordionItem key={idx}>
                <AccordionButton minH="73px" />
              </AccordionItem>
            ))}
          </>
        ) : (
          coins.data?.map(coin => {
            return (
              <AccordionItem key={coin.id}>
                <>
                  <AccordionButton minH="73px" justifyContent="space-between">
                    <Text fontSize="2xl" w="5rem" mr="3rem" align="center">
                      {coin.market_cap_rank}
                    </Text>
                    <Box d="flex" w="22rem" alignItems="center">
                      <Img src={coin.image} h={10} w={10} mr={5} alt="icon" />
                      <Text fontSize="xl" align="left">
                        {coin.name + ` (${coin.symbol.toUpperCase()})`}
                      </Text>
                    </Box>
                    <Box w="8rem" mr="4rem">
                      <Text fontSize="xl">{formatNum(coin.current_price, 5, 2, false)}</Text>
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
                          coin.price_change_percentage_1h_in_currency > 0 ? 'green.400' : 'red.400'
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
                        textColor={coin.price_change_percentage_24h > 0 ? 'green.400' : 'red.400'}>
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
                          coin.price_change_percentage_7d_in_currency > 0 ? 'green.400' : 'red.400'
                        }>
                        {formatNum(coin.price_change_percentage_7d_in_currency, 2, 2, true)}
                      </Text>
                    </Box>
                    <Box d="flex" w="8rem" alignItems="center">
                      <StatArrow
                        mr=".5rem"
                        type={
                          coin.price_change_percentage_30d_in_currency >= 0
                            ? 'increase'
                            : 'decrease'
                        }
                      />
                      <Text
                        align="right"
                        fontSize="xl"
                        textColor={
                          coin.price_change_percentage_30d_in_currency > 0 ? 'green.400' : 'red.400'
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
                          coin.price_change_percentage_1y_in_currency > 0 ? 'green.400' : 'red.400'
                        }>
                        {formatNum(coin.price_change_percentage_1y_in_currency, 2, 2, true)}
                      </Text>
                    </Box>
                    <Box w={250}>
                      <Sparklines coin={coin} fill={'none'} />
                    </Box>
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
