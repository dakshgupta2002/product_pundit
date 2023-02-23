import { Injectable } from '@nestjs/common';
import {  Model } from 'mongoose';
import { Reviews, ReviewsDocument } from './reviews.model'; 
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ReviewsService {
  constructor(@InjectModel('Reviews') private reviewsModel: Model<ReviewsDocument>) {}

  async getProducts(query: string): Promise<Reviews[]> {
    const products = await this.reviewsModel.find({ name: query});
    return products;
  }

  async writeReview() {
    
  }
}
