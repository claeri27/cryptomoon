import { metamask } from '@/utils'
import { Button } from '@chakra-ui/react'
import { useWeb3React } from '@web3-react/core'
import { FC } from 'react'

const ConnectButton: FC = () => {
  const { account, active, activate, deactivate } = useWeb3React()

  const handleClick = () => {
    if (active) deactivate()
    else activate(metamask)
  }

  return (
    <Button onClick={handleClick}>
      {active ? account.substr(0, 4) + '...' + account.substr(account.length - 4, 4) : 'Connect'}
    </Button>
  )
}

export default ConnectButton
