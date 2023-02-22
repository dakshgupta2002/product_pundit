import { Injectable } from '@nestjs/common';
import {  Model } from 'mongoose';
import { UserDocument } from './user.model'; 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}

  private generateJwt(_id: string) : string {
    const token = jwt.sign({ _id }, "jwt_secret_gokwik", { expiresIn: "24h" });
    return token;
  }
  async login(username: string, password: string): Promise<string> {
    const oldUser = await this.userModel.findOne({ username: username});
    if (oldUser){
      const verify = await bcrypt.compare(password, oldUser.password);
      if (verify) return this.generateJwt(oldUser.id);
      else return null;
    }else{
      const hashedPassword = bcrypt.hashSync(password, 10);
      const newUser = new this.userModel({username, password: hashedPassword});
      await newUser.save();
      return this.generateJwt(newUser.id);
    }
  }
}
