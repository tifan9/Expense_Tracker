import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // listen the inputs
  const saveUser = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      await axios.post("http://localhost:8080/users", user);
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow mt-4">
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Register Here
      </h2>
      <form onSubmit={(e) => saveUser(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="username">
            Username
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="username"
            id="usename"
            placeholder="Enter a username"
            value={username}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            required
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="password">
            Password
          </label>
          <input
            className="form-control col-sm-6"
            type="password"
            name="password"
            id="password"
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
              Register
            </button>
          </div>
          <div className="col-sm-2">
            <Link
              to={"/login"}
              type="submit"
              className="btn btn-outline-info btn-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
