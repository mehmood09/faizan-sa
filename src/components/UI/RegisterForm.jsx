import React from 'react';
import '../../styles/register-form.css';
import { Form, FormGroup } from 'reactstrap';

const RegisterForm = () => {
  return (
    <>
    <Form className='form'>
        <div className='d-flex align-items-center justify-content-between flex-wrap'>
            <FormGroup className='form__group'>
                <input type='text' placeholder='User Name' required />
            </FormGroup>
            <FormGroup className='form__group'>
                <input type='email' placeholder='Email : abc@gmail.com' required />
            </FormGroup>
            <FormGroup className='form__group'>
                <input type='password' placeholder='********' required />
            </FormGroup>
            <FormGroup className='form__group'>
                <input type='number' placeholder='Mobile Number' required />
            </FormGroup>
            <FormGroup className='select__group'>
                <select>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>                    
                </select>
            </FormGroup>
            <FormGroup className='form__group'>
                <button className='btn find__car-btn'>
                    Register
                </button>
            </FormGroup>            
        </div>
    </Form>
    </>
  )
}
export default RegisterForm;
