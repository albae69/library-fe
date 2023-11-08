import { defineStore } from 'pinia'
import { getOrder } from '@/service/order'
import { Order } from '@/types'

interface State {
  orders: Order[]
  status: string
}

export const useOrderStore = defineStore('orders', {
  state: (): State => {
    return {
      orders: [],
      status: '',
    }
  },
  actions: {
    async fetchAllOrder() {
      this.status = 'loading'
      try {
        const response = await getOrder()
        this.orders = response.data
        this.status = ''
        return response.data
      } catch (error) {
        this.status = 'error'
      }
    },
  },
  getters: {},
})
