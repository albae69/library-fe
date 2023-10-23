import axios from 'axios'

let api = `${import.meta.env.VITE_API_URL}/api/`

const instance = axios.create({
  baseURL: api,
  timeout: 3000,
})

// instance interceptors request
instance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem('token')
  if (token != null) {
    req.headers.Authorization = `Bearer ${token}`
  }
  return req
})

// instance interceptor response
instance.interceptors.response.use(
  (response) => {
    // console.log('intercept response data', response.data);
    return Promise.resolve(response)
  },
  (error) => {
    return Promise.reject(error)
  }
)

const get = (url: string, params?: any) => {
  return instance.get(url, { params })
}

const post = (url: string, data: any, config?: any) => {
  return instance.post(url, data, config)
}

const postFormData = (url: string, data: any) => {
  // loop through data and convert to form data
  const formData = new FormData()
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })
  return instance.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

const deleteApi = (url: string) => {
  return instance.delete(url)
}

export { get, post, postFormData, deleteApi }
