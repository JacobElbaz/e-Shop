import React, { useState } from 'react';
import { Row, Col, ListGroup, Card, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateWishProduct } from '../actions/user.action';


const ProductAvailability = ({ product }) => {
  const [qty, setQty] = useState(1);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onAddToCartClick = () => {
  };

  const onAddToWishListClick = () => {
    if (user) {
      dispatch(updateWishProduct(product._id, user._id));
      return;
    }
  };

  return (
    <Card>
      <ListGroup varient='flush'>
        <ListGroup.Item>
          <Row>
            <Col>Price:</Col>
            <Col>
              <strong>${product.price}</strong>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col>Status:</Col>
            <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
          </Row>
        </ListGroup.Item>

        {product.countInStock > 0 && (
          <ListGroup.Item>
            <Row>
              <Col>Qty</Col>
              <Col>
                <Form.Control
                  as='select'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
        )}
        <ListGroup.Item>
          <Row>
            <Button
              className='btn-block my-1'
              type='button'
              disabled={product.countInStock < 1}
              onClick={onAddToCartClick}>
              Add To Cart
            </Button></Row>
          <Row>
            <Button
              className='btn-block my-1'
              type='button'
              onClick={onAddToWishListClick}>
              Add To WishList
            </Button></Row>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default ProductAvailability;