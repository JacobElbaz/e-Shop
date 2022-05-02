import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isEmpty } from './Utils';
import {
    getProducts,
    deleteProduct,
} from '../actions/products.action';

const ProductList = () => {
    const [loadProducts, setLoadProducts] = useState(true);
    const dispatch = useDispatch();
    const products = useSelector((state) => state.allProductsReducer);

    useEffect(() => {
        if (loadProducts) {
            dispatch(getProducts());
            setLoadProducts(false);
        }
    }, [loadProducts, dispatch]);

    const onDeleteClick = (id) => {
    };

    const onCreateClick = () => {
    };

    return (
        <>
            <Row className='align-items-center'>
                <Col>
                    <h1>Products</h1>
                </Col>
                <Col className='text-right'>
                    <Link className='my-3 btn btn-primary' to ="/admin/editProduct">
                        <i className='fas fa-plus'></i> Create Product
                    </Link>
                </Col>
            </Row>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>GENRE</th>
                        <th>CATEGORY</th>
                        <th>RELEASE DATE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {!isEmpty(products[0]) &&
                        products.map((product) => {
                            return (
                                <tr key={product._id}>
                                    <td>
                                        <Link to={`/admin/products/${product._id}/edit`}>{product._id}</Link>
                                    </td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.genre}</td>
                                    <td>{product.category}</td>
                                    <td>{product.releaseDate.split('T')[0]}</td>
                                    <td>
                                        <Link to={`/admin/products/${product._id}/edit`}>
                                            <Button variant='light' className='btn-sm'>
                                                <i className='fas fa-edit'>Edit</i>
                                            </Button>
                                        </Link>
                                        <Button
                                            variant='danger'
                                            className='btn-sm'
                                            onClick={() => onDeleteClick(product._id)}>
                                            <i className='fas fa-trash'>Delete</i>
                                        </Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    );
};

export default ProductList;