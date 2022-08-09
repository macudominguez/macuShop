import axios from 'axios'
import { useRecoilValue, useSetRecoilState } from 'recoil'

import { userState } from '../Recoil'

const useUser = () => {
  const setUserState = useSetRecoilState(userState)
  const user = useRecoilValue(userState)

  const registrar = async ({ mail, password, nombre }) => {
    const { data } = await axios.post(
      'https://strapiecommerce-production-2d55.up.railway.app/api/auth/local/register',
      {
        username: nombre,
        email: mail,
        password,
      }
    )
    setUserState(data)
  }
  const loginUser = async ({ mail, password }) => {
    const { data } = await axios.post(
      'https://strapiecommerce-production-2d55.up.railway.app/api/auth/local',
      {
        identifier: mail,
        password,
      }
    )
    setUserState(data)
  }
  const logOut = () => setUserState(null)
  return { registrar, user, loginUser, logOut }
}

export { useUser }
