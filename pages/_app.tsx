import { FC } from 'react'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'jotai'
import type { AppProps } from 'next/app'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider>
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
)

export default MyApp
