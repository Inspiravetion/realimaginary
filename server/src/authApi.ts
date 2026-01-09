import express from 'express';

export const AuthAPI = express();

AuthAPI.use((req, res, next) => {
  return res.end('AuthAPI Response');
});
