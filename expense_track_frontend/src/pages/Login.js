import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Login = () => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (formData.email === "" || formData.email === null) {
            isValid = false;
            validationErrors.email = "Email required;";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isValid = false;
            validationErrors.email = "Email is not valid";
        }

        if (formData.password === "" || formData.password === null) {
            isValid = false;
            validationErrors.password = "Password required";
        }

        axios.get('http://localhost:8080/users', {
            maxRedirects: 5,  // Automatically follow up to 5 redirects
        })
            .then(result => {
                result.data.map(user => {
                    if (user.email === formData.email) {
                        if (user.password === formData.password) {
                            alert("Login successful");
                            navigate("/");
                        } else {
                            isValid = false;
                            validationErrors.password = "Wrong password";
                        }
                    } else if (formData.email !== "") {
                        isValid = true;
                        validationErrors.email = "Wrong Email";
                    }
                });
                setErrors(validationErrors);
                setValid(isValid);
            })
            .catch(error => {
                if (error.response && error.response.status === 302) {
                    const newLocation = error.response.headers.location;
                    // Navigate to the new location or handle it accordingly
                    navigate(newLocation);
                } else {
                    // Handle other errors
                    console.error("Error:", error);
                }
            });
    };
    return (
        <div className='col-sm-8 py-2 px-5 offset-2 shadow mt-4'>
            <h2
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                Login Here
            </h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                {
                    valid ? <></> : 
                    <span className='text-danger'>
                    {errors.email} {errors.password}
                    </span>
                }
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor='email'
                    >Email</label>
                    <input
                        className="form-control col-sm-6"
                        type="email"
                        name="email"
                        id='email'
                        placeholder="Enter Email"
                        value={formData.email}
                        required
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="input-group mb-5">
                    <label
                        className="input-group-text"
                        htmlFor='password'
                    >Password</label>
                    <input
                        className="form-control col-sm-6"
                        type="password"
                        name="password"
                        id='password'
                        placeholder="Enter password"
                        value={formData.password}
                        required
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="row mb-5">
                    <div className="col-sm-2">
                        <button
                            type="submit"
                            className="btn btn-outline-success btn-lg"
                        >
                            Login
                        </button>
                    </div>
                    <div className="col-sm-2">
                        <Link
                            to={"/register"}
                            className="btn btn-outline-info btn-lg"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
