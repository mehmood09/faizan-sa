import React from 'react'
import EmployeeForm  from '../UI/EmployeeForm'
import {Container, Row,  Col } from 'reactstrap';

const AddEmployee = () => {
  return (
    <>
    <section>
      <Container>
      <Row>
        <Col lg='2'>
          <img src='' alt='' className='w-100' />
        </Col>
        <Col lg='8' className='mt-0'>
          <div className="booking-info mt-4">
            <h5 className='mb-4 fw-bold'> Add Employee Information</h5>
            <EmployeeForm/>
          </div>
        </Col>
      </Row>
    </Container>    
    </section>
    </>
    
  )
}

export default AddEmployee