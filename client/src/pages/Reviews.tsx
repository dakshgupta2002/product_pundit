import { useQuery } from "react-query";
import Pagination from "../components/Pagination";
import ReviewItem from "../components/ReviewItem";
import Search from "../components/Search";
import { pb } from "../utils/pocketbase";
import { ReviewsI } from "../utils/types";

export const fetchRecords = async (): Promise<ReviewsI> => {
  return await pb.collection("reviews").getList(200, 100, {
    expand: "product_id",
  });
};
const Category = ({ category }: any) => {
  return <h1 className="border-l-4 border-indigo-500 pl-4 mt-20 text-yellow-500">{category}</h1>
};

export default function Reviews() {
  const { data, isLoading } = useQuery("reviews", fetchRecords);
  if (isLoading) {
    return <p>Loading.......</p>;
  }
  console.log("reviews", data);

  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-1/2 py-10">
        <Search />
      </div>
      <div>
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
        <Pagination pages={5}/>
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
        <Pagination/>
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
        <Pagination/>
      </div>
    </div>
  );
}