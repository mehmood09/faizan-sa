import React, {useEffect} from 'react'
import carData from '../assets/data/carData';
import {Container, Row,  Col } from 'reactstrap';
//import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { useParams } from 'react-router-dom';
import  BookingForm  from '../components/UI/BookingForm';

const CarDetails = () => {
  const {slug} = useParams();

  const singleCarItem = carData.find(item=>item.carName === slug)
  
  useEffect(()=> {
    window.scrollTo(0,0);
  }, [singleCarItem]);
  
  return (
    <>
    <Helmet title={singleCarItem.carName}>    
    <section>
      <Container>
      <Row>
        <Col lg='6'>
          <img src={singleCarItem.imgUrl} alt='' className='w-100' />
        </Col>
        <Col lg='6' className='mt-0'>
          <div className="booking-info mt-4">
            <h5 className='mb-4 fw-bold'> Booking Information</h5>
            <BookingForm/>
          </div>
        </Col>
      </Row>
    </Container>    
    </section>
    </Helmet>
    </>
  )
}
export default CarDetails;