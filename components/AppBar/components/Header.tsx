import { pageAtom } from '@/atoms'
import { MoonIcon } from '@chakra-ui/icons'
import { Heading } from '@chakra-ui/react'
import { useAtom } from 'jotai'

const Header: React.FC = () => {
  const [, setPage] = useAtom(pageAtom)

  return (
    <Heading
      position="absolute"
      left="50%"
      color="whitesmoke"
      alignItems="center"
      transform="translate(-50%,0)"
      d="flex"
      size="lg"
      _hover={{ cursor: 'pointer' }}
      onClick={() => setPage(1)}>
      CRYPT
      <MoonIcon />
      MOON
    </Heading>
  )
}

export default Header
