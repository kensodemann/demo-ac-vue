import { IonicAuth } from '@ionic-enterprise/auth';

// This causes a "TypeError: Class extends value undefined is not a constructor or null"
// error in the test
export class Auth extends IonicAuth {
  constructor() {
    super({
      authConfig: 'azure',
      clientID: 'ed8cb65d-7bb2-4107-bc36-557fb680b994',
      discoveryUrl:
        'https://dtjacdemo.b2clogin.com/dtjacdemo.onmicrosoft.com/v2.0/.well-known/openid-configuration?p=B2C_1_acdemo2',
      audience: '',
      iosWebView: 'private',
      logLevel: 'DEBUG',
      scope:
        'openid offline_access email profile https://dtjacdemo.onmicrosoft.com/ed8cb65d-7bb2-4107-bc36-557fb680b994/demo.read',
      platform: 'web',
      redirectUri: 'http://localhost:8100',
      logoutUrl: 'http://localhost:8100',
    });
  }
}

// Comment out the above, and uncomment this and the tests work just fine...
// export class Auth {
//   constructor() {}
// }

export const auth = new Auth();
