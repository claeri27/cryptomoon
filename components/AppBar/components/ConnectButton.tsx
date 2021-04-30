import React, { useCallback, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { NetworkMenuList, NetworkRadio } from '.'
import { useProfile } from '@/hooks'
import { loadingAtom, networkAtom, networkFormDataAtom, unchangedNetworkFormData } from '@/atoms'
import { useAtom } from 'jotai'
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
  Spinner,
} from '@chakra-ui/react'
import { handleNetwork, metamask, setupNetwork } from '@/utils'

const ConnectButton: React.FC = () => {
  const { activate, deactivate, account } = useWeb3React()
  const { shortAccount } = useProfile()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { getRootProps } = useRadioGroup()
  const [network, setNetwork] = useAtom(networkAtom)
  const [networkFormData, setNetworkFormData] = useAtom(networkFormDataAtom)
  const [loading, setLoading] = useAtom(loadingAtom)

  const handleNetworkSetup = useCallback(async () => {
    return await setupNetwork(networkFormData.symbol)
  }, [networkFormData.symbol, setupNetwork])

  const handleLoading = useCallback(async () => {
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setLoading(false)
  }, [setLoading])

  const handleConnect = useCallback(async () => {
    if (networkFormData.name !== 'Ethereum') {
      const hasSetup = await handleNetworkSetup()
      if (hasSetup) {
        localStorage.setItem('network', networkFormData.symbol)
        setNetwork(handleNetwork(networkFormData.symbol))
        onClose()
        await handleLoading()
        activate(metamask)
      }
    } else {
      localStorage.setItem('network', networkFormData.symbol)
      setNetwork(handleNetwork(networkFormData.symbol))
      onClose()
      await handleLoading()
      activate(metamask)
    }
  }, [networkFormData.name, handleNetworkSetup, onClose, activate, setNetworkFormData])

  const handleDisconnect = useCallback(() => {
    localStorage.clear()
    onClose()
    deactivate()
  }, [onClose, deactivate])

  const handleModalClose = () => {
    onClose()
    setNetworkFormData(unchangedNetworkFormData)
  }

  const handleModalButtonText = () => {
    if (account) return 'DISCONNECT'
    else return 'CONNECT'
  }

  const handleButtonText = () => {
    if (loading) return <Spinner />
    else {
      if (account) return shortAccount
      else return 'Connect'
    }
  }

  return (
    <>
      <Button _focus={{ boxShadow: 'none' }} onClick={onOpen}>
        {handleButtonText()}
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={handleModalClose}>
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
            {account && (
              <Button
                mb="1rem"
                h="4rem"
                width="100%"
                colorScheme="blue"
                mr={3}
                disabled={
                  networkFormData.name === network.name || networkFormData.name === 'Ethereum'
                }
                onClick={handleConnect}>
                CHANGE NETWORK
              </Button>
            )}
            <Button
              mb="1rem"
              h="4rem"
              width="100%"
              colorScheme="blue"
              mr={3}
              disabled={!account && networkFormData.name === 'Ethereum'}
              onClick={() => {
                if (account) handleDisconnect()
                else handleConnect()
              }}>
              {handleModalButtonText()}
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ConnectButton
