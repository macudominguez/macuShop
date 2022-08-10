import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  Button,
  useColorMode,
  Box,
  useColorModeValue,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import Logo from '../../assets/macushop4.jpg'
import ModalForm from '../../components/Auth/Modal'
import Profile from '../../components/Auth/Profile'
import { useUser } from '../../Hooks/useUser'
import Modal from './Drawer'

const Header = () => {
  const { user } = useUser()
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box bg={useColorModeValue('#8b9a96', '#262626')}>
      <Flex
        as="HStack"
        // p="20px"
        bg={useColorModeValue('#8b9a96', '#262626')}
        justifyContent="space-between"
        alignItems="center"
        // position="fixed"
        // zIndex="2"
        w="100%"
        minH="10vh"
        display={{ md: 'flex' }}
      >
        <Flex
          fontSize="xl"
          fontWeight="bold"
          alignItems="flex-end"
          display={{ md: 'flex' }}
        >
          <Link to="/">
            <Image
              src={Logo}
              alt="logo macushop"
              boxSize={{ base: '30%', md: '75%' }}
              ml="20px"
            />
          </Link>
        </Flex>
        <Flex direction="row" alignItems="flex-end" gap="30px">
          <Box display={{ base: 'none', md: 'flex' }}>
            <Link to="/productos">
              <Text mr="15px">Tienda</Text>
            </Link>
            <Link to="/nosotros">
              <Text>Nosotros</Text>
            </Link>
          </Box>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  variant="ghost"
                  as={Button}
                  display={{ md: 'none' }}
                  colorScheme="#11b68a"
                  fontSize="20"
                >
                  {isOpen ? (
                    <CloseIcon fontSize="25" />
                  ) : (
                    <HamburgerIcon fontSize="25" />
                  )}
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link to="/productos">
                      <Text fontSize="sm" px="2">
                        Tienda
                      </Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/nosotros">
                      <Text fontSize="sm" px="2">
                        Nosotros
                      </Text>
                    </Link>
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          <Text> | </Text>
          <Box display={{ base: 'flex' }}>
            <Button variant={'ghost'} onClick={toggleColorMode}>
              {colorMode === 'light' ? <BsFillMoonStarsFill /> : <BsSun />}
            </Button>
            <Modal />
            {user ? <Profile /> : <ModalForm />}
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header
