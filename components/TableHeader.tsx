import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const TableHeader = () => {
  return (
    <Flex bg="gray.800" py="1rem" justify="space-around" cursor="default">
      <Text color="whitesmoke">#</Text>
      <Text px="5rem" color="whitesmoke">
        NAME
      </Text>
      <Text px="3rem" color="whitesmoke">
        PRICE
      </Text>
      <Text color="whitesmoke">1HR</Text>
      <Text color="whitesmoke">24HR</Text>
      <Text color="whitesmoke">7D</Text>
      <Text display={['none', null, null, null, 'block']} color="whitesmoke">
        30D
      </Text>
      <Text display={['none', null, null, null, 'block']} color="whitesmoke">
        1YR
      </Text>
      <Text color="whitesmoke" px="5rem">
        7D
      </Text>
    </Flex>
  )
}

export default TableHeader
