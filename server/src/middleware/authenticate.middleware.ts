import {HttpException, HttpStatus, Injectable, NestMiddleware, NestModule } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
const jwt = require('jsonwebtoken');

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (token) {
      jwt.verify(token, "jwt_secret_gokwik", (err: any, decoded: any) => {
        if (!err) {
          req.body['_id'] = JSON.stringify((decoded._id)).split("\"")[1];
          next();
        }else throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);      
      });
    } else throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
}
