import {
  Text,
  Image,
  Button,
  Flex,
  Heading,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  IconButton,
  Stack,
} from '@chakra-ui/react'
import { ImBin } from 'react-icons/im'
import { Link } from 'react-router-dom'

import { useCart } from '../../Hooks/useCart'

const Cart = ({ onClose }) => {
  const {
    deleteAllProducts,
    dataCart,
    addProduct,
    deleteProduct,
    total,
    lessProduct,
  } = useCart()
  if (!dataCart.length) return null
  return (
    <>
      {dataCart.map((item) => {
        return (
          <>
            <Flex justify="space-between">
              <Heading size="sm" mt="10px">
                {item.title}
              </Heading>
              <IconButton
                variant="ghost"
                colorScheme="red"
                onClick={() => deleteProduct(item.id)}
                icon={<ImBin />}
                size="20px"
                mr="3px"
              />
            </Flex>
            <Flex gap="30">
              <Image src={item.image.data.attributes.url} w="80px" />
              <Box mt="20px">
                <Heading size="xs"> ${item.price} </Heading>
                <Text>Cantidad: </Text>
              </Box>
              <Stack shouldWrapChildren direction="row">
                <NumberInput
                  size="xs"
                  defaultValue={item.cant}
                  min={1}
                  max={item.stock}
                  w="60px"
                  mt="20px"
                  bg="white"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper onClick={() => addProduct(item)} />
                    <NumberDecrementStepper onClick={() => lessProduct(item)} />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            </Flex>
          </>
        )
      })}
      <Flex direction="column" w="100%" mt="50px">
        <Button
          w="100%"
          colorScheme="red"
          variant="outline"
          mb="5"
          onClick={deleteAllProducts}
        >
          <Text p="4"> Vaciar carrito </Text> <ImBin />
        </Button>
        <Heading size="md"> Total:${total(dataCart)} </Heading>

        <Link to="/compra">
          <Button bg="#caa698" mt="20px" onClick={onClose} w="100%">
            Continuar Compra
          </Button>
        </Link>
      </Flex>
    </>
  )
}

export default Cart
