import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { Form, FormGroup } from 'reactstrap';
import '../styles/register-form.css';

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        fullName: '', email: '', password: ''
    })

    console.log(formData)

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
            const { data, error } = await supabase.auth.signUp(
                {
                    email: formData.email,
                    password: formData.password,
                    options: {
                        data: {
                            full_name: formData.fullName,
                        }
                    }
                }
            )
            if (error) throw error
            alert('Check your email for verification link')


        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className='form'>
            <div className='d-flex align-items-center justify-content-between flex-wrap'>
                <form onSubmit={handleSubmit}>
                    <div className='form__group'>

                        <input type="text" id="fullName" name="fullName" placeholder='Full Name' onChange={handleChange} />
                    </div>
                    <div className='form__group'>

                        <input type="email" id="email" name="email" placeholder='abc@example.com' onChange={handleChange} />
                    </div>
                    <div className='form__group'>

                        <input type="password" id="password" name="password" placeholder='Password' onChange={handleChange} />
                    </div>
                    <button type='submit' className="find__car-btn">Sign Up</button>
                </form>

            </div>
        </div>
    )
}
export default RegisterForm;
