import { NameType } from './types'

// 外部関数
export const formatName = (user: NameType) => {
  return user.firstName + ' ' + user.lastName
}
