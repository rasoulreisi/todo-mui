import axios from 'axios'
import {toast} from "react-toastify";

const BASE_URL = 'http://localhost:3001/'
const TIMEOUT = 60000

axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = TIMEOUT

axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  console.log('request failed')
  return error
})

axios.interceptors.response.use(undefined, (error) => {
  console.log('response not ok')
  toast.error(error.message)
})

const responseBody = (response) => {
  return response
}

const errorBody = (error) => {
  return error
}

const request = {
  get: (url) => axios.get(url).then(responseBody).catch(errorBody),
  getByParams: (url, params) => axios.get(url, {params}).then(responseBody).catch(errorBody),
  post: (url, data) => axios.post(url, data).then(responseBody).catch(errorBody),
  patch: (url, data) => axios.patch(url, data).then(responseBody).catch(errorBody),
  delete: (url) => axios.delete(url).then(responseBody).catch(errorBody),
}

export default request

