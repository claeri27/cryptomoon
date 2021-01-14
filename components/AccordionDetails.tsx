import { AccordionPanel, Box, Flex, Img, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import type { Data } from '@/types'
import { formatNum } from '@/lib/formatNum'
import { Sparklines, SparklinesLine } from 'react-sparklines'

const AccordionDetails: FC<Data> = props => {
  return (
    <AccordionPanel>
      <Flex align="center">
        <Img m={5} src={props.image} alt="missing" w={200} h={200} />
        <Flex px={5} direction="column">
          <Text fontSize="3xl">{`${props.name} (${props.symbol})`}</Text>
          <Text fontSize="2xl">{formatNum(props.current_price, 2, 2, false)}</Text>
        </Flex>
      </Flex>
      <Box>
        <Sparklines data={props.sparkline_in_7d.price}>
          <SparklinesLine
            color={props.price_change_percentage_7d_in_currency >= 0 ? 'green' : 'red'}
          />
        </Sparklines>
      </Box>
    </AccordionPanel>
  )
}

export default AccordionDetails
