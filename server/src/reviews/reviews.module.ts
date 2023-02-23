import { Module } from "@nestjs/common";
import { ReviewsController } from "./reviews.controller";
import { ReviewsService } from "./reviews.service";
import { Reviews, ReviewsSchema } from "./reviews.model";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Reviews', schema: ReviewsSchema}])],
    controllers: [ReviewsController],
    providers: [ReviewsService]
})
export class ReviewsModule {}