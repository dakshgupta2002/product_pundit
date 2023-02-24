import { useQuery } from "react-query";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { pb } from "../utils/pocketbase";
import { ReviewsI } from "../utils/types";

export const fetchRecords = async (): Promise<ReviewsI> => {
  return await pb.collection("reviews").getList(200);
};

export default function Reviews() {
  const { data, isLoading } = useQuery("reviews", fetchRecords);
  if (isLoading) {
    return <p>Loading.......</p>;
  }
  console.log(data);

  return (
    <div className="h-full w-full flex justify-center flex-col items-center">
      <div className="w-1/2">
        <Search />
      </div>
      <div className="flex flex-wrap space-x-10">
        {data?.items.map((item) => {
          return <ProductItem key={item.id} name={item.text} />;
        })}
      </div>
    </div>
  );
}
