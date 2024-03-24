// 腾讯云开发的一些API
import cloudbase from '@cloudbase/js-sdk';


// import { env } from './constant';

export const app = cloudbase.init({ env : "jimmyspace-7gm63k2kde7e8575" ,
    region: 'ap-guangzhou'
});

export const auth = app.auth({ persistence: 'local' });



async function login(){
  // 调用匿名登录接口
  await auth.anonymousAuthProvider().signIn();
  // 匿名登录成功后，登录状态isAnonymous字段值为true
  const loginState = await auth.getLoginState();
  console.log(loginState); // true
}


login();


export const db = app.database();

export const _ = db.command;
