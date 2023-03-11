import axios from "axios";


/**
 *  设置 Token
 */

export const setToken = (token:string) =>{
  localStorage.setItem('token',token)
}

/**
 *  获取 Token
 */

export const getToken = () =>{
  return localStorage.getItem('token')
} 

/**
 * 创建axios实例
 */

const service = axios.create({
  // baseURL: "https://some-domain.com/api/",
  // baseURL: "http://192.168.1.2:3000/api",
  baseURL: "http://121.196.236.94:8080/api",
  // baseURL: "",
  timeout: 1000,
  //headers: {'X-Custom-Header': 'foobar'}
});

/**
 *  请求拦截器
 */
service.interceptors.request.use(
  function (config) {

  // 在发送请求之前做些什么

   // 1. 从 localStorage 中获取 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/**
 *  响应拦截器
 */
service.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error).catch((error) => {
      if (error.response?.status === 422) {
        // setToken("");
        alert("请输入正确的用户名和密码");
      }else{}
    });
  }
);

export default service;
