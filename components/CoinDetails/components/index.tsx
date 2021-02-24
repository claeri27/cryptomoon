import { Flex, FlexProps, Text, TextProps } from '@chakra-ui/react'
import React, { FC } from 'react'

export const GridItem: FC<FlexProps> = ({ children, ...props }) => (
  <Flex {...props} direction="column" justify="center" align="center" height="80px">
    {children}
  </Flex>
)

export const GridItemHeader: FC<TextProps> = ({ children, ...props }) => (
  <Text {...props} fontSize={['xs', null, 'sm']}>
    {children}
  </Text>
)
export const GridItemValue: FC<TextProps> = ({ children, ...props }) => (
  <Text {...props} fontSize={['lg', null, 'xl']}>
    {children}
  </Text>
)
