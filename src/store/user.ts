import { defineStore } from 'pinia'
import { login } from '@/service/auth'
import { User } from '@/types'

interface State {
  user?: User
}

export const useAuthStore = defineStore('auth', {
  state: (): State => {
    return {
      user: undefined,
    }
  },
  actions: {
    async saveUser() {},
  },
  getters: {},
})
