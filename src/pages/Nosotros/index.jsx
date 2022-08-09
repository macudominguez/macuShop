import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { BsTwitter, BsWhatsapp, BsInstagram } from 'react-icons/bs'

import davidfoto from '../../assets/davidfoto.jpg'

const Nosotros = () => {
  return (
    <Box textAlign="center" m="50">
      <Heading size="xl" fontFamily="Open Sans">
        About Us
      </Heading>
      <Flex
        direction="row"
        w="100%"
        alignItems="center"
        minH="85vh"
        bg={useColorModeValue('#f4f3ef', '#262626')}
        display={{ md: 'flex' }}
      >
        <Stack direction="column" width="full" alignItems="center" m="20">
          <Text fontSize={{ md: '15px', lg: '20px' }} w="50%">
            Tienda online de venta de productos de decoración para el hogar.
            Somos fabricantes de Cuadros en Lienzo, en vinilo sobre madera. Nos
            caracteriza el buen diseño, óptima calidad y estilo único en cada
            uno de nuestros productos. Contamos con un catálogo muy amplio de
            cuadros a elección y con variedad de medidas para que se adapten a
            tus necesidades.Nuestro showroom esta ubicado en Capital Federal.
            Somos fabricantes y brindamos precios especiales para compras por
            mayor. Estamos a disposición para atender tus consultas desde
            nuestra página web, redes sociales y WhatsApp.
          </Text>

          <HStack>
            <Button variant={'ghost'}>
              <BsTwitter size="20px" />
            </Button>
            <Button variant={'ghost'}>
              <BsWhatsapp size="20px" />
            </Button>
            <Button variant={'ghost'}>
              <BsInstagram size="20px" />
            </Button>
          </HStack>
        </Stack>
        <Box>
          <Image src={davidfoto} width={{ base: '50', md: '100' }} />
        </Box>
      </Flex>
    </Box>
  )
}

export default Nosotros
