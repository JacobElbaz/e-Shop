import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';

import { addressFormValidationSchema } from '../validations';

import FormContainer from '../Components/FormContainer';
import CheckoutSteps from '../Components/CheckoutSteps';
import Input from '../Components/Input';

const initialValues = {
    address: '',
    city: '',
    postalCode: '',
    street: '',
};

const Shipping = () => {

    let [address, setAddress] = useState()
    let localAddress = localStorage.getItem("shippingAddress");


    useEffect(() => {
        localAddress = JSON.parse(localAddress);
        if (localAddress) setAddress(localAddress)

    }, [])

    const onFormSubmit = (data) => {
        localStorage.setItem('shippingAddress', JSON.stringify(data));
        window.location = '/delivery';
    };

    return (
        <>
            <FormContainer>
                <CheckoutSteps step1 step2 />
                <h1>Shipping Address</h1>
                <Formik
                    initialValues={address || initialValues}
                    validationSchema={addressFormValidationSchema}
                    onSubmit={onFormSubmit}
                    enableReinitialize>
                    {() => (
                        <Form>
                            <Input label='Address*' name='address' type='text' />
                            <Input label='No. Of Street' name='street' type='text' />
                            <Input label='City*' name='city' type='text' />
                            <Input label='Post Code' name='postalCode' type='text' />
                            <Button
                                className='d-block ml-auto'
                                type='submit'
                                variant='primary'>
                                Continue
                            </Button>
                        </Form>
                    )}
                </Formik>
            </FormContainer>
        </>
    );
};

export default Shipping;