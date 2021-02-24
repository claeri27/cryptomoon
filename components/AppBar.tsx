import React, { FC } from 'react'
import { Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { pageAtom } from '@/atoms'
import { Drawer } from './Drawer'

const AppBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [, setPage] = useAtom(pageAtom)

  return (
    <Flex
      align="center"
      justify="space-between"
      h="4rem"
      w="100%"
      bgGradient="linear(to-t, blue.800, blue.600,  blue.400)">
      <Heading
        position="absolute"
        left="50%"
        color="whitesmoke"
        alignItems="center"
        transform="translate(-50%,0)"
        d="flex"
        size="lg"
        _hover={{ cursor: 'pointer' }}
        onClick={() => setPage(1)}>
        CRYPT
        <MoonIcon />
        MOON
      </Heading>
      <Drawer />
      <IconButton
        mx="1rem"
        aria-label="Change theme"
        variant="outline"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={() => toggleColorMode()}
      />
    </Flex>
  )
}

export default AppBar
