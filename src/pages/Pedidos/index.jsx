import { useState, useEffect } from 'react'

import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  Flex,
  OrderedList,
  ListItem,
} from '@chakra-ui/react'
import axios from 'axios'

const Pedidos = () => {
  const [order, setOrder] = useState()
  const parseDateToString = (date) => {
    const fecha = new Date(date)
    const day = `0${fecha.getDate()}`.slice(-2)
    const month = `0${fecha.getMonth() + 1}`.slice(-2)
    return `${day}/${month}/${fecha.getFullYear()}`
  }
  useEffect(() => {
    const orders = async () => {
      const response = await axios.get(
        'https://strapiecommerce-production-2d55.up.railway.app/api/orders'
      )
      setOrder(response.data)
    }
    orders()
  }, [])

  return (
    <Box bg={useColorModeValue('#f4f3ef', '#262626')} w="100%" minH="83vh">
      <Heading fontFamily="Raleway" m="20px">
        Mis Pedidos
      </Heading>
      <Flex
        w="100%"
        // ml="20px"
        // mt="15px"
        direction="row"
        display={{ md: 'flex' }}
        // mx="20px"
        justify="space-evenly"
      >
        {order &&
          order.data.map((item) => {
            return (
              <Flex
                key={item.id}
                p="10px"
                fontSize={{ base: '12px', md: '15px', lg: '17px' }}
                direction="column"
                mt="30px"
                bg={useColorModeValue('white', '#111111')}
                rounded="lg"
                shadow="lg"
              >
                <Text fontWeight="extrabold">Pedido #{item.id}</Text>
                <Text fontWeight="extrabold">Productos:</Text>
                <OrderedList>
                  {item &&
                    item.attributes.Item.map((titulo) => {
                      return <ListItem key={titulo.id}>{titulo.title}</ListItem>
                    })}
                </OrderedList>
                <Text fontWeight="extrabold">Fecha de compra:</Text>
                <Text>{parseDateToString(item.attributes.createdAt)}</Text>
              </Flex>
            )
          })}
      </Flex>
    </Box>
  )
}
export default Pedidos
