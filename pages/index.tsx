import React from 'react'
import Head from 'next/head'
import { Box, Heading, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import CoinTable from '@/components/CoinTable'

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Cryptomoon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex align="center" h="20" w="100%" bg="tomato" justify="space-between">
        <Heading size="2xl" ml="4">
          CRYPTOMOON
        </Heading>
        <Box>
          <InputGroup>
            <InputLeftElement>
              <Search2Icon color="white" />
            </InputLeftElement>
            <Input w="xs" mr="4" />
          </InputGroup>
        </Box>
      </Flex>
      <CoinTable />
    </Box>
  )
}
