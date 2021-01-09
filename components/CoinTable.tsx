import { Box, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'

export default function CoinTable() {
  return (
    <Box>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>#</Th>
            <Th>Name</Th>
            <Th>Sym</Th>
            <Th>24hr Volume</Th>
            <Th>Market Cap</Th>
            <Th>1hr</Th>
            <Th>24hr</Th>
            <Th>7day</Th>
            <Th>Price(USD)</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}
