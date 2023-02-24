import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  HorizontalGridLines,
  VerticalBarSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from "react-vis";
import "react-vis/dist/style.css";
import Recommendations from "../components/Recommendations";
import { pb } from "../utils/pocketbase";
import { ProductItem, ReviewsI } from "../utils/types";

const fetchReviews = async (args: {
  queryKey: (string | undefined)[];
}): Promise<ReviewsI> => {
  return await pb.collection("reviews").getList(1, 6, {
    filter: `product_id="${args.queryKey[1]!}"`,
  });
};

const getProduct = async (args: {
  queryKey: (string | undefined)[];
}): Promise<ProductItem> => {
  return await pb.collection("products").getOne(args.queryKey[1]!);
};

export default function Product() {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["product", id], getProduct);

  const { data: reviews, isLoading: reviewLoading } = useQuery(
    ["review", id],
    fetchReviews
  );

  const chartData = [
    { y: data?.positive_count, x: "Positive" },
    { y: data?.neutral_count, x: "Neutral" },
    { y: data?.negative_count, x: "Negative" },
  ];

  if (isLoading || reviewLoading) {
    return <p>Loading........</p>;
  }

  return (
    <div className="bg-white flex flex-col justify-center items-center pt-10">
      <h1 className="text-black font-bold">{data?.name}</h1>

      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <img
                alt="Les Paul"
                src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="aspect-square w-full rounded-xl object-cover"
              />

              <div className="grid grid-cols-2 gap-4 lg:mt-4">
                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="aspect-square w-full rounded-xl object-cover"
                />

                <img
                  alt="Les Paul"
                  src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="sticky top-0">
              <strong className="rounded-full border border-blue-600 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
              </strong>

              <div className="mt-8 flex justify-between text-black">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    Fun Product That Does Something Cool
                  </h1>

                  <p className="text-sm">Highest Rated Product</p>

                  <div className="-ml-0.5 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">$119.99</p>
              </div>

              <form className="mt-8 text-black">
                <fieldset>
                  <legend className="mb-1 text-sm font-medium">Color</legend>

                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="color_tt" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_tt"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Texas Tea
                      </span>
                    </label>

                    <label htmlFor="color_fr" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_fr"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Fiesta Red
                      </span>
                    </label>

                    <label htmlFor="color_cb" className="cursor-pointer">
                      <input
                        type="radio"
                        name="color"
                        id="color_cb"
                        className="peer sr-only"
                      />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        Cobalt Blue
                      </span>
                    </label>
                  </div>
                </fieldset>

                <fieldset className="mt-4">
                  <legend className="mb-1 text-sm font-medium">Variant</legend>

                  <div className="flex flex-wrap gap-1">
                    <label htmlFor="size_xs" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_xs"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-12 w-12 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        PRO
                      </span>
                    </label>

                    <label htmlFor="size_s" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_s"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-12 w-12 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        ULTRA
                      </span>
                    </label>

                    <label htmlFor="size_m" className="cursor-pointer">
                      <input
                        type="radio"
                        name="size"
                        id="size_m"
                        className="peer sr-only"
                      />

                      <span className="group inline-flex h-12 w-12 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        MAX
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div className="mt-8 flex gap-4">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
                      <thead>
                        <tr>
                          <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Company
                          </th>
                          <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Price
                          </th>
                          <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Color
                          </th>
                          <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Availability
                          </th>
                          <th className="px-4 py-2"></th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Flipkart
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            200$
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            Red
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            Yes
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            <a
                              href="#"
                              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                              View
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Amazon
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            400$
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            Blue
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            No
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            <a
                              href="#"
                              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                              View
                            </a>
                          </td>
                        </tr>

                        <tr>
                          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Reliance Digital
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            1000$
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            Smoke Black
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                            Yes
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            <a
                              href="#"
                              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                              View
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <h2 className="text-black font-bold text-xl">
        Sentiment scores calculated from consolidated reviews
      </h2>
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
          // @ts-ignore
          data={chartData}
        />
      </XYPlot>

      <Recommendations />
    </div>
  );
}
