import React from "react";
import { useParams } from "react-router-dom";
import "react-vis/dist/style.css";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LabelSeries,
  VerticalBarSeries,
} from "react-vis";
import Recommendations from "../components/Recommendations";

export default function Product() {
  const { id } = useParams();
  const FilledStar = () => {
    return (
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>First star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  };
  const BlankStar = () => {
    return (
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-300 dark:text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Fifth star</title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
      </svg>
    );
  };
  const data = [
    { y: 3, x: "Positive" },
    { y: 5, x: "Neutral" },
    { y: 4, x: "Negative" },
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <h1 className="text-black font-bold">{"Name of the Product"}</h1>
      <div className="antialiased font-sans p-6 w-4/5">
        <div className="flex flex-wrap mx-auto">
          <div className="p-4 w-full">
            <a
              href={`/product/${id}`}
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-48 overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                  alt=""
                />
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-lg">
                  Classified as {"Positive"}
                </span>
                <p className="text-sm">{"description"}</p>
                <div className="mt-3 flex items-center">
                  <span className="font-bold text-xl">{"price"}</span>&nbsp;
                  <span className="text-sm font-semibold">Rs.</span>
                </div>
              </div>
              <div className="p-4 flex items-center text-sm text-gray-600">
                {[...Array(Math.floor(4))].map((e, i) => {
                  return <FilledStar />;
                })}
                {[...Array(5 - Math.floor(4))].map((e, i) => {
                  return <BlankStar />;
                })}
                <span className="ml-2">{124} Reviews</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      <h1 className="text-black font-bold">
        Sentiment scores calculated from consolidated reviews
      </h1>
      <XYPlot
        animation
        xType="ordinal"
        width={600}
        height={400}
        xDistance={100}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <VerticalBarSeries
          barWidth={0.3}
          className="vertical-bar-series-example"
          data={data}
        />
      </XYPlot>

      <h1 className="text-black font-bold">
        Popular reviews scraped for GoKwik
      </h1>
      <div></div>

      <br/><br/><br/>

      <h1 className="text-black font-bold">
        Similar products with better Sentiment
      </h1>
      <Recommendations/>
    </div>
  );
}
