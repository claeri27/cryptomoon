import { useProfile } from '@/hooks'
import { metamask } from '@/utils'
import { Button } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import React, { FC, useEffect } from 'react'

const ConnectButton: FC = () => {
  const { activate } = useWeb3React()
  const { active, shortAccount, deactivate } = useProfile()

  const handleClick = () => {
    if (active) deactivate()
    else activate(metamask)
  }

  return <Button onClick={handleClick}>{active ? shortAccount : 'Connect'}</Button>
}

export default ConnectButton
