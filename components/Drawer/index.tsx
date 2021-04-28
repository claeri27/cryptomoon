import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import {
  useDisclosure,
  useColorMode,
  Drawer as ChakraDrawer,
  Button,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  Icon,
  IconButton,
} from '@chakra-ui/react'
import Link from 'next/link'
import { Grid, RefreshCw, Home, BarChart2, GitHub, Mail, Gift, Send } from 'react-feather'
import { DrawerButton } from './components'

const Drawer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <IconButton
        mx="1rem"
        aria-label="Open sidebar"
        variant="outline"
        onClick={onOpen}
        icon={<Grid />}
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
              <DrawerButton name="Home" href="/" icon={Home} />
              <DrawerButton name="Swap" href="/swap" icon={RefreshCw} />
              <DrawerButton name="Charts" href="/charts" icon={BarChart2} />
              <DrawerButton name="Contact" href="/contact" icon={Mail} />
              <DrawerButton name="Donate" href="/donate" icon={Gift} />
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
              <IconButton w="20%" h="4rem" aria-label="Contact me by email" icon={<Send />} />
            </Flex>
          </DrawerContent>
        </DrawerOverlay>
      </ChakraDrawer>
    </>
  )
}

export default Drawer
