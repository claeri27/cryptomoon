import { Button, Icon, Divider, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

export const DrawerButton: FC<{ name: string; icon: any }> = ({ name, icon }) => (
  <>
    <Button variant="outline" justifyContent="flex-start" mt=".5rem" h="5rem" w="100%">
      <Icon as={icon} ml="1.25rem" w="30px" h="30px" />
      <Divider mx="1rem" orientation="vertical" h="25px" />
      <Text fontSize="xl">{name}</Text>
    </Button>
  </>
)
