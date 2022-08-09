import { Box, Flex, Spinner } from '@chakra-ui/react'

import Card from '../../Components/Card'
import { useGet } from '../../Hooks/useGet'
import Filtro from './Filtro'
import Paginado from './Paginado'

const Productos = () => {
  const {
    data,
    isloading,
    page,
    setPage,
    meta,
    setTitle,
    setPriceMax,
    setPriceMin,
    setStock,
  } = useGet(`products?populate[0]=image`)

  return (
    <Flex w="100%" display={{ md: 'flex' }} minH="85vh">
      <Box gap="30" m="5">
        <Filtro
          setTitle={setTitle}
          setPriceMax={setPriceMax}
          setPriceMin={setPriceMin}
          setStock={setStock}
        />
      </Box>
      <Flex direction="column" w="100%" my="50px">
        <Flex direction="row" m="10" justify="center" wrap="wrap" gap="30">
          {isloading ? (
            <Spinner />
          ) : (
            data &&
            [...data.data].map((result) => {
              return <Card key="card" result={result} />
            })
          )}
        </Flex>
        <Paginado page={page} setPage={setPage} meta={meta} />
      </Flex>
    </Flex>
  )
}
export default Productos
