import { Flex, IconButton } from '@chakra-ui/react'
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs'

const Paginado = ({ setPage, page, meta }) => {
  return (
    <Flex justify="center" m="20px">
      <IconButton
        bg="#caa698"
        aria-label="Search database"
        icon={<BsFillArrowLeftSquareFill />}
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        m="5"
        color="white"
      />
      <IconButton
        m="5"
        bg="#caa698"
        aria-label="Search database"
        icon={<BsFillArrowRightSquareFill />}
        onClick={() => setPage(page + 1)}
        disabled={page === meta?.pageCount}
        color="white"
      />
    </Flex>
  )
}

export default Paginado
