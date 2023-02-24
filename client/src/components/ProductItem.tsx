import { BlankStar, FilledStar } from "../assets/icons";

export default function ProductItem({
  id = 5456,
  name = "iPhone 12",
  description = "Design by Apple",
  price = 0.0,
  rating = 3,
  reviewCount = 1321,
  category = "Phone",
}) {
  return (
    <div className="flex flex-wrap -mx-4">
      <div className="flex flex-wrap -mx-4">
        <div className="p-4">
          <a
            href={`/product/${id}`}
            className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
          >
            <div className="relative pb-48 overflow-hidden">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
            <div className="p-4">
              <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                {category}
              </span>
              <h2 className="mt-2 mb-2 text-xl font-bold">{name}</h2>
              <p className="text-sm">{description}</p>
              <div className="mt-3 flex items-center">
                <span className="font-bold text-xl">{price}</span>&nbsp;
                <span className="text-sm font-semibold">Rs.</span>
              </div>
            </div>
            <div className="p-4 flex items-center text-sm text-gray-600">
              {[...Array(Math.floor(rating))].map((e, i) => {
                return <FilledStar />;
              })}
              {[...Array(5 - Math.floor(rating))].map((e, i) => {
                return <BlankStar />;
              })}
              <span className="ml-2">{reviewCount} Reviews</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
