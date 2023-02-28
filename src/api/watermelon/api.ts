import service from "../index";

// 所有的接口都在这里

export enum IdentityType {
  邮箱 = "邮箱",
  微信 = "微信",
}

interface LoginData {
  /** 登录类型：邮箱 / 微信 */
  identity_type: IdentityType;
  
  identifier: string;
  //
  credential: string;
}

export const emailSignIn = async (data: LoginData) => {
  return await service({
    url: "/v1/auth/emailSignIn",
    method: "post",
    data,
  });
};

   /** 写在类里的意义在于，我们可能有 2 个一样的接口，但是对后端来说是在不一样的list里，这样函数名就只能用 2 个不一样的函数 */
class Auth {
  /**  写 static 变为公开的，这样才能使用 Auth.emailSignIn ，否则只能使用 new Auth().emailSignIn */
  static async emailSignIn(data: LoginData) {
    return await service({
      url: "/v1/auth/emailSignIn",
      method: "post",
    });
  }
}