import { useQuery } from "react-query";
import ProductItem, { ProductItemNew } from "../components/ProductItem";
import Search from "../components/Search";
import { pb } from "../utils/pocketbase";
import { Products, ReviewsI } from "../utils/types";

export const fetchRecords = async (): Promise<ReviewsI> => {
  return await pb.collection("reviews").getList(1, 100, {
    expand: "product_id",
  });
};

const fetchProducts = async (): Promise<Products> => {
  return await pb.collection("products").getList(1, 50);
};

const fetchNewProducts = async (): Promise<Products> => {
  return await pb.collection("products").getList(9, 111, {
      filter: `new=1`,
  });
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

  const { data: productsNew, isLoading: productsNewLoading } = useQuery(
    "produts_new",
    fetchNewProducts
  );
  console.log("items", productsNew);
  if (isLoading || productsLoading || productsNewLoading) {
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
          {productsNew?.items.slice(0, 3).map((item) => {
            return (
              <ProductItemNew
                id={item.id}
                name={item.name}
                description={item.name}
                price={item.price}
                key={item.id}
                image={item.picture}
              />
            );
          })}
        </div>
        
      </div>
      <div className="w-4/5">
        <Category category={"Trending"} />
        <div className="flex flex-wrap">
          {products?.items.slice(5, 8).map((item) => {
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
        {/* <Pagination pages={3} /> */}
      </div>
      <div className="w-4/5">
        <Category category={"Discover More"} />
        <div className="flex flex-wrap">
          {products?.items.slice(8,11).map((item) => {
            return (
              <ProductItem
                id={item.id}
                name={item.name}
                description={item.name}
                price={item.price}
                key={item.id}
                positive_count={item.positive_count}
                negative_count={item.negative_count}
                neutral_count={item.neutral_count}
              />
            );
          })}
        </div>
      </div>

      <br/><br/>
      
    </div>
  );
}
