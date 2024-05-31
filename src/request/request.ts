import type { AxiosError, AxiosRequestConfig } from 'axios'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://xiaofeishu.eyunnet.com/',
})

instance.interceptors.response.use(
  (data) => {
    if (data.data.data) {
      return data.data.data
    } else {
      return data.data
    }
  },
  (error: AxiosError) => {
    throw error
  },
)

export function request<T = any>(config: AxiosRequestConfig) {
  return instance<T>({
    method: 'GET',
    ...config,
    headers: {
      ...config.headers,
    },
  }) as Promise<T>
}
