import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Thead,
  Tr,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { ImBin } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

import { useAuthModal } from '../../Hooks/useAuthModal'
import { useCart } from '../../Hooks/useCart'
import { useUser } from '../../Hooks/useUser'

const Compra = () => {
  const {
    dataCart,
    addProduct,
    deleteProduct,
    total,
    lessProduct,
    deleteAllProducts,
  } = useCart()
  const { user } = useUser()
  const toast = useToast()
  const { onOpen } = useAuthModal()
  const navigate = useNavigate()
  const finalizarCompra = async () => {
    if (!user) {
      return onOpen()
    }
    try {
      const { data } = await axios.post(
        `https://strapiecommerce-production-2d55.up.railway.app/api/orders`,
        {
          data: {
            Item: dataCart,
            users_permissions_users: user.user.id,
          },
        },
        {
          headers: {
            Accept: '*/*',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${user.jwt}`,
          },
        }
      )
      deleteAllProducts(data)
      navigate('../pedidos', { replace: true })
      toast({
        title: 'Compra realizada con exito',
        description: user.name,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Los datos ingresados son incorrectos',
        description: user.mail,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex direction="column" w="100%" gap="20" minH="85vh">
      <Heading fontFamily="Raleway" textAlign="center" mt="10">
        Finalizar compra
      </Heading>
      <Flex justify="space-evenly" display={{ md: 'flex' }}>
        <Box mx="10">
          {dataCart.map((item) => {
            return (
              <>
                <Flex justify="space-between" my="15">
                  <Heading size="sm" fontFamily="Raleway">
                    {item.title}
                  </Heading>

                  <IconButton
                    variant="ghost"
                    colorScheme="red"
                    onClick={() => deleteProduct(item.id)}
                    icon={<ImBin />}
                    size="20px"
                  />
                </Flex>
                <Flex>
                  <Image src={item.image.data.attributes.url} w="150px" />
                  <Box m="20px">
                    <Heading size="md" fontFamily="Raleway">
                      ${item.price}
                    </Heading>

                    <Text size="xl" mr="3" pt="2" fontFamily="Raleway">
                      Cantidad:
                    </Text>
                    <NumberInput
                      defaultValue={item.cant}
                      min={1}
                      max={item.stock}
                      w="45%"
                      bg="white"
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper
                          onClick={() => addProduct(item)}
                        />
                        <NumberDecrementStepper
                          onClick={() => lessProduct(item)}
                        />
                      </NumberInputStepper>
                    </NumberInput>
                  </Box>
                </Flex>
              </>
            )
          })}
        </Box>
        <Box>
          <TableContainer>
            <Table variant="simple">
              <Thead />
              <Tbody>
                <Tr>
                  <Td>Envio</Td>
                  <Td>No contamos con envios</Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>
                    <Heading size="xl"> ${total(dataCart)}</Heading>
                  </Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Button
                  fontSize="20px"
                  my="10"
                  onClick={finalizarCompra}
                  bg="#caa698"
                  ml="30px"
                >
                  Finalizar compra
                </Button>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </Flex>
  )
}
export default Compra
