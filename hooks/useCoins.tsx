import { useQuery } from 'react-query'
import { getCoins } from '@/queries'
import { pageAtom } from '@/atoms'
import { useAtom } from 'jotai'

const useCoins = () => {
  const [page] = useAtom(pageAtom)
  const pageStr = page.toString()
  return useQuery(['coins', pageStr], () => getCoins(pageStr))
}

export default useCoins
