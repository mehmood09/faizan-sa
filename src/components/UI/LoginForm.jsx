import React from 'react';
import { Form, FormGroup } from 'reactstrap';

const LoginForm = () => {
  return (
    <>
    <Form className='form'>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
            <FormGroup className='form__group'>
                <input type='email' placeholder='Email : abc@gmail.com' required />
            </FormGroup>
            <FormGroup className='form__group'>
                <input type='password' placeholder='********' required />
            </FormGroup>
            
            <FormGroup className='form__group'>
                <button className='btn find__car-btn'>
                    Login
                </button>
            </FormGroup>            
        </div>
    </Form>
    </>
  )
}
export default LoginForm;
