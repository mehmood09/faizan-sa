import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import '../../styles/booking-form.css';

const BookingForm = () => {

    const [error, setError] = useState(null)
    const [booking, setBooking] = useState([])

    const [formData, setFormData] = useState({
        fullName: '', depName: '', cnic: '', address: '', pickdate: '', vehName: '', modelName: '', locName: '', returndate: ''
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

    async function addBooking() {
        try {

            const res = await supabase
                .from('booking')
                .insert(
                    {
                        emp_name: formData.fullName,
                        emp_department: formData.depName,
                        emp_number: formData.cnic,
                        emp_address: formData.address,
                        pickup_date: formData.pickdate,
                        veh_name: formData.vehName,
                        veh_model: formData.modelName,
                        veh_location: formData.locName,
                        return_date: formData.returndate,
                        emp_phone: formData.phone
                    })
                .select('*')
                .single()

            setError(res.error)

            if (res.data) {
                setFormData((currentBooking) => [...currentBooking, res.data]);
                alert('Data Save Success.');
            }
        } catch (error) {
            alert(error.message);
        }
    }

    const getBooking = async () => {
        const res = await supabase.from('booking').select('*');
        setBooking(res.data);
        setError(res.error);
    };

    useEffect(() => { }, []);

    return (

        <div>

            <section className="text-gray-600 body-font">
                <div className="container px-1 py-1 mx-auto flex flex-wrap items-center">

                    <div className="lg:w-6/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-1 md:mt-0">

                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="fullName" name="fullName" placeholder='Full Name' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="depName" name="depName" placeholder='Department Name' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="cnic" name="cnic" placeholder='Identity Number' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="address" name="address" placeholder='Address' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>

                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="vehName" name="vehName" placeholder='Vehical Name' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="modelName" name="modelName" placeholder='Model Number' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>


                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="locName" name="locName" placeholder='Service Location' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="text" id="phone" name="phone" placeholder='Phone Number' onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="date" id="pickdate" name="pickdate" onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='booking__form d-inline-block me-4 mb-4'>

                            <input type="date" id="returndate" name="returndate" onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button type='submit' className="booking__form submit__btn ms-1" onClick={() => addBooking()}>Book Now</button>


                    </div>
                </div>
            </section>

        </div>
    )
}

export default BookingForm