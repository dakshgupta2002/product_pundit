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
  console.log("items", products?.items);
  if (isLoading || productsLoading) {
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
          {products?.items.slice(0, 3).map((item) => {
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
              />
            );
          })}
        </div>
        
        {/* <section>
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
                <ul className="grid grid-cols-2 gap-4 text-white">
                  {products?.items.map((item, i) => {
                    if (i >= 2) {
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
         */}
{/* <Collection /> */}
        {/* <section>
          <div className="w-full px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
              <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8 w-3/4">
                <div className="max-w-md mx-auto text-center lg:text-left">
                  <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                      Discover More
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
                <ul className="grid grid-cols-2 gap-4 text-white">
                  {products?.items.map((item, i) => {
                    if (i >= 2) {
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
        </section> */}
      </div>

      <br/><br/>
      
    </div>
  );
}
