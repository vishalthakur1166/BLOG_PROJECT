import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Base from '../Components/Base';
import './Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../Services/user-service';
import { doLogin } from '../Auth';

const Login = () => {
  const navigate = useNavigate(); // ✅ for redirection

  const [loginDetail, setLoginDetail] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e, field) => {
    let actualValue = e.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);

    // Validation
    if (loginDetail.username.trim() === '') {
      toast.error("Email is required!");
      return;
    }

    if (loginDetail.password.trim() === '') {
      toast.error("Password is required!");
      return;
    }

    // Login service
    login(loginDetail)
      .then((jwtTokenData) => {
        console.log("User logged in!");
        console.log(jwtTokenData);

        // Save token in localStorage
        doLogin(jwtTokenData, () => {
          console.log("Login detail saved to LocalStorage...");
          toast.success("Login successful!");

          // ✅ Redirect to dashboard
          navigate("/user/dashboard");
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed! Please check credentials.");
      });
  };

  return (
    <Base>
      <div className="login-background">
        <div className="login-container">
          <h2 className="mb-4 text-center text-primary">Login to Your Account</h2>
          <form onSubmit={handleFormSubmit} className="login-form">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={loginDetail.username}
                onChange={(e) => handleChange(e, 'username')}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={loginDetail.password}
                onChange={(e) => handleChange(e, 'password')}
                required
              />
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </Base>
  );
};

export default Login;
