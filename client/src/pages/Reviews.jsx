import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { Navbar } from '../components/Navbar'
import { get } from '../common/api';
import Product from '../components/Product';

export default function Reviews() {
  const [products, setProducts] = useState([{name: 'produc1'}, {name: 'produc2'}]);
  const [query, setQuery] = useState('');

  useEffect( () => {
    const getProducts = setTimeout(async () => {
      const res = await get(`reviews?query=${query}`);
      setProducts(res);
    }, 500);

    return () => clearTimeout(getProducts);
  }, [query]);

  return (
    <div>
      <Navbar/>
      Reviews
      <Search query={query} setQuery={setQuery} />
      {products.length > 0 && products.map((product, index) => {
        return <Product key={index} name={product.name}/>
      })}
    </div>
  )
}
