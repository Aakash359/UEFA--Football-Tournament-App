import axios from 'axios'
import config from '../config/config'
const AxiosInstance = axios.create({
    baseURL: config.apiUrl,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 15000,
})

// Add a request interceptor
AxiosInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
)

// Add a response interceptor
AxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.data) {
            return Promise.reject(error.response.data)
        }

        return Promise.reject(error)
    }
)

export default AxiosInstance
