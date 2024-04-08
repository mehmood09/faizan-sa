import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function EmployeeList() {
  const [userForm, setUserForm] = useState([]);
  const deleteStudent = (_id) => {
    axios
      .delete("http://localhost:4000/operator/delete-employee/" + _id)
      .then(() => {
        console.log("Employee Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/operator/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div>
      <table className="table width:100%">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Employee Name</th>
            <th scope="col">CNIC</th>
            <th scope="col">Department</th>
            <th scope="col">Emp No.</th>
            <th scope="col">Issue Date</th>
            <th scope="col">Return Date</th>
            <th scope="col">Mobile No.</th>
            
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.cnic}</td>
                <td>{user.depname}</td>
                <td>{user.empnum}</td>
                <td>{user.idate}</td>
                <td>{user.rdate}</td>
                <td>{user.mobile}</td>                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeList;