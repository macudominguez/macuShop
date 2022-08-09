import {
  Button,
  Divider,
  IconButton,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { useUser } from '../../Hooks/useUser'

const Profile = () => {
  const { user, logOut } = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Popover isOpen={isOpen} onClose={onClose} placement="top-start">
        <PopoverTrigger>
          <IconButton
            variant="ghost"
            onClick={onOpen}
            colorScheme="#11b68a"
            fontSize="20"
            icon={<BiUser size="25" />}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverCloseButton />

          <PopoverBody fontSize="25px">
            <Text>{user && user.user.username} </Text>

            <Link to="/perfil" onClick={onClose}>
              <Text>Mis datos</Text>
            </Link>
            <Link to="/pedidos" onClick={onClose}>
              <Text>Mis pedidos</Text>
            </Link>
            <Divider />
            <Button onClick={() => logOut()}>
              <Text>Salir</Text>
            </Button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  )
}
export default Profile
