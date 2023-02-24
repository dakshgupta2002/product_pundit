import { BlankStar, FilledStar } from "../assets/icons";
import { Product } from "../utils/types";
import { Sentiment } from "./Sentiment";

export type ProductItem = {
  id: string;
  text: string;
  description: string;
  price: number | undefined;
  rating: number;
  product: Product;
  sentiment: string;
};

function text_truncate(
  str: string,
  length: number | null,
  ending: string | any[] | null
) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = "...";
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
}

const genericImage =
  "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";
export default function ReviewItem({
  id,
  text: name,
  description,
  price = 0,
  rating,
  product,
  sentiment,
}: ProductItem) {
  return (
    <div className="flex flex-wrap -mx-4 w-96">
      <div className="flex flex-wrap -mx-4 w-full h-full min-h-full">
        <div className="p-4 w-full h-full">
          <a
            href={`/product/${product.id}`}
            className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden h-full"
          >
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src={product.picture || genericImage}
                alt=""
              />
            </div>
            <div className="p-4 flex justify-between items-start flex-col">
              <Sentiment sentiment={sentiment.toLowerCase()} />
              <p className="mt-2 mb-2 text-sm text-gray-600">
                {text_truncate(name, 150, "...")}
              </p>

              <div className="flex items-center text-sm text-gray-600">
                <FilledStar />
                <FilledStar />
                <FilledStar />
                <FilledStar />
                <BlankStar />
              </div>
              <p className="w-80 truncate">For - {product.name}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
