import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const Login = () => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const { email, password } = credentials;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

      const loginUser = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        try {
          // Make a request to your login API endpoint
          // Replace "http://localhost:8080/login" with your actual endpoint
          const response = await axios.post("http://localhost:8080/users", credentials);
          
          // Assuming your server returns a token on successful login
          const token = response.data.token;
    
          // Store the token in local storage or a secure storage mechanism
          localStorage.setItem("token", token);
    
          // Redirect to a protected route or dashboard
          navigate("/");
        } catch (err) {
          setError("Invalid credentials. Please try again."); // Update with a more informative error message
        } finally {
          setLoading(false);
        }
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
            <form onSubmit={(e) => loginUser(e)}>
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
                        value={email}
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
                        value={password}
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
