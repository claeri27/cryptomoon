import { contractAddressesAtom, tokenDataAtom } from '@/atoms'
import { getChartData } from '@/queries'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const useFetchChartData = () => {
  const [tokenData, setTokenData] = useAtom(tokenDataAtom)

  useEffect(() => {
    const handleTokenData = async () => {
      const data = await getChartData()
      const filteredData = data.filter(token => token.contract_address)
      setTokenData(filteredData)
    }
    if (!tokenData[0]) handleTokenData()
  }, [tokenData, setTokenData, getChartData])
}

export default useFetchChartData
