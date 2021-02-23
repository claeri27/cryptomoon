import React, { FC } from 'react'
import { Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons'
import { pageAtom } from '@/atoms'

const AppBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [, setPage] = useAtom(pageAtom)

  return (
    <Flex
      align="center"
      justify="flex-end"
      h="20"
      w="100%"
      bgGradient="linear(to-t, blue.800, blue.600,  blue.400)"
      position="relative">
      <Heading
        position="absolute"
        left="50%"
        color="whitesmoke"
        alignItems="center"
        transform="translate(-50%,0)"
        d="flex"
        size="2xl"
        _hover={{ cursor: 'pointer' }}
        onClick={() => setPage(1)}>
        CRYPT
        <MoonIcon />
        MOON
      </Heading>
      {/* <Flex align="center" ml="auto">
        <InputGroup>
          <InputLeftElement>
            <Search2Icon color="white" />
          </InputLeftElement>
          <Input />
        </InputGroup>
      </Flex> */}
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
