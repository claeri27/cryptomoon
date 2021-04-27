import { metamask } from '@/utils'
import { formatEther } from '@ethersproject/units'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'

const emptyProfile = {
  account: '',
  shortAccount: '',
  balance: '',
  library: '',
  chainId: '',
  active: false,
  deactivate: () => null,
}

const useProfile = () => {
  const { account, active, library, chainId, activate, deactivate } = useWeb3React()
  const [balance, setBalance] = useState('')

  const shortAccount = account?.substr(0, 4) + '...' + account?.substr(account?.length - 4, 4)

  useEffect(() => {
    const getBalance = async () => {
      const bal = await library?.getBalance(account)
      setBalance(formatEther(bal).substr(0, 6))
    }
    if (active) getBalance()
  }, [balance, library, account, active])

  if (!active) return emptyProfile

  return {
    account,
    active,
    balance,
    chainId,
    shortAccount,
    library,
    deactivate,
  }
}

export default useProfile
