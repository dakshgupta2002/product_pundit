import { useQuery } from "react-query";
import Pagination from "../components/Pagination";
import { ProductItemNew } from "../components/ProductItem";
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
    <h1 className="border-l-4 border-indigo-500 pl-4 mt-20 text-yellow-500">
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
  console.log(products);
  if (isLoading || productsLoading) {
    return <p>Loading.......</p>;
  }

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-1/2 py-10">
        <Search />
      </div>
      <div>
        <section>
          <div className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8 w-full">
            <header className="text-center">
              <h2 className="text-xl font-bold sm:text-3xl">
                Most Reviewed Products
              </h2>
            </header>

            <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-7 w-full">
              {products?.items.map((item) => {
                return (
                  <ProductItemNew
                    id={item.id}
                    name={item.name}
                    description={item.name}
                    price={item.price}
                    image={item.picture}
                    key={item.id}
                  />
                );
              })}
            </ul>
          </div>
        </section>

        <Category category={"New Arrivals"} />
        <div className="flex flex-wrap space-x-10">
          {data?.items.map((item) => {
            return (
              <ReviewItem
                product={item.expand.product_id}
                key={item.id}
                text={item.text}
                description={item.summary}
                id={item.id}
                rating={parseInt(item.rating)}
                price={undefined}
                sentiment={item.sentiment}
              />
            );
          })}
        </div>
        <Pagination pages={5} />
      </div>
      <div>
        <Category category={"Trending"} />
        <div className="flex flex-wrap space-x-10">
          {data?.items.map((item) => {
            return (
              <ReviewItem
                product={item.expand.product_id}
                key={item.id}
                text={item.text}
                description={item.summary}
                id={item.id}
                rating={parseInt(item.rating)}
                price={undefined}
                sentiment={item.sentiment}
              />
            );
          })}
        </div>
        <Pagination />
      </div>
      <div>
        <Category category={"Discover More"} />
        <div className="flex flex-wrap space-x-10">
          {data?.items.map((item) => {
            return (
              <ReviewItem
                product={item.expand.product_id}
                key={item.id}
                text={item.text}
                description={item.summary}
                id={item.id}
                rating={parseInt(item.rating)}
                price={undefined}
                sentiment={item.sentiment}
              />
            );
          })}
        </div>
        <Pagination />
      </div>
    </div>
  );
}
