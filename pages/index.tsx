import React, { FC } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import CoinTable from '@/components/CoinTable'
import { QueryClient } from 'react-query'
import { getCoins, getTokenData } from '@/queries'
import { dehydrate, DehydratedState } from 'react-query/hydration'
import AppBar from '@/components/AppBar'

const Home: FC<{ deyhdratedState: DehydratedState }> = () => (
  <Box>
    <Head>
      <title>Cryptomoon</title>
      <link rel="icon" href="/moon.svg" />
    </Head>
    <AppBar />
    {/* <CoinTable /> */}
  </Box>
)

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(['coins', '1'], () => getCoins('1'))
//   await queryClient.prefetchQuery(['tokenData'], getTokenData)
//   return { props: { deyhydratedState: dehydrate(queryClient) }, revalidate: 5 }
// }

export default Home
