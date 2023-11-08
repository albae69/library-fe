import { PaymentResponse } from '@/types'
import { get } from './api'

const getPayment = async (): Promise<PaymentResponse> => {
  const response = await get('/payment')
  return response.data
}

export { getPayment }
