'use strict';
import express from 'express';
import OAuth from './oauth/server.js';
import {Request, Response} from './index.js';

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.post('/authorize', (req, res) =>
  OAuth.authorize(new Request(req), new Response(res), {
    authenticateHandler: {
      handle: (req, res) => {
        console.log('Getting user');
        return {
          id: 1,
          username: 'Test User'
        };
      }
    }}), (req, res) => res.end());

app.get('*', (req, res) => {
  res.send(`GET ${req.url}`);
});

app.listen(80);
