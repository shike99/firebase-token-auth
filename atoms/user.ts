import { atom } from 'recoil'
import { User } from 'firebase/auth'

export const userState = atom<User | undefined>({
  key: 'user',
  default: undefined,
})
