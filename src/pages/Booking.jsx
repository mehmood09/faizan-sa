import React from 'react'
import {Container, Row,  Col } from 'reactstrap';
import BookingForm from '../components/UI/BookingForm';
import heroImg01 from "../assets/all-images/cars-img/offer-toyota.png";

const Booking = () => {
 return (
    <>
      <section>
      <Container>
      <Row>
        <Col lg='6'>
          <img src={heroImg01} alt='' className='w-100' />
        </Col>
        <Col lg='6' className='mt-0'>
          <div className="booking-info mt-0">
            <h5 className='mb-4 fw-bold'> Add Booking Information</h5>
            <BookingForm/>
          </div>
        </Col>
      </Row>
    </Container>    
    </section>    
    </>
  )
}
export default Booking;
