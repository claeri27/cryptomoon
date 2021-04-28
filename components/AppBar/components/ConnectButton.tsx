import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Menu,
  HStack,
  useRadioGroup,
} from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { NetworkMenuList, NetworkRadio } from '.'
import { useProfile } from '@/hooks'
import { metamask } from '@/utils'

const ConnectButton: React.FC = () => {
  const { activate, deactivate } = useWeb3React()
  const { active, shortAccount } = useProfile()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getRootProps } = useRadioGroup()

  const handleClick = () => {
    if (active) {
      localStorage.clear()
      deactivate()
    } else {
      localStorage.setItem('network', 'yes')
      activate(metamask)
    }
  }

  return (
    <>
      <Button onClick={onOpen}>{active ? shortAccount : 'Connect'}</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Connect to Network</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Menu>
              <HStack mb="2rem" justifyContent="space-between" {...getRootProps()}>
                <NetworkMenuList />
                <NetworkRadio />
              </HStack>
            </Menu>
            <Button mb="1rem" h="4rem" width="100%" colorScheme="blue" mr={3} onClick={handleClick}>
              {active ? 'DISCONNECT' : 'CONNECT METAMASK'}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConnectButton
