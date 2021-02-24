import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

const TableHeader = () => {
  const HeaderText = ({ name, ...rest }) => {
    return (
      <Text {...rest} align="center" fontSize={['sm']} color="whitesmoke">
        {name}
      </Text>
    )
  }

  return (
    <Flex py=".5rem" bg="gray.800" cursor="default">
      <Text as={HeaderText} w={['10vw', '8vw']} name="#" />
      <Text as={HeaderText} w={['40vw', '22vw', '19vw']} name="NAME" />
      <Text as={HeaderText} w={['30vw', '21vw', '16vw', '11vw']} name="PRICE" />
      <Text as={HeaderText} w={['17vw', '13vw', '11vw', '10vw']} name="1HR" />
      <Text as={HeaderText} w={[null, '17vw', '11vw', '6vw']} d={['none', 'block']} name="24HR" />
      <Text as={HeaderText} w={[null, '13vw', '11vw', '9vw']} d={['none', 'block']} name="7D" />
      <Text
        as={HeaderText}
        w={[null, null, '13vw', '8vw']}
        d={['none', null, 'block']}
        name="30D"
      />
      <Text as={HeaderText} w={[null, null, '8vw']} d={['none', null, 'block']} name="1YR" />
      <Text as={HeaderText} w={[null, null, '20vw']} d={['none', null, null, 'block']} name="7D" />
    </Flex>
  )
}

export default TableHeader
