import React, { useState, useEffect } from 'react';
import { Form, FormGroup } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import BookingDetails from './BookingDetails';
import '../styles/login-form.css';

const Login = ({ setToken }) => {

  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '', password: ''
  })

  //console.log(formData)
  const [user, setUser] = useState(null);


  useEffect(() => {
    const session = supabase.auth.getUser();
    setUser(session?.user)
    console.log(session);
  }, [])


  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }

    })

  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })

      if (error) throw error
      console.log(data)
      setToken(data)
      navigate('/booking-list')
    } catch (error) {
      alert(error)
    }
  }


  return (
    <>
      {
        user ? (
          <BookingDetails user={user} />
        ) : (


          <Container>
            <Row className='form__row'>
              <Col lg='4' md='4'>
                <div className="find__cars-left">
                  <h2>Login Here</h2>
                </div>
              </Col>
              <Col lg='8' md='8' sm='12'>
                <div className='form'>
                  <div className='d-flex align-items-center justify-content-between flex-wrap'>
                    <form onSubmit={handleSubmit}>
                      <div className='form__group'>
                        <input type='email' id='email' name='email' placeholder='abc@example.com' onChange={handleChange}  />
                      </div>
                      <div className='form__group'>
                        <input type='password' id='password' name='password' placeholder='Password' onChange={handleChange}  />
                      </div>
                      <button type='submit' className="find__car-btn">Login</button>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>

        )
      }

    </>
  )
}
export default Login;