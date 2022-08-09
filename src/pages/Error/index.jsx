import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import error404 from '../../assets/error404.gif'

const Error = () => {
  return (
    <Flex w="100%">
      <Flex align="center" margin="auto" gap="100px" minH="85vh">
        <Box>
          <Image
            my="80px"
            src={error404}
            alt="error404"
            boxSize="600px"
            objectFit="contain"
          />
        </Box>
        <Flex alignItems="center" direction="column">
          <Text fontSize="40px"> OOPS! ERROR 404</Text>
          <Text fontSize="20px">La página que estás buscando no existe.</Text>
          <Link to="/">
            <Button fontSize="20px" color="black" bg="#caa698" mt="20px">
              Back Home
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
export default Error
