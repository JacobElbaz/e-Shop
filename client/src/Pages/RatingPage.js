import React, { useEffect, useState } from 'react';
import { Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOrders } from '../actions/orders.action';
import Rating from '../Components/Rating';


const RatingPage = () => {
    const orderId = useParams().id;
    const order = useSelector((state) => state.orderReducer);
    const dispatch = useDispatch();
    const [loadOrder, setLoadOrder] = useState(true);
    const [rate, setRate] = useState();

    useEffect(() => {
        if (loadOrder) {
            dispatch(getOrders(orderId));
            setLoadOrder(false);
        }
    })

    return (
        <div className='m-5'>
            <Row>
                <Col>
                    <ListGroup variant='flush'>
                        {!loadOrder && order.orderItems.map((item) => {
                            return (
                                <ListGroup.Item key={item._id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fluid
                                                rounded
                                            ></Image>
                                        </Col>
                                        <Col md={3}>
                                            {item.name}
                                        </Col>
                                        <Col>
                                        Rate: 
                                        <select name="rate" id={item._id} onChange={(e) => setRate(e.target.value)}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                        </Col>
                                    </Row>

                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    );
};

export default RatingPage;