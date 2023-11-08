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
  image: string
}

export interface UserResponse extends BaseResponse<User[]> {
  data: User[]
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

export interface OrderResponse extends BaseResponse<Order[]> {
  data: Order[]
}

export interface Order {
  id: number
  created_at: string
  customer_id: number
  total_price: number
  users: User
  order_items: Book[]
}

export interface PaymentResponse extends BaseResponse<Payment[]> {
  data: Payment[]
}

export interface Payment {
  id: number
  created_at: string
  order_id: number
  payment_amount: number
  payment_date: string
  orders: Order
}
