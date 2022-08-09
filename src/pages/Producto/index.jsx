import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

import { useCart } from '../../Hooks/useCart'
import { useGet } from '../../Hooks/useGet'

const Producto = () => {
  const { addProduct } = useCart()
  const { id } = useParams()

  const { data } = useGet(`products/${id}?populate[0]=image`)
  console.log(data)
  if (!data) return null

  return (
    <Flex
      direction="row"
      justifyContent="center"
      w="80%"
      m="auto"
      minH="85vh"
      bg={useColorModeValue('#f4f3ef', '#262626')}
      pt="80px"
      display={{ md: 'flex' }}
    >
      <Box>
        <Image
          src={data.data.attributes.image.data.attributes.url}
          w="80%"
          width={{ base: '35%', md: '70%', lg: '80%' }}
          pl={{ base: '20px' }}
          mb={{ base: '10px' }}
        />
      </Box>
      <Flex
        direction="column"
        wrap="wrap"
        ml="25px"
        fontSize={{ base: '12px', md: '15px', lg: '17px' }}
      >
        <Heading fontSize={{ base: '12px', md: '15px', lg: '25px' }}>
          {data.data.attributes.title}
        </Heading>
        <Text fontSize={{ base: '12px', md: '15px', lg: '17px' }}>
          $ {data.data.attributes.price}
        </Text>
        <Text fontSize={{ base: '12px', md: '15px', lg: '17px' }}>
          {data.data.attributes.description}
        </Text>
        <Button
          w="300px"
          bg="#caa698"
          mt="50px"
          onClick={() => addProduct(data.data)}
          width={{ base: '40%', lg: '25%' }}
        >
          <Text fontSize={{ base: '12px', md: '15px', lg: '17px' }}>
            Agregar al carrito
          </Text>
        </Button>
      </Flex>
    </Flex>
  )
}

export default Producto
