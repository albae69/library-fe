import { defineStore } from 'pinia'
import { User } from '@/types'
import { getUser } from '@/service/user'

interface State {
  user: User[]
  status: string
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      user: [],
      status: '',
    }
  },
  actions: {
    async fetchUser() {
      this.status = 'loading'
      try {
        const response = await getUser()
        if (response.success) {
          this.status = ''
          this.user = response.data
        }
        return response.data
      } catch (error) {
        console.log('error while getUser', error)
        this.status = 'error'
      }
    },
  },
  getters: {},
})
