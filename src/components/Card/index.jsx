import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import { Link, Link as ReactLink } from 'react-router-dom'

const Card = ({ result }) => {
  return (
    <Box
      bg={useColorModeValue('white', '#262626')}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      w="100%"
      maxW="300px"
      h="sm"
      p={2}
    >
      <Box h="50%">
        <Link as={ReactLink} to={`/producto/${result.id}`}>
          <Image
            src={result.attributes.image.data.attributes.url}
            alt={`Picture of ${result.title}`}
            roundedTop="lg"
            margin="auto"
            height="full"
            boxSize="250px"
          />
        </Link>
      </Box>
      <Box p="6">
        <Flex mt="20" justifyContent="center" alignContent="center">
          <Box
            fontSize="lg"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            alignContent="center"
          >
            {result.attributes.title}
          </Box>
        </Flex>
        <Flex justifyContent="center" alignContent="center">
          <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
            <Box as="span" color={'gray.600'} fontSize="lg">
              $
            </Box>
            {result.attributes.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Card
