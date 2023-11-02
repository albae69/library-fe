import { defineStore } from 'pinia'
import { User } from '@/types'

interface State {
  user: User | null
}

export const useUserStore = defineStore('user', {
  state: (): State => {
    return {
      user: null,
    }
  },
  actions: {
    async saveUser(user: User) {
      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
  },
  getters: {},
})
