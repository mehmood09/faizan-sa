import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs';
import axios from "axios";
import '../../styles/view-employee.css';

const EmployeeTable = () => {
  const [userForm, setUserForm] = useState([]);
  const deleteBooking = (_id) => {
    axios
      .delete("http://localhost:4000/booking/delete-booking/" + _id)
      .then(() => {
        console.log("Booking Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/booking/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);

  return (
    <>
    
    <div className="table-wrapper">
    <table className='table'>
            <thead>
              <tr>
                <th >Employee Name</th>
                <th className='expand'>Email</th>
                <th>Password</th>
                <th>Phone No.</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                    <td>Faizan Aslam</td>
                    <td>Faizan@gmail.com</td>
                    <td>FaizanAslam</td>
                    <td>3133313</td>
                    <td><span className='label label-admin'>Admin</span></td>
                    <td>
                        <span className='actions'>
                            <BsFillTrashFill className='delete-btn' />
                            <BsFillPencilFill className='update-btn'/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Faizan Aslam</td>
                    <td>Faizan@gmail.com</td>
                    <td>FaizanAslam</td>
                    <td>3133313</td>
                    <td><span className='label label-user'>User</span></td>
                    <td>
                        <span className='actions'>
                        <BsFillTrashFill className='delete-btn' />
                        <BsFillPencilFill className='update-btn'/>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td>Faizan Aslam</td>
                    <td>Faizan@gmail.com</td>
                    <td>FaizanAslam</td>
                    <td>3133313</td>
                    <td><span className='label label-error'>User</span></td>
                    <td>
                        <span className='actions'>
                        <BsFillTrashFill className='delete-btn' />
                        <BsFillPencilFill className='update-btn'/>
                        </span>
                    </td>
                </tr>
              </tbody>
          </table>
        </div>

    </>
    
  )
}
export default EmployeeTable;
