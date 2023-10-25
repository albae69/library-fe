import { UserResponse } from '@/types'
import { get } from './api'

const getUser = async (): Promise<UserResponse> => {
  const response = await get('/user')
  return response.data
}

export { getUser }
