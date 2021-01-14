import { FC } from 'react'
import { Flex, Heading } from '@chakra-ui/react'
import { MoonIcon } from '@chakra-ui/icons'

const AppBar: FC = () => (
  <Flex align="center" h="20" w="100%" bg="blue.300" justify="center">
    <Heading d="flex" size="2xl" ml="4">
      CRYPT
      <MoonIcon py=".25rem" />
      MOON
    </Heading>
  </Flex>
)

export default AppBar
