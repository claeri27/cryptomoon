import { contractAddressesAtom, tokenDataAtom } from '@/atoms'
import { getTokenData } from '@/queries'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const useFetchChartData = () => {
  const [tokenData, setTokenData] = useAtom(tokenDataAtom)

  useEffect(() => {
    const handleTokenData = async () => {
      const data = await getTokenData()
      const filteredData = data.filter(token => token.contract_address)
      setTokenData(filteredData)
    }
    if (!tokenData[0]) handleTokenData()
  }, [tokenData, setTokenData, getTokenData])
}

export default useFetchChartData
