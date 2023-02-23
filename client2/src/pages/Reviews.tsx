import { useState } from "react";
import Product from "../components/Product";
import Search from "../components/Search";

// const result = await pb.collection("reviews").getList(1, 20, {});
// console.log(result);

export default function Reviews() {
  const [products, setProducts] = useState([
    { name: "produc1" },
    { name: "produc2" },
  ]);
  const [query, setQuery] = useState("");

  return (
    <div>
      Reviews
      <Search query={query} setQuery={setQuery} />
      {products.length > 0 &&
        products.map((product, index) => {
          return <Product key={index} name={product.name} />;
        })}
    </div>
  );
}
