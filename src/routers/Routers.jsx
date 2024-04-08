import React from "react";
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import About from '../pages/About';
import CarListing from '../pages/CarListing';
import CarDetails from '../pages/CarDetails';
import Contact from "../pages/Contact";
import NotFound from '../pages/NotFound';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AddEmployee from "../components/Employee/AddEmployee";
import Employee from "../pages/Employee";
import AddBooking from '../pages/Booking';
import BookingDetails from "../pages/BookingDetails";

const Routers = () => {
    return (
        <Routes>
        <Route path="/" element = {<Navigate to ='home' />} />
        <Route path="/home" element = {<Home/>} />
        <Route path="/about" element = {<About />} />
        <Route path="/cars" element = {<CarListing />} />
        <Route path="/cars/:slug" element = {<CarDetails/>} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Signup />} />
        <Route path="/create-employee" element = {<AddEmployee />} />
        <Route path="/employee-list" element = {<Employee />} />
        <Route path="/create-booking" element = {<AddBooking />} />
        <Route path="/booking-list" element = {<BookingDetails />} />
        <Route path="*" element = {<NotFound />} />
      </Routes> 
    )
   
};
export default Routers