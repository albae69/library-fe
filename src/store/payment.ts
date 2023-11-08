import { defineStore } from 'pinia'
import { getPayment } from '@/service/payment'
import { Payment } from '@/types'

interface State {
  payment: Payment[]
  status: string
}

export const usePaymentStore = defineStore('payment', {
  state: (): State => {
    return {
      payment: [],
      status: '',
    }
  },
  actions: {
    async fetchAllPayment() {
      this.status = 'loading'
      try {
        const response = await getPayment()
        this.payment = response.data
        this.status = ''
        return response.data
      } catch (error) {
        this.status = 'error'
      }
    },
  },
  getters: {},
})
