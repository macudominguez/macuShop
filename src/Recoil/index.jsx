import { atom } from 'recoil'

const CartState = atom({
  key: 'cart',
  default: [],
})
export { CartState }

const userState = atom({
  key: 'user',
  default: null,
})
export { userState }

const authModalState = atom({
  key: 'authModalState',
  default: false,
})
export { authModalState }
