import { AppBar, CoinTable } from '@/components'
import { useFetchChartData } from '@/hooks'
import { getCoins, getChartData } from '@/queries'
import { Box } from '@chakra-ui/react'
import { GetStaticProps } from 'next'
import React from 'react'
import { QueryClient } from 'react-query'
import { dehydrate, DehydratedState } from 'react-query/hydration'

const Charts: React.FC<{ deyhdratedState: DehydratedState }> = () => {
  useFetchChartData()

  return (
    <Box>
      <AppBar />
      <CoinTable />
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['coins', '1'], () => getCoins('1'))
  await queryClient.prefetchQuery(['tokenData'], getChartData)
  return { props: { deyhydratedState: dehydrate(queryClient) }, revalidate: 5 }
}

export default Charts
