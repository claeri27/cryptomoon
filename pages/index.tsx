import Head from 'next/head'
import { GetStaticProps } from 'next'
import { Box } from '@chakra-ui/react'
import { dehydrate, DehydratedState } from 'react-query/hydration'
import { getChartData, getCoins } from '@/queries'
import { AppBar, CoinTable } from '@/components'
import { useFetchChartData, useHandleWeb3Errors, useLocalStorage, useNetworkChanged } from '@/hooks'

const Home: React.FC<{ deyhdratedState: DehydratedState }> = () => {
  useLocalStorage()
  useFetchChartData()
  useNetworkChanged()
  useHandleWeb3Errors()

  return (
    <Box>
      <Head>
        <title>Cryptomoon</title>
        <link rel="icon" href="/moon.svg" />
      </Head>
      <AppBar />
      {/* <CoinTable /> */}
    </Box>
  )
}

// export const getStaticProps: GetStaticProps = async () => {
//   const queryClient = new QueryClient()
//   await queryClient.prefetchQuery(['coins', '1'], () => getCoins('1'))
//   await queryClient.prefetchQuery(['tokenData'], getChartData)
//   return { props: { deyhydratedState: dehydrate(queryClient) }, revalidate: 5 }
// }

export default Home
