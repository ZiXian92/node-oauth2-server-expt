'use strict';
import oauth2server from '../index.js';
import OAuthModel from './model.js';

const OAuth = new oauth2server({
  model: OAuthModel,
  grants: ['authorization_code', 'refresh_token'],
  debug: true
});

export default OAuth;
