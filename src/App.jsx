import { Box, useColorModeValue } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import Layout from './layout'
import Compra from './pages/Compra'
import Error from './pages/Error'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import Pedidos from './pages/Pedidos'
import Perfil from './pages/Perfil'
import Producto from './pages/Producto'
import Productos from './pages/Productos'
import ProtectedRoutes from './ProtectedRoutes'

function App() {
  return (
    <Box minH="100vh" bg={useColorModeValue('#f4f3ef', '#262626')}>
      <RecoilRoot>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/compra" element={<Compra />} />
            <Route element={<ProtectedRoutes />}>
              <Route path="perfil" element={<Perfil />} />
              <Route path="/pedidos" element={<Pedidos />} />
            </Route>
            <Route path="/*" element={<Error />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </Box>
  )
}

export default App
