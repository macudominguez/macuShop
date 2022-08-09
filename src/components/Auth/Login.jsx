import { useState } from 'react'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { useUser } from '../../Hooks/useUser'

const Login = () => {
  const { loginUser } = useUser()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const toast = useToast()
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
  const iniciarSesion = async (data) => {
    try {
      await loginUser(data)
      toast({
        title: 'Bienvenido',
        description: data.mail,
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Los datos ingresados son incorrectos',
        description: data.mail,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit(iniciarSesion)}>
      <Flex direction="column" alignItems="center">
        <FormControl w="100%" isInvalid={!!errors.mail}>
          <FormLabel htmlFor="email" pt="5px">
            Email
          </FormLabel>
          <Input
            id="email"
            {...register('mail', {
              required: 'este campo es requerido',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\]\\.,;:\s@\\"]+\.)+[^<>()[\]\\.,;:\s@\\"]{2,})$/i,
                message: 'Ingrese un email correcto',
              },
            })}
          />
          {errors.mail && (
            <FormErrorMessage>{errors.mail?.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl w="100%" isInvalid={!!errors.password}>
          <FormLabel htmlFor="password" pt="10px">
            Contraseña
          </FormLabel>
          <InputGroup>
            <Input
              type={show ? 'text' : 'password'}
              {...register('password', {
                required: 'este campo es requerido',
                minLength: {
                  value: 3,
                  message: 'Mínimo 3 caracteres',
                },
                maxLength: {
                  value: 8,
                  message: 'Máximo 8 caracteres',
                },
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
          {errors.password && (
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          )}
        </FormControl>
        <Button
          type="submit"
          mt="35px"
          w="100%"
          bg="#caa698"
          justifyContent="center"
        >
          Login
        </Button>
      </Flex>
    </Box>
  )
}

export default Login
