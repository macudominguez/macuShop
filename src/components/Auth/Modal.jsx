import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react'
import { BiUser } from 'react-icons/bi'

import { useAuthModal } from '../../Hooks/useAuthModal'
import Login from './Login'
import Register from './Register'

const ModalForm = () => {
  const { authModal, onOpen, onClose } = useAuthModal()
  return (
    <>
      <Button variant={'ghost'} onClick={onOpen}>
        <BiUser />
      </Button>

      <Modal isOpen={authModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={useColorModeValue('white', '#262626')}>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Ingresar</Tab>
                <Tab>Registrate</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <Register />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalForm
