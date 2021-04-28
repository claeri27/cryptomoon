import { Button, Icon, Divider, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

export const DrawerButton: React.FC<{ name: string; icon: any; href: string }> = ({
  name,
  icon,
  href,
}) => (
  <>
    <Link href={href}>
      <Button variant="outline" justifyContent="flex-start" mt=".5rem" h="5rem" w="100%">
        <Icon as={icon} ml="1.25rem" w="30px" h="30px" />
        <Divider mx="1rem" orientation="vertical" h="25px" />
        <Text fontSize="xl">{name}</Text>
      </Button>
    </Link>
  </>
)
