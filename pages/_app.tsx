import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'jotai'
import { AppProps } from 'next/app'
import '@/theme/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <ChakraProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
)

export default MyApp
