import React, { useEffect, useState } from "react";
import axios from "axios";

function CreateEmployee() {
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
    const inputsHandler = (e) => {
        setUserForm((prevNext) => ({
            ...prevNext,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:4000/operator/create-employee", userForm)
            .then((res) => {
                console.log(res.data);
                setUserForm({
                    name: "",
                    cnic: "",
                    depname: "",
                    empnum: "",
                    idate: "",
                    rdate: "",
                    mobile: "",
                    email: "",
                });
            });
    };
    useEffect(() => { }, []);
    return (
        <div>
            <div className="form-wrapper">
                <form onSubmit={onSubmit}>
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateEmployee;