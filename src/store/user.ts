import { defineStore } from 'pinia'
import { User } from '@/types'

interface State {
  user?: User
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      user: undefined,
    }
  },
  actions: {
    async saveUser(user: User) {
      this.user = user
    },
  },
  getters: {},
})
