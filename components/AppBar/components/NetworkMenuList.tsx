import React from 'react'
import { handleNetwork, networks } from '@/utils'
import {
  Button,
  Divider,
  Flex,
  Img,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { networkAtom, networkFormDataAtom } from '@/atoms'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NetworkMenuList: React.FC = () => {
  const [networkFormData, setNetworkFormData] = useAtom(networkFormDataAtom)

  return (
    <>
      <MenuButton
        _focus={{ boxShadow: 'none' }}
        width="100%"
        as={Button}
        rightIcon={<ChevronDownIcon />}>
        <Flex justify="center" align="center">
          <>
            <Img
              src={handleNetwork(networkFormData.symbol).url}
              h={[7]}
              w={[7]}
              mr="0.5rem"
              alt="icon"
            />
            <span>{handleNetwork(networkFormData.symbol).name}</span>
          </>
        </Flex>
      </MenuButton>
      <MenuList p="0.5rem">
        <Flex>
          <Flex direction="column">
            {networks.slice(0, 4).map(ntwk => (
              <MenuItem
                p="1rem"
                borderRadius="20px"
                onClick={() => {
                  setNetworkFormData(data => ({
                    ...data,
                    name: ntwk.name,
                    symbol: ntwk.symbol,
                    changed: true,
                  }))
                }}>
                <Img src={ntwk.url} h={10} w={10} mr="1rem" alt="icon" />
                <span>{ntwk.name}</span>
              </MenuItem>
            ))}
          </Flex>
          <Flex direction="column">
            {networks.slice(4, 8).map(ntwk => (
              <MenuItem
                p="1rem"
                borderRadius="20px"
                onClick={() => {
                  setNetworkFormData(data => ({
                    ...data,
                    name: ntwk.name,
                    symbol: ntwk.symbol,
                    changed: true,
                  }))
                }}>
                <Img src={ntwk.url} h={10} w={10} mr="1rem" alt="icon" />
                <span>{ntwk.name}</span>
              </MenuItem>
            ))}
          </Flex>
        </Flex>
      </MenuList>
    </>
  )
}

export default NetworkMenuList
