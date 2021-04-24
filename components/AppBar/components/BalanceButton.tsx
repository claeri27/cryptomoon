import React, { FC, useEffect, useState } from 'react'
import { useCoin } from '@/hooks'
import { Button, Img } from '@chakra-ui/react'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'

const BalanceButton: FC = () => {
  const { account, active, library } = useWeb3React()
  const [balance, setBalance] = useState('')
  const bnb = useCoin('BNB')

  useEffect(() => {
    if (active) {
      library?.getBalance(account).then(bal => setBalance(formatEther(bal).substr(0, 6)))
    }
  }, [balance, library, account, active])

  if (active) {
    return (
      <Button mr="1rem">
        <Img src={bnb?.image} h={[6]} w={[6]} mr={['none', 2]} alt="icon" />
        {`${balance} BNB`}
      </Button>
    )
  } else return null
}

export default BalanceButton
