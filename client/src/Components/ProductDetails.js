import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Rating from '../Components/Rating';

const ProductDetails = ({ product }) => {
  return (
    <ListGroup variant='flush'>
      <ListGroup.Item>
        <h3>{product.name}</h3>
      </ListGroup.Item>
      <ListGroup.Item>
        <Rating value={Number(product.rating)} text={`${Number(product.numReviews)} reviews`} />
      </ListGroup.Item>
      <ListGroup.Item>Price: {product.price}</ListGroup.Item>
      <ListGroup.Item>Description: {product.description}</ListGroup.Item>
    </ListGroup>
  );
};

export default ProductDetails;