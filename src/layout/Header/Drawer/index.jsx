import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  Text,
  Button,
  useDisclosure,
  Heading,
} from '@chakra-ui/react'
import { BsCart } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { useCart } from '../../../Hooks/useCart'
import Cart from '../../../pages/Cart'

const Modal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { dataCart } = useCart()
  return (
    <>
      <Button variant="ghost" size="sm" onClick={onOpen}>
        <BsCart size="25" />({dataCart.length})
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading fontFamily="Raleway" fontSize="24px">
              Mi Carrito
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            {!!dataCart.length || (
              <DrawerBody align="center">
                <Text mb="16px" fontWeight="medium">
                  Tu carrito esta vacio.
                </Text>
                <Link to="/productos">
                  <Button w="45%" bg="#caa698" onClick={onClose}>
                    Ir a tienda
                  </Button>
                </Link>
              </DrawerBody>
            )}
            {!!dataCart.length && <Cart onClose={onClose} />}
          </DrawerBody>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Modal
