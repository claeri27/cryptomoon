import React from 'react'
import { handleNetwork } from '@/utils'
import { Button, Flex, Img, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { networkAtom } from '@/atoms'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NetworkItem = ({ name, url, size = [10], ...props }) => (
  <MenuItem {...props}>
    <Img src={url} h={size} w={size} mr="1rem" alt="icon" />
    <span>{name}</span>
  </MenuItem>
)

const NetworkMenuList: React.FC = () => {
  const [network, setNetwork] = useAtom(networkAtom)

  return (
    <>
      <MenuButton width="100%" as={Button} rightIcon={<ChevronDownIcon />}>
        <Flex justify="center" align="center">
          {network.url ? (
            <>
              <Img src={network.url} h={[7]} w={[7]} mr="0.5rem" alt="icon" />
              <span>{network.name}</span>
            </>
          ) : (
            <>
              <Img src={handleNetwork('eth').url} h={[7]} w={[7]} mr="0.5rem" alt="icon" />
              <span>{handleNetwork('eth').name}</span>
            </>
          )}
        </Flex>
      </MenuButton>
      <MenuList>
        <NetworkItem
          name="Ethereum"
          url={handleNetwork('eth').url}
          onClick={() => setNetwork(handleNetwork('eth'))}
        />
        <NetworkItem
          name="BSC"
          url={handleNetwork('bnb').url}
          onClick={() => setNetwork(handleNetwork('bnb'))}
        />
        <NetworkItem
          name="Matic"
          url={handleNetwork('matic').url}
          onClick={() => setNetwork(handleNetwork('matic'))}
        />
        <NetworkItem
          name="xDai"
          url={handleNetwork('dai').url}
          onClick={() => setNetwork(handleNetwork('dai'))}
        />
      </MenuList>
    </>
  )
}

export default NetworkMenuList
