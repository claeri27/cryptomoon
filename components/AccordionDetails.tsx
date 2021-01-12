import { AccordionPanel, Image } from '@chakra-ui/react'
import { FC } from 'react'
import { Text } from '@chakra-ui/react'

const AccordionDetails: FC<any> = props => {
  const { id, name, rank, symbol, priceUsd, marketCapUsd, volumeUsd24Hr } = props

  const src = `/vector-icons/${id}.svg`

  return (
    <AccordionPanel>
      <Image src={src} alt="missing" w={200} h={200} />
      {/* <Text>{rank}</Text> */}
      <Text fontSize="3xl">{name}</Text>
      <Text>{symbol}</Text>
      <Text>{priceUsd}</Text>
      <Text>{marketCapUsd}</Text>
      <Text>{volumeUsd24Hr}</Text>
    </AccordionPanel>
  )
}

export default AccordionDetails
