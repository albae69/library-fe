import { get } from './api'

const getBooks = async () => {
  const response = await get('/books')
  return response.data
}

export { getBooks }
