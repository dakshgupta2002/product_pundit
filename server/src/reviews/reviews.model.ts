import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewsDocument = HydratedDocument<Reviews>;

@Schema()
export class Reviews {
  @Prop({
    required: true,
  })
  name: string;
}

export const ReviewsSchema = SchemaFactory.createForClass(Reviews);