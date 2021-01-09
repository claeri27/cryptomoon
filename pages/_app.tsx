import React, { FC } from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'
import type { AppProps } from 'next/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={new QueryClient()}>
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  </QueryClientProvider>
)

export default MyApp
