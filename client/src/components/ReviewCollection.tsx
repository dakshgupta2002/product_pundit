import { faker } from "@faker-js/faker";
import { ReviewsI } from "../utils/types";
import { BlockQuote } from "./BlockQuote";

export const ReviewCollection = ({ reviews }: { reviews: ReviewsI }) => {
  return (
    <section className="bg-gray-100 w-full">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="items-end justify-between sm:flex">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-slate-800">
              Read trusted reviews from our customers
            </h2>

            <p className="mt-8 max-w-lg text-gray-500">
              {faker.lorem.paragraph(2)}
            </p>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex shrink-0 items-center gap-2 rounded-full border border-pink-600 px-5 py-3 font-medium text-pink-600 hover:bg-pink-600 hover:text-white sm:mt-0 lg:mt-8"
          >
            Read all reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
          {reviews.items.map((review) => {
            return (
              <BlockQuote text={review.text} sentiment={review.sentiment} />
            );
          })}
        </div>
      </div>
    </section>
  );
};
