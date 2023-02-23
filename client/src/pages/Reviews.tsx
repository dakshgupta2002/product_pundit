import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { Navbar } from '../components/Navbar'
import ProductItem from '../components/ProductItem';

export default function Reviews() {
  const [products, setProducts] = useState([{name: 'produc1'}, {name: 'produc2'}, {name: 'produc2'}, {name: 'produc2'}]);
  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   const getProducts = setTimeout(async () => {
  //     const res = await get(`reviews?query=${query}`);
  //     // setProducts(res);
  //   }, 500);

  //   return () => clearTimeout(getProducts);
  // }, [query]);

  return (
    <div>
      <Search query={query} setQuery={setQuery} />
      <div className='w-100 flex flex-row flex-wrap bg-gray-200 text-gray-900'>
        {products.length > 0 && products.map((product, index) => {
          return <ProductItem key={index} name={product.name} image={undefined}/>
        })}
      </div>
    </div>
  );
}
