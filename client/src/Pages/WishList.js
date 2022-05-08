import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Product from '../Components/Product';
import { HeartFill } from 'react-bootstrap-icons';
import { getUser } from '../actions/user.action';
import { UidContext } from '../Components/AppContext';
//import { deleteWishProduct } from '../actions/auth';

const WishList = () => {
    const user = useSelector((state) => state.userReducer);
    const array = user.wishlist;
    const dispatch = useDispatch();
    const onRemoveProduct = (productId) => {
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

            <Row>
                {array?.length === 0 ? (
                    <h1>You don't have any order yet.</h1>
                ) : (
                    array?.map((wish) => (
                        <Col
                            key={wish._id}
                            sm={12}
                            md={6}
                            lg={4}
                            xl={3}
                            style={{ position: 'relatvie' }}>
                            {renderLikeIcon(wish._id)}
                            <Product product={wish} />
                        </Col>
                    ))
                )}
            </Row>
        </>
    );
};

export default WishList;