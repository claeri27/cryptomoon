import React, { FC } from 'react'
import {
  Button,
  Divider,
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Heading,
  Icon,
  Text,
  IconButton,
  useColorMode,
  useDisclosure,
  Link,
} from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { pageAtom } from '@/atoms'
import { AlertTriangle, GitHub, Grid, Home, List, RefreshCw, IconProps, Mail } from 'react-feather'

function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  const DrawerButton: FC<{ name: string; icon: FC<IconProps> }> = ({ name, icon }) => (
    <>
      <Button variant="outline" justifyContent="flex-start" mt=".5rem" h="5rem" w="100%">
        <Icon as={icon} ml="1.25rem" w="30px" h="30px" />
        <Divider mx="1rem" orientation="vertical" h="25px" />
        <Text fontSize="xl">{name}</Text>
      </Button>
      {/* <Divider mr="1rem" h="1rem" /> */}
    </>
  )

  return (
    <>
      <IconButton
        mx="1rem"
        aria-label="Open sidebar"
        variant="outline"
        onClick={onOpen}
        icon={<List />}
      />
      <ChakraDrawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton mt=".3rem" />
            <Flex h="4rem" align="center" fontSize="xl" borderBottomWidth="1px">
              <Icon as={Grid} ml="1rem" w="40px" h="40px" />
              <Divider mx="1rem" orientation="vertical" h="25px" />
              <Text fontSize="lg">DASHBOARD</Text>
            </Flex>
            <DrawerBody p="0" borderBottomWidth="1px">
              {/* <DrawerButton name="DASHBOARD" icon={Grid} /> */}
              <DrawerButton name="Swap" icon={RefreshCw} />
              <DrawerButton name="Lunar Farms" icon={Home} />
              <DrawerButton name="Yieldwatch" icon={AlertTriangle} />
            </DrawerBody>
            <Flex justify="space-evenly" align="center" h="6rem">
              <Button
                w="40%"
                h="4rem"
                aria-label="Change theme"
                icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                onClick={() => toggleColorMode()}>
                <SunIcon />
                <Text mx="1rem">/</Text>
                <MoonIcon />
              </Button>
              <IconButton
                w="20%"
                h="4rem"
                aria-label="Go to Github repository"
                icon={<GitHub />}
                onClick={() =>
                  (window.location.href = 'https://www.github.com/claeri27/cryptomoon')
                }
              />
              <IconButton w="20%" h="4rem" aria-label="Contact me by email" icon={<Mail />} />
            </Flex>
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
