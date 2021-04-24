import { useMemo } from 'react'
import { useCoins } from '.'

const useCoin = (name: string) => {
  const { data } = useCoins()
  return useMemo(() => data?.find(coin => coin.symbol === name.toLowerCase()), [name, data])
}

export default useCoin
