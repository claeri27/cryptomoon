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
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppBar />
    <CoinTable data={data} />
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  const res: AxiosResponse<Props> = await axios(process.env.NEXT_PUBLIC_ASSETS_API)
  return { props: { data: res.data }, revalidate: 2 }
}

export default Home
