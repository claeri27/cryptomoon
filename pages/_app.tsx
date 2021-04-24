import { CSSReset, ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'jotai'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import '@/theme/globals.css'

const queryClient = new QueryClient()

function getLibrary(provider: any): Web3Provider {
  return new Web3Provider(provider)
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <ChakraProvider>
            <CSSReset />
            <Component {...pageProps} />
          </ChakraProvider>
        </Web3ReactProvider>
      </Hydrate>
    </QueryClientProvider>
  </Provider>
)

export default MyApp
