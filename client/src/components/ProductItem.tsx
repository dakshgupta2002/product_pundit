import React from "react";

export default function ProductItem({ id=5456, name="iPhone 12", description="Design by Apple", price=0.00, image, rating=3, reviewCount=1321, category="Phone" }) {
  const FilledStar = () => {
    return <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  }
  const BlankStar = () => {
    return <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
  }

  return (
    <body className="antialiased font-sans p-6">
      <div className="container">
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
                <h2 className="mt-2 mb-2 text-xl font-bold">
                  {name}
                </h2>
                <p className="text-sm">
                  {description}
                </p>
                <div className="mt-3 flex items-center">
                  <span className="font-bold text-xl">{price}</span>&nbsp;
                  <span className="text-sm font-semibold">Rs.</span>
                </div>
              </div>
              <div className="p-4 flex items-center text-sm text-gray-600">
                {[...Array(Math.floor(rating))].map((e,i) => {
                    return <FilledStar/>
                })}
                {[...Array(5-Math.floor(rating))].map((e, i) => {
                    return <BlankStar/>
                })}
                <span className="ml-2">{reviewCount} Reviews</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </body>
  );
}
