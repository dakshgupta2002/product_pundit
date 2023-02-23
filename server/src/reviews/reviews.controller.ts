import { Controller, Post, Get, Body, Query } from "@nestjs/common";
import { Reviews } from "./reviews.model";
import { ReviewsService } from "./reviews.service";

@Controller()
export class ReviewsController {
    constructor(private reviewsService: ReviewsService) {}

    @Get('reviews')
    getProducts(@Query('query') query: string) {
        return this.reviewsService.getProducts(query); 
    }

    @Post('reviews')
    async writeReview( //auth middleware is configured
    ) {
        return this.reviewsService.writeReview();   
    }
}