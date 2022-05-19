import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCards from '../Components/ProductCards';

import {
  getProducts,
} from '../actions/products.action';
import { useParams } from 'react-router-dom';




export default function AllProducts() {

  const [loadProducts, setLoadProducts] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProductsReducer);
  const category = String(useParams().category);
  useEffect(() => {
    if (loadProducts) {
        category == 'all' ? dispatch(getProducts()) : dispatch(getProducts(undefined, category));
        setLoadProducts(false);
    }
}, [loadProducts, dispatch]);



  return (
    <div className='m-5'>
      <h1>Products</h1>
    <ProductCards products={products} />
    </div>
  )
}
