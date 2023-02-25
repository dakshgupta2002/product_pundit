import { Link } from "react-router-dom";
import { Sentiment } from "./Sentiment";

export default function ProductItem({
  id = "5456",
  name = "iPhone 12",
  description = "Design by Apple",
  price = 0.0,
  rating = 3,
  reviewCount = 5,
  category = "Phone",
  image = "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
  positive_count=10,
  negative_count=1,
  neutral_count=5
}) {

  let sentiment = "positive";
  if (negative_count > positive_count && negative_count > neutral_count) {
    sentiment='negative'
  } else if (neutral_count > negative_count && neutral_count > positive_count) {
    sentiment='neutral'
  }
  
  return (
    <div className="flex flex-wrap mx-7 my-4 w-60 h-full" style={{height:'450px'}} >
      <div className="flex flex-wrap w-full h-full">
        <div className="p-4 w-full h-full">
          <a
            href={`/product/${id}`}
            className="c-card bg-white shadow-md hover:shadow-xl rounded-lg h-full flex flex-col justify-center"
          >
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover overflow-hidden"
                src={image}
                alt=""
              />
            </div>
            <div className="flex flex-col justify-between" >
              <div className="p-4">
              {/* <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {category}
              </span> */}
              <h2 className="mt-2 mb-2 text-xl font-bold">{name}</h2>
              <p className="text-sm">{description}</p>
              {/* <div className="mt-3 flex items-center">
                <span className="font-bold text-xl">{price}</span>&nbsp;
                <span className="text-sm font-semibold">Rs.</span>
              </div> */}
            </div>
              <div className="p-4 flex items-center text-sm text-gray-600">
                
                <Sentiment sentiment={sentiment} />
              {/* {[...Array(Math.floor(rating))].map((e, i) => {
                return <FilledStar />;
              })}
              {[...Array(5 - Math.floor(rating))].map((e, i) => {
                return <BlankStar />;
              })} */}
              {/* <span className="ml-2">{reviewCount} Reviews</span> */}
            </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProductItemNew({
  id,
  name,
  description,
  price,
  image,
}: {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}) {
  const defImage =
    "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  return (
    <Link to={`/product/${id}`} className="block group mx-8 my-6">
      <img
        src={image || defImage}
        alt=""
        className="h-[350px] w-full object-cover sm:h-[450px]"
      />

      <div className="mt-1.5 flex justify-between">
        <p className="text-md">{name}</p>
        <p className="">₹ {price}</p>
      </div>
    </Link>
  );
}
