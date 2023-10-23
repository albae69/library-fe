import { post } from './api'
import { LoginRequest, LoginResponse, RegisterRequest } from '@/types'

const login = async ({
  email,
  password,
}: LoginRequest): Promise<LoginResponse> => {
  const response = await post('auth/login', { email, password })
  return response.data
}

const register = async ({
  name,
  email,
  password,
}: RegisterRequest): Promise<any> => {
  const response = await post('auth/register', {
    name,
    email,
    password,
    isAdmin: false,
  })
  return response.data
}

export { login, register }
