import { AccordionPanel, Box, Flex, Img, Text } from '@chakra-ui/react'
import React, { FC } from 'react'
import type { Data } from '@/types'
import { formatNum } from '@/lib/formatNum'
import dynamic from 'next/dynamic'

const Sparklines = dynamic(() => import('@/components/Sparklines'), {
  ssr: false,
  // eslint-disable-next-line react/display-name
  loading: () => <div>LOADING</div>,
})

interface Props extends Data {
  sparkline: boolean
}

const AccordionDetails: FC<Props> = props => {
  return (
    <AccordionPanel>
      <Flex align="center">
        <Img m={5} src={props.image} alt="missing" w={200} h={200} />
        <Flex px={5} direction="column">
          <Text fontSize="3xl">{`${props.name} (${props.symbol.toUpperCase()})`}</Text>
          <Text fontSize="2xl">{formatNum(props.current_price, 2, 2, false)}</Text>
        </Flex>
      </Flex>
      {props.sparkline && (
        <Box>
          <Sparklines coin={props} />
        </Box>
      )}
    </AccordionPanel>
  )
}

export default AccordionDetails
