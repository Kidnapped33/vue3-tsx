import axios, { Axios, AxiosError } from "axios";

/**
 *  设置 Token
 */

export const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

/**
 *  获取 Token
 */

export const getToken = () => {
  return localStorage.getItem("token");
};

/**
 * 创建axios实例
 */

const service = axios.create({
  // baseURL: "https://some-domain.com/api/",
  // baseURL: "http://192.168.1.2:3000/api",
  // baseURL: "http://121.196.236.94:8080/api",
  baseURL: " https://mangosteen2.hunger-valley.com/api",
  // baseURL: "",
  timeout: 10000,
  //headers: {'X-Custom-Header': 'foobar'}
});

/**
 *  请求拦截器
 */
service.interceptors.request.use(
  function (config) {

    // 在发送请求之前做些什么
    // 1. 从 localStorage 中获取 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  function (error) {
    // 对请求错误做些什么 （ 常用的写这;业务错误写在页面 ）
    if (error.response) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 429) {
        alert("请求过于频繁，请稍后再试");
      }
    }

    throw error; // 抛出异常 throw error 和 return Promise.reject(error) 二选一
    // return Promise.reject(error);
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
    if (error.response?.status === 422) {
      // setToken("");
      // alert("请输入正确的用户名和密码");
      console.log("请输入正确的用户名和密码");
    } else if (error.response?.status === 401) {
      console.log("需要重新登录");
    } else if (error.response?.status === 500) {
      console.log("服务器错误");
    } else {
      console.log("响应拦截器" + error);
    }

    // throw new Error(error);
    return Promise.reject(error);
  }
);

export default service;
