import { FC } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import CoinTable from '@/components/CoinTable'
import AppBar from '@/components/AppBar'
import { QueryClient } from 'react-query'
import { getCoins } from '@/queries'
import { dehydrate, DehydratedState } from 'react-query/hydration'

const Home: FC<{ deyhdratedState: DehydratedState }> = () => (
  <Box>
    <Head>
      <title>Cryptomoon</title>
      <link rel="icon" href="/moon.svg" />
    </Head>
    <AppBar />
    <CoinTable />
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['coins', '1'], () => getCoins('1'))
  return { props: { deyhydratedState: dehydrate(queryClient) }, revalidate: 2 }
}

export default Home
