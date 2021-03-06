import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'jotai'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import '@/theme/globals.css'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
    </QueryClientProvider>
  </Provider>
)

export default MyApp
