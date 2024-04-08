import React from 'react'

import '../../styles/employee-form.css';
import { Form, FormGroup } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';

const EmployeeForm = () => {
  const submitHandler = event => {
    event.preventDefault()
}
  return (
    <>
      <Form onSubmit={submitHandler}>
        <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='text' placeholder='First Name' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='number' placeholder='CNIC' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='text' placeholder='Job Department' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='text' placeholder='Employee Number' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='number' placeholder='Mobile Number' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='email' placeholder='Email Address' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='text' placeholder='From Address' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='text' placeholder='To Address' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block me-4 mb-4'>
                <input type='date' placeholder='Journey Date' required />
            </FormGroup>
            <FormGroup className='booking__form d-inline-block ms-1 mb-4'>
                <input type='time' placeholder='Journey Time' className='time__picker' required />
            </FormGroup>            
            <FormGroup>
                <textarea row={5} type='textarea' placeholder='Write ' className='textarea' required />
            </FormGroup>
            <FormGroup>
            <button className='header__btn btn'>
                <Link to='#'>
                  <i className='ri-phone-line'></i> Add Data
                </Link>
              </button>
            </FormGroup>
            </Form>
    </>
  )
}
export default EmployeeForm;
