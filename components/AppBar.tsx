import { FC } from 'react'
import {
  Box,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'

const AppBar: FC = () => (
  <Flex align="center" h="20" w="100%" bg="blue.300" justify="space-between">
    <Heading size="2xl" ml="4">
      CRYPTOMOON
    </Heading>
    <Box>
      <FormControl id="search">
        <InputGroup>
          <InputLeftElement>
            <Search2Icon color="white" />
          </InputLeftElement>
          <Input w="xs" mr="4" />
        </InputGroup>
      </FormControl>
    </Box>
  </Flex>
)

export default AppBar
