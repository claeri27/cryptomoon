import React, { FC } from 'react'
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react'
import { MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons'

const AppBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex align="center" h="20" w="100%" bg="blue.500" position="relative">
      <Heading
        position="absolute"
        left="50%"
        color="whitesmoke"
        transform="translate(-50%,0)"
        d="flex"
        size="2xl"
        ml="4">
        CRYPT
        <MoonIcon py=".25rem" />
        MOON
      </Heading>
      <Flex align="center" ml="auto">
        <InputGroup>
          <InputLeftElement>
            <Search2Icon color="white" />
          </InputLeftElement>
          <Input />
        </InputGroup>
      </Flex>
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
