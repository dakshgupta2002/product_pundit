import { useQuery } from "react-query";
import { Collection } from "../components/Collection";
import { ProductItemNew } from "../components/ProductItem";
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

        <section>
          <div className="w-full px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8 w-3/4">
                <div className="max-w-md mx-auto text-center lg:text-left">
                  <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      New Arrivals
                    </h2>

                    <p className="mt-4 text-gray-500">
                      Newly launched mobile phones!
                    </p>
                  </header>

                  <a
                    href="#"
                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring hover:text-slate-300"
                  >
                    Shop All
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 lg:py-8">
                <ul className="grid grid-cols-4 gap-4 text-white">
                  {products?.items.map((item, i) => {
                    if (i >= 4) {
                      return;
                    }
                    return (
                      <ProductItemNew
                        id={item.id}
                        name={item.name}
                        description={item.name}
                        price={item.price}
                        image={item.picture}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Collection />

        <section>
          <div className="w-full px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8 w-3/4">
                <div className="max-w-md mx-auto text-center lg:text-left">
                  <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      Trending
                    </h2>

                    <p className="mt-4 text-gray-500">
                      Checkout the most trending phones!
                    </p>
                  </header>

                  <a
                    href="#"
                    className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring hover:text-slate-300"
                  >
                    Shop All
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 lg:py-8">
                <ul className="grid grid-cols-4 gap-4 text-white">
                  {products?.items.map((item, i) => {
                    if (i >= 4) {
                      return;
                    }
                    return (
                      <ProductItemNew
                        id={item.id}
                        name={item.name}
                        description={item.name}
                        price={item.price}
                        image={item.picture}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
