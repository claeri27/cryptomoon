import { AccordionPanel, Flex, Img, Text } from '@chakra-ui/react'
import { FC } from 'react'
import type { Data } from '@/types'
import { formatNum } from '@/lib/formatNum'

const AccordionDetails: FC<Data> = props => {
  const src = `/vector-icons/${props.id}.svg`
  return (
    <AccordionPanel>
      <Flex align="center">
        <Img m={5} src={src ? src : '/vector-icons/bitcoin.svg'} alt="missing" w={200} h={200} />
        <Flex px={5} direction="column">
          <Text fontSize="3xl">{`${props.name} (${props.symbol})`}</Text>
          <Text fontSize="2xl">{formatNum(props.current_price, 2, 2, false)}</Text>
        </Flex>
      </Flex>
    </AccordionPanel>
  )
}

export default AccordionDetails
