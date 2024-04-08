import React from 'react'
import { Container , Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection'
import carData from '../assets/data/carData';
import CarItem from '../components/UI/CarItem';

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />
      <Container>
        <Row>
          <Col lg='12'>
            
          </Col>
          {
            carData.map(item=> <CarItem item={item} key={item.id} />)
          }
        </Row>
      </Container>
    </Helmet>
  )
}
export default CarListing;

