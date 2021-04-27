import { Button, Icon, Divider, Text } from '@chakra-ui/react'

export const DrawerButton: React.FC<{ name: string; icon: any }> = ({ name, icon }) => (
  <>
    <Button
      onClick={() => {
        if (name === 'Swap') {
          window.location.href = 'https://exchange.pancakeswap.finance/#/swap'
        }
      }}
      variant="outline"
      justifyContent="flex-start"
      mt=".5rem"
      h="5rem"
      w="100%">
      <Icon as={icon} ml="1.25rem" w="30px" h="30px" />
      <Divider mx="1rem" orientation="vertical" h="25px" />
      <Text fontSize="xl">{name}</Text>
    </Button>
  </>
)
