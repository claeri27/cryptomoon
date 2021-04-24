import React, { FC } from 'react'
import { Flex } from '@chakra-ui/react'
import { BalanceButton, ConnectButton, Header } from './components'
import Drawer from '../Drawer'

const AppBar: FC = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      h="4rem"
      w="100%"
      bgGradient="linear(to-t, blue.800, blue.600,  blue.400)">
      <Header />
      <Drawer />
      <Flex align="center" mr="1rem">
        <BalanceButton />
        <ConnectButton />
      </Flex>
    </Flex>
  )
}

export default AppBar
