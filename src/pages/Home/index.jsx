import { Spinner, Flex } from '@chakra-ui/react'

import Card from '../../Components/Card'
import CaptionCarousel from '../../components/Carousel'
import { useGet } from '../../Hooks/useGet'

const Home = () => {
  const { data, isloading } = useGet(`products?populate[0]=image`)
  return (
    <Flex w="100%" direction="column" minH="85vh">
      <CaptionCarousel />
      <Flex wrap="wrap" justify="center" gap="30px" m="10">
        {isloading ? (
          <Spinner />
        ) : (
          data &&
          data.data.map((result) => {
            return <Card key="card" result={result} />
          })
        )}
      </Flex>
    </Flex>
  )
}
export default Home
