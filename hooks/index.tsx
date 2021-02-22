import { useQuery } from 'react-query'
import { getCoins } from '@/queries'
import { pageAtom } from '@/atoms'
import { useAtom } from 'jotai'

export function useCoins() {
  const [page] = useAtom(pageAtom)
  return useQuery(['coins', page.toString()], () => getCoins(page.toString()))
}
