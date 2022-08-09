import {
  Heading,
  Box,
  Input,
  Text,
  FormControl,
  FormLabel,
  Switch,
  useColorModeValue,
} from '@chakra-ui/react'

const Filtro = ({ setTitle, setPriceMax, setPriceMin, setStock }) => {
  const handleSwitch = (e) => {
    e.preventDefault()
    if (e.target.checked) {
      setStock(`&filters[stock][$gt]=0`)
    } else {
      setStock('')
    }
  }

  return (
    <Box bg={useColorModeValue('#f4f3ef', '#262626')} w="auto">
      <Heading>Productos</Heading>
      <Input
        mt="30px"
        mr="5px "
        placeholder="Buscar..."
        onChange={(e) => setTitle(e.target.value)}
        bg={useColorModeValue('white', '#262626')}
      />
      <Text mt="30px">Filtrar por precio</Text>
      <Input
        placeholder="Precio min"
        w="35%"
        bg={useColorModeValue('white', '#262626')}
        me="5"
        type="text"
        onChange={(e) => setPriceMin(e.target.value)}
      />
      <Input
        placeholder="Precio max"
        w="35%"
        bg={useColorModeValue('white', '#262626')}
        type="text"
        onChange={(e) => setPriceMax(e.target.value)}
      />
      <FormControl alignItems="center" mt="30px">
        <FormLabel htmlFor="Unidades Disponibles">
          Unidades Disponibles
        </FormLabel>
        <Switch
          id="Unidades Disponibles"
          colorScheme="teal"
          onChange={handleSwitch}
        />
      </FormControl>
    </Box>
  )
}

export default Filtro
