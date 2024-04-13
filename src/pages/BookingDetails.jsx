import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';
import BookingTable from '../components/Employee/BookingTable';
import '../styles/view-employee.css';


const BookingDetails = ({ user }) => {
  return (
    <>

      <Container>
        <Row>
          <Col lg='12' md='12' sm='12'>
            <div className='table'>
              <BookingTable />
            </div>
          </Col>
        </Row>
      </Container>


    </>

  )
}
export default BookingDetails;
