import React, { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../Components/Product';
import { HeartFill } from 'react-bootstrap-icons';
import { getUser, updateWishProduct } from '../actions/user.action';
import { UidContext } from '../Components/AppContext';
import { getProducts } from '../actions/products.action';
//import { deleteWishProduct } from '../actions/auth';

const WishList = () => {
    const [loadProducts, setLoadProducts] = useState();
    const user = JSON.parse(localStorage.getItem('auth'));
    const products = useSelector((state) => state.allProductsReducer);
    const wishlist = user?.wishlist;
    const dispatch = useDispatch();
    useEffect(() => {
        if (loadProducts) {
            dispatch(getProducts());
            setLoadProducts(false);
        }
    }, [loadProducts, dispatch]);
    const onRemoveProduct = (productId) => {
        if (user) {
            dispatch(updateWishProduct(productId, user._id));
            setLoadProducts(true);
            return;
          }
    };
    const renderLikeIcon = (productId) => {
        return (
            <HeartFill
                style={{
                    position: 'absolute',
                    right: '2rem',
                    top: '2rem',
                    zIndex: 100,
                    color: 'red',
                    cursor: 'pointer',
                }}
                onClick={() => onRemoveProduct(productId)}
            />
        );
    };

    return (
        <>
            <h1>Wish List</h1>

            <Row className='container'>
                {wishlist?.length === 0 ? (
                    <h1>You don't have any order yet.</h1>
                ) : (
                    Object.values(products)?.map((product) => {
                        if(product._id == wishlist?.find(wish => product._id == wish))
                        return (
                        <Col
                            key={product._id}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={3}
                            style={{ position: 'sticky' }}>
                            {renderLikeIcon(product._id)}
                            <Product product={product} />
                        </Col>
                    )})
                )}
            </Row>
        </>
    );
};

export default WishList;