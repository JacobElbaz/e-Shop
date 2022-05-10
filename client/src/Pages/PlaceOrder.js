import React, { useEffect, useState } from 'react';
import { Button, Row, Col, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { createOrder } from '../actions/order.action';

import CheckoutSteps from '../Components/CheckoutSteps';
import OrderSummary from '../Components/OrderSummary';
import ShippingDetails from '../Components/ShippingDetails';
import OrderItems from '../Components/OrderItems';

const PlaceOrder = () => {
    let [cart, setCart] = useState([]);
    let localCart = localStorage.getItem("cart");
    useEffect(() => {
        localCart = JSON.parse(localCart);
        if (localCart) setCart(localCart)

    }, [])
  const dispatch = useDispatch();

  // calculate prices
  cart.totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const onPlaceOrderClick = () => {
    dispatch(
      createOrder({
        orderItems: cart,
        shippingAddress: JSON.parse(localStorage.getItem('shippingAddress')),
        paymentMethod: JSON.parse(localStorage.getItem('paymentMethod')),
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ShippingDetails order={JSON.parse(localStorage.getItem('shippingAddress'))} />

            <OrderItems order={cart} />
          </ListGroup>
        </Col>
        <Col md={4}>
          <OrderSummary order={cart}>
            <Button
              type='button'
              className='btn-block'
              disabled={cart.length === 0}
              onClick={onPlaceOrderClick}>
              Place Order
            </Button>
          </OrderSummary>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;