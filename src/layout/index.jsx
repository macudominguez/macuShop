import { Box } from '@chakra-ui/react'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children }) => {
  return (
    <Box fontFamily="Raleway" w="100%">
      <Header />
      <Main> {children} </Main>
      <Footer />
    </Box>
  )
}

export default Layout
