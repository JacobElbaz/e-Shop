import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCards from '../Components/ProductCards';

import {
  getProducts,
} from '../actions/products.action';




export default function AllProducts() {

  const [loadProducts, setLoadProducts] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProductsReducer);
  useEffect(() => {
    if (loadProducts) {
        dispatch(getProducts());
        setLoadProducts(false);
    }
}, [loadProducts, dispatch]);



  return (
    <div>
      <h1>Products</h1>
    <ProductCards products={products} />
    </div>
  )
}
