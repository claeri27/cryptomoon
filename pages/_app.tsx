import { FC } from 'react'
import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { Provider } from 'jotai'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider>
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
)

export default MyApp
