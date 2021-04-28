import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { AppBar } from '@/components'

const Home: React.FC = () => {
  return (
    <Box>
      <Head>
        <title>Cryptomoon</title>
        <link rel="icon" href="/moon.svg" />
      </Head>
      <AppBar />
    </Box>
  )
}

export default Home
