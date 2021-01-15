import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const TableHeader = () => {
  return (
    <Flex my="1rem" justify="space-around" cursor="default">
      <Text>#</Text>
      <Text px="5rem">NAME</Text>
      <Text px="3rem">PRICE</Text>
      <Text>1HR</Text>
      <Text>24HR</Text>
      <Text>7D</Text>
      <Text>30D</Text>
      <Text>1YR</Text>
      <Text px="5rem">7D</Text>
    </Flex>
  )
}

export default TableHeader
