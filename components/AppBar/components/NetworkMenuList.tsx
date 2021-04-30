import React from 'react'
import { handleNetwork } from '@/utils'
import { Button, Flex, Img, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { networkAtom, networkFormDataAtom } from '@/atoms'
import { ChevronDownIcon } from '@chakra-ui/icons'

const NetworkItem = ({ name, url, size = [10], ...props }) => (
  <MenuItem {...props}>
    <Img src={url} h={size} w={size} mr="1rem" alt="icon" />
    <span>{name}</span>
  </MenuItem>
)

const NetworkMenuList: React.FC = () => {
  const [network, setNetwork] = useAtom(networkAtom)
  const [networkFormData, setNetworkFormData] = useAtom(networkFormDataAtom)

  return (
    <>
      <MenuButton width="100%" as={Button} rightIcon={<ChevronDownIcon />}>
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
      <MenuList>
        <NetworkItem
          name="BSC"
          url={handleNetwork('bnb').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'BSC',
              symbol: 'bnb',
              changed: true,
            }))
          }}
        />
        <NetworkItem
          name="Ethereum"
          url={handleNetwork('eth').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'Ethereum',
              symbol: 'eth',
              changed: true,
            }))
          }}
        />
        <NetworkItem
          name="Matic"
          url={handleNetwork('matic').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'Matic',
              symbol: 'matic',
              changed: true,
            }))
          }}
        />
        <NetworkItem
          name="xDai"
          url={handleNetwork('dai').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'xDai',
              symbol: 'dai',
              changed: true,
            }))
          }}
        />
        <NetworkItem
          name="Harmony"
          url={handleNetwork('one').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'Harmony',
              symbol: 'one',
              changed: true,
            }))
          }}
        />
        <NetworkItem
          name="HECO"
          url={handleNetwork('ht').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'HECO',
              symbol: 'ht',
              changed: true,
            }))
          }}
        />
        <NetworkItem
          name="Avalanche"
          url={handleNetwork('avax').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'Avalanche',
              symbol: 'avax',
              changed: true,
            }))
          }}
        />
        <NetworkItem
          name="Fantom"
          url={handleNetwork('ftm').url}
          onClick={() => {
            setNetworkFormData(data => ({
              ...data,
              name: 'Fantom',
              symbol: 'ftm',
              changed: true,
            }))
          }}
        />
      </MenuList>
    </>
  )
}

export default NetworkMenuList
