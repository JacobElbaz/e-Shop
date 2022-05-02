import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/products.action';
import {isEmpty} from './Utils';

export default function ProductsList() {
    const [loadProducts, setLoadProducts] = useState(true);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProductsReducer);

    useEffect(() => {
        if (loadProducts) {
            dispatch(getProducts());
            setLoadProducts(false);
        }
    }, [loadProducts, dispatch])

    return (
        <div>
            <ul>
                {!isEmpty(products[0]) && 
                products.map((product) => {
                    return <li>{product.name}</li>
                })
                }
            </ul>
        </div>
    )
}