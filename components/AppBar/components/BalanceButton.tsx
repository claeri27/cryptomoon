import React, { useCallback, useEffect } from 'react'
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
import { loadingAtom, networkAtom } from '@/atoms'
import { useAtom } from 'jotai'
import { useWeb3React } from '@web3-react/core'

const BalanceButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { balance, active } = useProfile()
  const { deactivate } = useWeb3React()
  const [network] = useAtom(networkAtom)
  const [loading] = useAtom(loadingAtom)

  const balanceAndSymbol = `${balance === '0.0' ? '0' : balance} ${network.symbol.toUpperCase()}`

  const handleClick = useCallback(() => {
    deactivate()
    onClose()
  }, [deactivate, onClose])

  if (!active) return null
  else
    return (
      <>
        {!loading && network.url && balance && (
          <Button onClick={onOpen} mr="1rem">
            <Img src={network.url} h={[6]} w={[6]} mr={['none', 2]} alt="icon" />
            {balanceAndSymbol}
          </Button>
        )}
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{network.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex mb="1rem" align="center" justify="center">
                <Img src={network?.url} h={[12]} w={[12]} mr={['none', 5]} alt="icon" />
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
