import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

import { getProducts } from '../actions/products.action';

import ProductDetails from '../Components/ProductDetails';
import ProductAvailability from '../Components/ProductAvailability';

const Product = () => {
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
            <Row className='m-auto'>
                <Button
                    className='mr-auto my-3'
                    variant='secondary'>
                    Go back
                </Button>
            </Row>
            <Row>
                <Col md={5}>
                    <ProductDetails product={products[5]} />
                </Col>
                <Col md={3}>
                    <ProductAvailability product={products[5]} />
                </Col>
            </Row>
        </div>
    );
};

export default Product;