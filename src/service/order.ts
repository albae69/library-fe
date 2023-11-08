import { OrderResponse } from '@/types'
import { get } from './api'

const getOrder = async (): Promise<OrderResponse> => {
  const response = await get('/orders')
  return response.data
}

export { getOrder }
