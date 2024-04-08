import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { supabase } from '../../supabaseClient';
//import '../../App.css'

const BookingView = () => {

    const [registers, setRegisters] = useState([])

    console.log(registers)
    
    async function getUsers() {
        try {
            const { data, error } = await supabase
            .from('booking')
            .select('*')
            .limit(10);

            if (error) throw error;

            if (data != null) {
                setRegisters(data);
            }
        } catch (error) {
            alert(error.message);
        }       
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
                 
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-1 mx-auto flex flex-wrap items-center">
                    <div className="w-full">                        
                    <table>
                            <thead>
                                <tr >
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Emp Number</th>
                                    <th>Pick Date</th>
                                    <th>Location</th>
                                    <th>Return Date</th>
                                    <th>Phone Number</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    registers.map((register)=>
                                    <tr  key={register.id}>
                                        <td>{register.id}</td>
                                        <td>{register.emp_name}</td>
                                        <td>{register.emp_department}</td>
                                        <td>{register.emp_number}</td>
                                        <td>{register.pickup_date}</td>
                                        <td>{register.veh_location}</td>
                                        <td>{register.return_date}</td>
                                        <td>{register.emp_phone}</td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        
                    </div>      
                </div>
            </section>

        
    )
}

export default BookingView