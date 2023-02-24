import { useState } from "react";
import { useQuery } from "react-query";
import Pagination from "../components/Pagination";
import { ProductItemNew } from "../components/ProductItem";
import ProductItem from "../components/ProductItem";
import ReviewItem from "../components/ReviewItem";
import Search from "../components/Search";
import { pb } from "../utils/pocketbase";
import { Products, ReviewsI } from "../utils/types";

export const fetchRecords = async (): Promise<ReviewsI> => {
  return await pb.collection("reviews").getList(1, 10, {
    expand: "product_id",
  });
};

const fetchProducts = async (): Promise<Products> => {
  return await pb.collection("products").getList(1, 7);
};

const Category = ({ category }: any) => {
  return (
    <h1 className="border-l-4 border-indigo-500 pl-4 my-20 text-yellow-500">
      {category}
    </h1>
  );
};

export default function Reviews() {
  const { data, isLoading } = useQuery("reviews", fetchRecords);
  const { data: products, isLoading: productsLoading } = useQuery(
    "produts_no",
    fetchProducts
  );
  console.log("items", products?.items);
  if (isLoading || productsLoading) {
    return <p>Loading.......</p>;
  }

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-1/2 py-10">
        <Search />
      </div>

      <div className="w-4/5">
        <Category category={"New Arrivals"} />
        <div className="flex flex-wrap">
          {products?.items.slice(0, 3).map((item) => {
            return (
              <ProductItem
                id={item.id}
                name={item.name}
                description={item.name}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
        <Pagination pages={5} />
      </div>
      <div className="w-4/5">
        <Category category={"Trending"} />
        <div className="flex flex-wrap">
          {products?.items.slice(3, 5).map((item) => {
            return (
              <ProductItem
                id={item.id}
                name={item.name}
                description={item.name}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
        <Pagination pages={3} />
      </div>
      <div className="w-4/5">
        <Category category={"Discover More"} />
        <div className="flex flex-wrap">
          {products?.items.slice(5, 7).map((item) => {
            return (
              <ProductItem
                id={item.id}
                name={item.name}
                description={item.name}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
        <Pagination pages={5} />
      </div>

      <br/><br/>
      
    </div>
  );
}
