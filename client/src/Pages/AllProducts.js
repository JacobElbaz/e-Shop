import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCards from '../Components/ProductCards';

import {
  getProducts,
} from '../actions/products.action';
import { useParams } from 'react-router-dom';




export default function AllProducts() {

  const [loadProducts, setLoadProducts] = useState(true);
  const [filter, setFilter] = useState({ category: undefined, genre: undefined });
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
      <select className="form-select w-25 d-inline" onChange={(e) => { setFilter({ ...filter, category: e.target.value }) }}>
        <option selected></option>
        <option value="PS4">PS4</option>
        <option value="PS5">PS5</option>
        <option value="XBOX">XBOX</option>
        <option value="Switch">Switch</option>
      </select>
      <select className="form-select w-25 d-inline" onChange={(e) => { setFilter({ ...filter, genre: e.target.value }) }}>
        <option selected></option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Fighting">Fighting</option>
        <option value="Racing">Racing</option>
        <option value="Role">Role</option>
        <option value="Shooter">Shooter</option>
        <option value="Sport">Sport</option>
        <option value="Strategy">Strategy</option>
        <option value="Other">Other</option>
      </select>
      <ProductCards products={products} />
    </div>
  )
}
