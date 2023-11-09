import axios, {
  AxiosInstance, 
  AxiosRequestConfig, 
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL + '/api';
axios.defaults.headers.head['Content-Type'] = 'application/json;chartset=utf-8';
axios.defaults.withCredentials = true;
export interface IResponse<T = any> {
  code: number;
  message: string;
  data: T
}

const axiosInstance: AxiosInstance = axios.create({
  timeout: 10000,
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 可以添加请求头、认证信息等
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (res: AxiosResponse) => {
    const { data } = res;
    if (data.code === 500) {
      return Promise.reject(data);
    }
    return data.data;
  },
  (err) => {
    const {
      response: { status }
    } = err;
    if (status === 401 || status === 403) {
      // store.dispatch(removeUserInfo(''));
      // window.location.href = '/login';
    }
    return Promise.reject(err.response.data);
  }
);

const http = <T>(configs: AxiosRequestConfig): Promise<IResponse<T>> => {
  const { method } = configs;
  if (method === 'get') {
    configs.params = configs.data;
    delete configs.data;
  }

  return axiosInstance.request(configs);
};

export default http;
