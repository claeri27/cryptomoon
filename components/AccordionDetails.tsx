import { AccordionPanel, Flex, Img, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import type { Data } from '@/types'
import { formatNum } from '@/lib/formatNum'
import { Sparklines } from 'react-sparklines'

const AccordionDetails: FC<Data> = props => {
  return (
    <AccordionPanel>
      <Flex align="center">
        <Img m={5} src={props.image} alt="missing" w={200} h={200} />
        <Flex px={5} direction="column">
          <Text fontSize="3xl">{`${props.name} (${props.symbol})`}</Text>
          <Text fontSize="2xl">{formatNum(props.current_price, 2, 2, false)}</Text>
        </Flex>
        <Sparklines data={props.sparkline_in_7d.price} />
      </Flex>
    </AccordionPanel>
  )
}

export default AccordionDetails
