import { useQuery } from "react-query";
import ReviewItem from "../components/ReviewItem";
import Search from "../components/Search";
import { pb } from "../utils/pocketbase";
import { ReviewsI } from "../utils/types";

export const fetchRecords = async (): Promise<ReviewsI> => {
  return await pb.collection("reviews").getList(200, 100, {
    expand: "product_id",
  });
};

export default function Reviews() {
  const { data, isLoading } = useQuery("reviews", fetchRecords);
  if (isLoading) {
    return <p>Loading.......</p>;
  }
  console.log("reviews", data);

  return (
    <div className="h-full w-full flex justify-center flex-col items-center">
      <div className="w-1/2">
        <Search />
      </div>
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
    </div>
  );
}
