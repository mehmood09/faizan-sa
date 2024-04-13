import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import '../../styles/login-form.css';

const BookingView = () => {

    const [error, setError] = useState(null)
    const [registers, setRegisters] = useState([])

    console.log(registers)
    
    let navigate = useNavigate()

    function handleLogout() {
      sessionStorage.removeItem('token')
      navigate('/')
    }
  

    async function getUsers() {
        try {
            const { data, error } = await supabase
            .from('booking')
            .select('*')
            .limit(1000);

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


    const handleUpdate = async (id) => {
        const res = await supabase
        .from('booking')
        .update({ complete: true })
        .eq('id', id)
        .select('*')
        .single();
        
        if (!res.error) {
          setRegisters((currentTodo) => currentTodo.map((register) => {
            if(register.id === id) {
              register.complete = true
              //alert('Data Update Success.');
            }
            return register;
          }));
          
        } 
        else {
          setError(res.error);
    
        }
      }
    
      const handleDelete = async (id) => {
        const res = await supabase.from('booking').delete().eq('id',id).single();
        //console.log(res);
        if (!res.error) {
          setRegisters((currentTodo) => 
            currentTodo.filter((register) => (register.id !== id))
        );      
        } 
        else {
          setError(res.error);
    
        }
      };
    
    return (

            <>
             <button className="delete-btn" onClick={handleLogout}>Logout</button>
             <Container>
              <Row>
                    <Col lg='12' md='12' sm='12'>
                    <table>
                            <thead>
                                <tr >
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Emp Number</th>
                                    <th>Vehical</th>
                                    <th>Pick Date</th>
                                    <th>Location</th>
                                    <th>Return Date</th>
                                    <th>Phone Number</th>
                                    <th>Action</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    registers.map((register)=>
                                    <tr  key={register.id}>
                                        <td>{register.id}</td>
                                        <td style={{
                                            textDecoration: register.complete
                                            ? "line-through"
                                            : ""
                                        }}>{register.emp_name}</td>
                                        <td>{register.emp_department}</td>
                                        <td>{register.emp_number}</td>
                                        <td>{register.veh_name}</td>
                                        <td>{register.pickup_date}</td>
                                        <td>{register.veh_location}</td>
                                        <td>{register.return_date}</td>
                                        <td>{register.emp_phone}</td>
                                        <td><button className='btn ri-check-double-line' style={{color:'green', width:'50px', borderRadius:'50%' }} onClick={() => handleUpdate(register.id)}></button>
                                        &nbsp;&nbsp;&nbsp;<button className='btn ri-delete-bin-line' style={{color:'red', width:'50px', borderRadius:'40%'}} onClick={() => handleDelete(register.id)}></button> </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                   
                    </Col>
                </Row>
                </Container>
    
                 
                <section className="text-gray-600 body-font">
                
                <div className="container px-5 py-1 mx-auto flex flex-wrap items-center">
                    <div className="w-full">                        
                        
                    </div>      
                </div>
            </section>

        
            </>
           
    )
}

export default BookingView