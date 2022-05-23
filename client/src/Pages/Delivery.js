import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import FormContainer from '../Components/FormContainer';
import CheckoutSteps from '../Components/CheckoutSteps';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Delivery = () => {

    const [date, setDate] = useState(new Date());

    const onFormSubmit = () => {
        localStorage.setItem('deliveryDate', JSON.stringify(date));
        window.location = '/payment';
    };

    return (
        <div className='home'>
            <FormContainer>
                <CheckoutSteps step1 step2 step5 />
                <h1>Date of delivery</h1>
                <Calendar onChange={setDate} value={date} minDate={new Date()} minDetail='year' />
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
                <Button
                    className='d-block ml-auto'
                    onClick={onFormSubmit}
                    variant='primary'>
                    Continue
                </Button>
            </FormContainer>
        </div>
    );
};

export default Delivery;