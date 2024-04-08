import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
function EditEmployee() {
  const [userForm, setUserForm] = useState({
    name: "",
    cnic: "",
    depname: "",
    empnum: "",
    idate: "",
    rdate: "",
    mobile: "",
    email: "",
  });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/operator/update-employee/" + params.id, {
        name: userForm.name,
        cnic: userForm.cnic,
        depname: userForm.depname,
        empnum: userForm.empnum,
        idate: userForm.idate,
        rdate: userForm.rdate,
        mobile: userForm.mobile,
        email: userForm.email,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/employee-list");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/operator/get-employee/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          cnic: res.data.data.cnic,
        depname: res.data.data.depname,
        empnum: res.data.data.empnum,
        idate: res.data.data.idate,
        rdate: res.data.data.rdate,
        mobile: res.data.data.mobile,
        email: res.data.data.email,
        });
      });
  }, []);
  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          
        <div className="mb-3">
                        <label className="form-label">Employee Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            value={userForm.name}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee CNIC</label>
                        <input
                            type="number"
                            className="form-control"
                            name="cnic"
                            id="cnic"
                            value={userForm.cnic}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Department</label>
                        <input
                            type="text"
                            className="form-control"
                            name="depname"
                            id="depname"
                            value={userForm.depname}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Employee Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="empnum"
                            id="empnum"
                            value={userForm.empnum}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Issue Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="idate"
                            id="idate"
                            value={userForm.idate}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Return Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="rdate"
                            id="rdate"
                            value={userForm.rdate}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Mobile Number</label>
                        <input
                            type="number"
                            className="form-control"
                            name="mobile"
                            id="mobile"
                            value={userForm.mobile}
                            onChange={inputsHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            id="email"
                            value={userForm.email}
                            onChange={inputsHandler}
                        />
                    </div>                    


          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditEmployee;