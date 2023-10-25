import { BookResponse } from '@/types'
import { get } from './api'

const getBooks = async (): Promise<BookResponse> => {
  const response = await get('/books')
  return response.data
}

export { getBooks }
