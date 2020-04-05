export const environment = {
  production: true,

  oktaConfig : {
    issuer: 'https://dev-991706.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback',
    clientId: '0oa2thi3ffCuAbBlS4x6',
    pkce: true
  }
};
