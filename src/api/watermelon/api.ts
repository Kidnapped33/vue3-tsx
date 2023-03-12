import service from "../index";

// 所有的接口都在这里

/**
 *   登录
 */
interface LoginData {
  email: string;
  code: string;
}

export const emailSignIn = async (data: LoginData) => {
  return await service({
    url: "/v1/session",
    method: "post",
    data,
  });
};

/** 写在类里的意义在于，我们可能有 2 个一样的接口，但是对后端来说是在不一样的list里，这样函数名就只能用 2 个不一样的函数 */
// class Auth {
//   /**  写 static 变为公开的，这样才能使用 Auth.emailSignIn ，否则只能使用 new Auth().emailSignIn */
//   static async emailSignIn(data: LoginData) {
//     return await service({
//       url: "/v1/auth/emailSignIn",
//       method: "post",
//     });
//   }
// }

/**
 * 获取用户信息
 */





/**
 * 获取标签列表
 */

interface TagList {
  //页码
  page: number;
  //类型
  kind?: string;
}

export const getTags = async (data: TagList) => {
  return await service({
    url: "/v1/tags",
    method: "get",
    data,
  });
};

/**
 *  创建标签
 */
interface Tag {
  // 名称
  name: string;
  // 符号
  sign: string;
  // 类型
  kind: string;
}
export const createTag = async (data: Tag) => {
  return await service({
    url: "/v1/tags",
    method: "post",
    data,
  });
};
