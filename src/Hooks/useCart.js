import { useRecoilValue, useSetRecoilState } from 'recoil'

import { CartState } from '../Recoil'

const useCart = () => {
  const setCartState = useSetRecoilState(CartState)
  const dataCart = useRecoilValue(CartState)

  const addProduct = (product) => {
    setCartState((cart) => {
      const hasProduct = cart.some((pr) => pr.id === product.id)
      if (hasProduct) {
        return cart.map((pr) => {
          if (pr.id === product.id) {
            return { ...pr, cant: pr.cant + 1 }
          }
          return pr
        })
      } else {
        return [...cart, { ...product.attributes, cant: 1, id: product.id }]
      }
    })
  }

  const deleteAllProducts = () => setCartState([])

  const deleteProduct = (id) => {
    setCartState((cart) => cart.filter((product) => id !== product.id))
  }

  const total = (pr) => {
    let sumaPrecio = 0
    for (const product of pr) {
      sumaPrecio += product.price * product.cant
    }
    return sumaPrecio
  }

  const lessProduct = (product) => {
    setCartState((cart) => {
      const hasProduct = cart.some((pr) => pr.id === product.id)
      if (hasProduct) {
        return cart.map((pr) => {
          if (pr.id === product.id) {
            return { ...pr, cant: pr.cant - 1 }
          }
          return pr
        })
      }
    })
  }

  return {
    dataCart,
    addProduct,
    deleteAllProducts,
    deleteProduct,
    total,
    lessProduct,
  }
}

export { useCart }
