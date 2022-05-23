import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, Button, Col, Row, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { isEmpty } from '../Components/Utils';
import { getMyOrders } from '../actions/order.action';
import { updateStatus } from '../actions/order.action';

const Orders = () => {
    const [loadOrders, setLoadOrders] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [toCancel, setToCancel] = useState();
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderReducer);
    const userId = JSON.parse(localStorage.getItem('auth'))._id;

    useEffect(() => {
        if (loadOrders) {
            dispatch(getMyOrders(userId));
            setLoadOrders(false);
        }
    }, [loadOrders, dispatch]);

    const cancel = (id) => {
        dispatch(updateStatus(id, 'Canceled'));
        window.location = `/myorders/${userId}`;
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const onCancelClick = (order) => {
        setToCancel(order);
        setShowModal(true);
    }

    return (

        <div className='m-5'>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Cancel Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to cancel the order?</Modal.Body>
                <Modal.Footer>
                    <Button variant='danger' onClick={() => cancel(toCancel)}>
                        Yes, cancel this order
                    </Button>
                    <Button variant='secondary' onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className='align-items-center'>
                <Col>
                    <h1>Orders</h1>
                </Col>
            </Row>
            <Table striped bordered hover responsive className='table-sm'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>PRICE</th>
                        <th>ADDRESS</th>
                        <th>STATUS</th>
                        <th>DELIVERED</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {!isEmpty(orders[0]) &&
                        orders.map((order) => {
                            return (
                                <tr key={order._id}>
                                    <td>
                                        <Link to={`/order/${order._id}`}>{order._id}</Link>
                                    </td>
                                    <td>{order.payementDate.split('T')[0]}</td>
                                    <td>${order.totalPrice}</td>
                                    <td>{order.shippingAddress.city}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        {order.isDelivered ? (
                                            <i
                                                className="fas fa-check"
                                                style={{ color: 'green' }}
                                            ></i>
                                        ) : (
                                            <i className="fas fa-times" style={{ color: 'red' }}></i>
                                        )}
                                    </td>
                                    <td>
                                        {order.isDelivered && order.status != 'Canceled' ? (
                                            <Button
                                            variant='success'
                                            onClick={() => onCancelClick(order._id)}
                                            >Confirm Reception
                                        </Button>
                                    ) : (
                                        <Button
                                            variant='danger'
                                            onClick={() => onCancelClick(order._id)}
                                            disabled={order.status == 'Canceled' || order.isDelivered}>Cancel
                                        </Button>
                                    )}
                                        
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;