import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Form, FormGroup } from 'reactstrap';
import BookingDetails from '../pages/BookingDetails';
import '../styles/login-form.css';

const LoginForm = () => {

    
    
    return (
      <Form className='form'>
         <div className='d-flex align-items-center justify-content-between flex-wrap'>
          <form onSubmit={handleSubmit}>
                  
                  <FormGroup className='form__group'>
                    <input type='email' id='email' name='email' placeholder='abc@example.com' onChange={handleChange} className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
                    </FormGroup>
                  <div className="form__group">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Password</label>
                    <input type='password' id='password' name='password' placeholder='Password' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                  </div>
                  <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
                </form>     
                </div>
    </Form>
    )
}
export default LoginForm;
