import { Box, Flex, Text } from '@chakra-ui/react'
import { useScreenSize } from '@/hooks'

const HeaderText = ({ children, ...props }) => (
  <Text {...props} align="center" fontSize={['sm']} color="whitesmoke">
    {children}
  </Text>
)

const TableHeader: React.FC = () => {
  const screenSize = useScreenSize()
  return (
    <Flex py=".5rem" bg="gray.800" cursor="default">
      <HeaderText w={['10vw', '8vw']}>#</HeaderText>
      <HeaderText w={['40vw', '22vw', '19vw']}>NAME</HeaderText>
      <HeaderText w={['30vw', '21vw', '16vw', '11vw']}>
        {screenSize.sm ? 'PRICE' : '24HR'}
      </HeaderText>
      <HeaderText w={['17vw', '13vw', '11vw', '10vw']} d={['none', 'block']}>
        1HR
      </HeaderText>
      <HeaderText w={['14vw', '17vw', '11vw', '6vw']}>
        {screenSize.sm ? '24HR' : 'PRICE'}
      </HeaderText>
      <HeaderText w={['13vw', null, '11vw', '9vw']} d={['none', 'block']}>
        7D
      </HeaderText>
      <HeaderText w={[null, null, '13vw', '8vw']} d={['none', null, 'block']}>
        30D
      </HeaderText>
      <HeaderText w={[null, null, '8vw']} d={['none', null, 'block']}>
        1YR
      </HeaderText>
      <HeaderText w={[null, null, '20vw']} d={['none', null, null, 'block']}>
        7D
      </HeaderText>
    </Flex>
  )
}

export default TableHeader
