import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

import { useUser } from '../../Hooks/useUser'

const Perfil = () => {
  const { user } = useUser()
  return (
    <Box bg={useColorModeValue('#f4f3ef', '#262626')} w="100%" minH="83vh">
      <Heading fontFamily="Raleway" mt="20px" ml="20px">
        Mi Perfil
      </Heading>
      <Flex
        direction="column"
        maxW="300"
        margin="auto"
        borderRadius="10px"
        bg={useColorModeValue('white', '#111111')}
        mt="20px"
      >
        <Box m="20px">
          <Text fontWeight="extrabold" fontSize="22px">
            {user && user.user.username}
          </Text>
          <Text> {user && user.user.email}</Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default Perfil
