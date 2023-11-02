import { Book } from '@/types'
import { defineStore } from 'pinia'
import { getBooks } from '@/service/books'

interface State {
  books: Book[]
  status: string
}

export const useBooksStore = defineStore('books', {
  state: (): State => {
    return {
      books: [],
      status: '',
    }
  },
  actions: {
    async getAllBooks() {
      this.status = 'loading'
      try {
        const response = await getBooks()
        this.books = response.data
        this.status = ''
      } catch (error) {
        this.status = 'error'
        return error
      }
    },
  },
  getters: {},
})
