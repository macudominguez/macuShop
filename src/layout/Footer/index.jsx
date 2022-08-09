import {
  Button,
  HStack,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsTwitter, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <Stack
      direction="row"
      width="full"
      minH="6vh"
      bg={useColorModeValue('purple.200', '#262626')}
      justify="space-between"
      display={{ md: 'flex' }}
      textAlign="center"
    >
      <Text
        pt="20px"
        align="left"
        paddingLeft="28px"
        display={{ md: 'flex' }}
        textAlign="center"
        fontWeight="semibold"
      >
        © 2022 MacuShop.
      </Text>
      <HStack pt="8px" display={{ md: 'flex' }} textAlign="center">
        <Button variant={'ghost'}>
          <BsTwitter size="16px" />
        </Button>
        <Button variant={'ghost'}>
          <BsWhatsapp size="16px" />
        </Button>
        <Button variant={'ghost'}>
          <BsInstagram size="16px" />
        </Button>
      </HStack>
    </Stack>
  )
}

export default Footer
