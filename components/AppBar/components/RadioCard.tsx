import { Box, useRadio, UseRadioProps } from '@chakra-ui/react'
import React from 'react'

const RadioCard: React.FC<UseRadioProps> = props => {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        py={3}
        px={5}
        ml="0.5rem"
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}>
        {props.children}
      </Box>
    </Box>
  )
}

export default RadioCard
