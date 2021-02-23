import React, { FC } from 'react'
import {
  Button,
  Divider,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  IconButton,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons'
import { pageAtom } from '@/atoms'
import { Home, List } from 'react-feather'

function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        mx="1rem"
        aria-label="Open sidebar"
        variant="outline"
        icon={<List onClick={onOpen} />}
      />
      <ChakraDrawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <Flex h="5rem" align="center" fontSize="xl" borderBottomWidth="1px">
              <Icon as={Home} ml="1rem" w="25px" h="25px" />
              <Divider mx=".7rem" orientation="vertical" h="25px" />
              HOME
            </Flex>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </>
  )
}

const AppBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [, setPage] = useAtom(pageAtom)

  return (
    <Flex
      align="center"
      justify="space-between"
      h="5rem"
      w="100%"
      bgGradient="linear(to-t, blue.800, blue.600,  blue.400)">
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
