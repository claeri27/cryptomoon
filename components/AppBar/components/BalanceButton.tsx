import React, { useEffect } from 'react'
import { useCoin, useProfile } from '@/hooks'
import {
  Button,
  Flex,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { networkAtom } from '@/atoms'
import { useAtom } from 'jotai'

const BalanceButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { balance, active, deactivate } = useProfile()
  const [network] = useAtom(networkAtom)
  const coin = useCoin(network.symbol)

  const balanceAndSymbol = `${balance === '0.0' ? '0' : balance} ${coin?.symbol.toUpperCase()}`

  const handleClick = () => {
    deactivate()
    onClose()
  }

  if (!active) return null
  else
    return (
      <>
        <Button onClick={onOpen} mr="1rem">
          <Img src={coin?.image} h={[6]} w={[6]} mr={['none', 2]} alt="icon" />
          {balance ? balanceAndSymbol : <Spinner />}
        </Button>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{network.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex mb="1rem" align="center" justify="center">
                <Img src={coin?.image} h={[12]} w={[12]} mr={['none', 5]} alt="icon" />
                <Text fontSize="3rem">{balanceAndSymbol}</Text>
              </Flex>
              <Button
                mb="1rem"
                h="4rem"
                width="100%"
                colorScheme="blue"
                mr={3}
                onClick={handleClick}>
                DISCONNECT
              </Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}

export default BalanceButton
