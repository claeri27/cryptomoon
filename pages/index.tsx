import { FC } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import axios, { AxiosResponse } from 'axios'
import { Box } from '@chakra-ui/react'
import CoinTable from '@/components/CoinTable'
import AppBar from '@/components/AppBar'
import type { Props } from '@/types'

const Home: FC<Props> = ({ data }) => (
  <Box>
    <Head>
      <title>Cryptomoon</title>
      <link rel="icon" href="/moon.svg" />
    </Head>
    <AppBar />
    <CoinTable data={data} />
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  const res: AxiosResponse<Props> = await axios(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C7d%2C30d%2C1y',
  )
  return { props: { data: res.data }, revalidate: 2 }
}

export default Home
