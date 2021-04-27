import { useProfile } from '@/hooks'
import { metamask } from '@/utils'
import { Button } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import React, { useEffect } from 'react'

const ConnectButton: React.FC = () => {
  const { activate } = useWeb3React()
  const { active, shortAccount, deactivate } = useProfile()

  const handleClick = () => {
    if (active) {
      localStorage.clear()
      deactivate()
    } else {
      localStorage.setItem('network', 'yes')
      activate(metamask)
    }
  }

  return <Button onClick={handleClick}>{active ? shortAccount : 'Connect'}</Button>
}

export default ConnectButton
