export interface BaseResponse<T> {
  success: boolean
  message: string
  data: T
}

export interface BookResponse extends BaseResponse<Book[]> {
  data: Book[]
}

export interface Book {
  id: number
  created_at: string
  title: string
  author: string
  price: number
  stock: number
}

export interface UserResponse extends BaseResponse<User> {
  data: User
}

export interface User {
  id: number
  name: string
  email: string
  isAdmin: false
}

export interface LoginRequest {
  email: string
  password: string
}

export interface LoginResponse extends BaseResponse<Login> {
  data: Login
}

export interface Login {
  id: number
  created_at: string
  name: string
  email: string
  isAdmin: boolean
  balance: number
  token: string
}

export interface RegisterRequest {
  name: string
  email: string
  password: string
  isAdmin: boolean
}

export interface Register {}
