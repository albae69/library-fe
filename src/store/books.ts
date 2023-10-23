import { Book } from '@/types'
import { defineStore } from 'pinia'
import { getBooks } from '@/service/books'

interface State {
  books: Book[]
}

export const useBooksStore = defineStore('books', {
  state: (): State => {
    return {
      books: [],
    }
  },
  actions: {
    async getAllBooks() {
      try {
        const response = await getBooks()
        this.books = response.data
      } catch (error) {
        return error
      }
    },
  },
  getters: {},
})
