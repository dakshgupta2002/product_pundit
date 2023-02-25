import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "react-vis/dist/style.css";
import ProductItem from "../components/ProductItem";
import { pb } from "../utils/pocketbase";

export default function SearchPage() {
  const { query } = useParams();
  const [searchQ, setSearchQ] = useState(() => query);

  const fetchProducts = async () => {
    const record = await pb.collection("products").getList(9, 111, {
      filter: `name~"${searchQ}"`,
    });
    return record;
  };
  const { data, isLoading, refetch } = useQuery("products", fetchProducts);

  const searchQuery = (event: { preventDefault: () => void }) => {
    event?.preventDefault();
    refetch();
  };
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-white flex flex-col justify-center items-center mt-9">
      <div className="flex flex-col justify-center items-center w-1/2">
        <form className="w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
              type="search"
              id="default-search"
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Reviews, Products..."
              required
            />
            <button
              onClick={searchQuery}
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      {data?.items?.length! === 0 && <p>No products found</p>}
      <div className="flex flex-wrap">
        {data?.items.map((item) => {
        return (
          <ProductItem
            id={item.id}
            name={item.name}
            description={item.name}
            price={item.price}
            key={item.id}
            image={item.picture}
            positive_count={item.positive_count}
            negative_count={item.negative_count}
            neutral_count={item.neutral_count}
          />
        );
      })}
      </div>
    </div>
  );
}
