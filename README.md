# OAuth2 Login Demo

Angular Demo Project for OAuth2 login using Okta server

# Okta Server
https://dev-991706.okta.com/

# Add Okta Auth Angular SDK
 > npm install @okta/okta-angular


# okta-angular version used
@okta/okta-angular": "3.0.1"

# How to:
 * Create an Okta account
 * Add your application to your Okta Console
 * in your environment.ts/environment.prod.ts add
 
 ```typescript
 oktaConfig : {
   issuer: 'https://*{serverAddress}/oauth2/default',
   redirectUri: 'http://*{your app index path}/implicit/callback',
   clientId: '*{client Id taken from the App registered in Okta console}',
   pkce: true
 }
 ``` 
 * In your app.module.ts
 ```typescript 
  imports: [
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: environment.oktaConfig },
  ],
  ```
  # Usage
  * Use OktaAuthService and OktaAuthGuard directly
  * Create your own authService and authGuard as wrapper to OktaAuthService
    * see:
    [authGuard](https://github.com/angelitoTalens/angular-OAuth2-Okta/blob/master/src/app/auth.guard.ts) and
    [authService](https://github.com/angelitoTalens/angular-OAuth2-Okta/blob/master/src/app/auth.service.ts)
