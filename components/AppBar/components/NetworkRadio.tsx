import { Flex, useRadioGroup } from '@chakra-ui/react'
import React from 'react'
import { RadioCard } from '.'

const NetworkRadio: React.FC = () => {
  const options = ['Mainnet', 'Testnet']

  const { getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'Mainnet',
    onChange: console.log,
  })

  return (
    <Flex>
      {options.map(value => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </Flex>
  )
}

export default NetworkRadio
