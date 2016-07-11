'use strict';

const OAuthModel = {
  getAccessToken: token => {
    console.log('getAccessToken');
    console.log(token);
    return {
      accessToken: token,
      expiresAt: new Date(2999, 12, 31, 23, 59, 59),
      authorizationCode: 'someauthcode',
      user: { id: 1, username: 'Test User' },
      refreshToken: 'abc',
      refreshTokenExpiresAt: new Date(2999, 12, 31, 23, 59, 59),
      client: { id: '123', secret: 'xyz', name: 'Test App' },
      redirectUri: 'http://google.com',
      scope: ['username']
    };
  },

  getRefreshToken: token => {
    console.log('getRefreshToken');
    console.log(token);
    return {
      accessToken: token,
      expiresAt: new Date(2999, 12, 31, 23, 59, 59),
      authorizationCode: 'someauthcode',
      user: { id: 1, username: 'Test User' },
      refreshToken: 'abc',
      refreshTokenExpiresAt: new Date(2999, 12, 31, 23, 59, 59),
      client: { id: '123', secret: 'xyz', name: 'Test App' },
      redirectUri: 'http://google.com',
      scope: ['username']
    };
  },

  revokeToken: token => {   // Note: this is actually refresh token
    console.log('revokeToken');
    console.log(token);
    return {
      accessToken: token,
      expiresAt: new Date(2999, 12, 31, 23, 59, 59),
      authorizationCode: 'someauthcode',
      user: { id: 1, username: 'Test User' },
      refreshToken: 'abc',
      refreshTokenExpiresAt: new Date(2999, 12, 31, 23, 59, 59),
      client: { id: '123', secret: 'xyz', name: 'Test App' },
      redirectUri: 'http://google.com',
      scope: ['username']
    };
  },

  saveToken: (tokenObj, client, user) => {
    console.log('saveToken');
    console.log(client);
    console.log(user);
    return tokenObj;
  },

  getClient: (clientId, clientSecret) => {
    console.log('getClient');
    console.log(clientId);
    console.log(clientSecret);
    // debugger;
    return {
      id: 'xyz',
      secret: 'himitsu',
      name: 'Test App',
      grants: ['authorization_code', 'refresh_token'],
      redirectUris: ['http://google.com'],
      scope: ['username']   // Needed?
    };
  },

  getAuthorizationCode: code => {
    console.log('getAuthorizationCode');
    console.log(code);
    return {
      authorizatinCode: code,
      expiresAt: new Date(2999, 12, 31, 23, 59, 59),
      client: { id: 'xyz' },
      redirectUri: 'http://google.com',
      scope: ['username']
    };
  },

  saveAuthorizationCode: (codeObj, client, user) => {
    console.log('saveAuthorizationCode');
    console.log(codeObj);
    console.log(client);
    console.log(user);
    return Promise.resolve(codeObj);
    // return {
    //   authorizationCode: code,
    //   expiresAt: new Date(2999, 12, 31, 23, 59, 59),
    //   client: { id: 'xyz' },
    //   redirectUri: 'http://google.com',
    //   scope: ['username']
    // };
  },

  revokeAuthorizationCode: code => {
    console.log('revokeAuthorizationCode');
    console.log(code);
    return {
      authorizatinCode: code,
      expiresAt: new Date(2999, 12, 31, 23, 59, 59),
      client: { id: 'xyz' },
      redirectUri: 'http://google.com',
      scope: ['username']
    };
  },

  validateScope: (user, client, scope) => {
    console.log('validateScope');
    console.log(user);
    console.log(client);
    console.log(scope);
    return true;
  },

  verifyScope: (accessToken, scope) => {
    console.log('verifyScope');
    console.log(sccessToken);
    console.log(scope);
    return true;
  }
};

export default OAuthModel;
