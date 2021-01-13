import { coinPriceAtom } from '@/atoms'
import { AccordionPanel, Img, Text, Flex } from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { FC } from 'react'

const AccordionDetails: FC<any> = props => {
  const { id, name, rank, symbol, priceUsd, marketCapUsd, volumeUsd24Hr } = props
  const [coinPrice, setCoinPrice] = useAtom(coinPriceAtom)

  const src = `/vector-icons/${id}.svg`

  const formatNum = (numString: string, max = 2, min?: number, percent = false) => {
    const newNum = Number(numString).toLocaleString(undefined, {
      maximumFractionDigits: max,
      minimumFractionDigits: min,
    })
    if (percent) return `${newNum}%`
    else return `$${newNum}`
  }

  return (
    <AccordionPanel>
      <Flex align="center">
        <Img m={5} src={src ? src : '/vector-icons/bitcoin.svg'} alt="missing" w={200} h={200} />
        <Flex px={5} direction="column">
          <Text fontSize="3xl">{`${name} (${symbol})`}</Text>
          <Text fontSize="2xl">
            {formatNum(
              coinPrice[id],
              Number(priceUsd) > 1 || Number(coinPrice[id]) > 1 ? 2 : 5,
              2,
              false,
            )}
          </Text>
        </Flex>
      </Flex>
    </AccordionPanel>
  )
}

export default AccordionDetails
