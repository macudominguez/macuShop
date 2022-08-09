import { useRecoilValue, useSetRecoilState } from 'recoil'

import { authModalState } from '../Recoil'

const useAuthModal = () => {
  const setAuthModalState = useSetRecoilState(authModalState)
  const authModal = useRecoilValue(authModalState)
  const onOpen = () => {
    setAuthModalState(true)
  }
  const onClose = () => {
    setAuthModalState(false)
  }
  return { onOpen, onClose, authModal }
}

export { useAuthModal }
