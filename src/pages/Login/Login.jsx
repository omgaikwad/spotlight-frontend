import React from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <Navbar />

      <main className="main-body">
        <div className="login-container">
          <form>
            <h3 className="login-heading">Login</h3>

            <label for="form-email">Email</label>
            <input id="form-email" type="email" placeholder="abc@xyz.com" />

            <label for="form-password">Password</label>
            <div className="login-password-container">
              <input
                id="form-password"
                type="password"
                placeholder="••••••••••••••"
              />
              <span className="password-eye-icon">
                <i className="fa-solid fa-eye"></i>
              </span>
            </div>

            <div className="form-checkbox">
              <div className="checkbox-container">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <a href="" className="forgot-password">
                Forgot your Password?
              </a>
            </div>

            <div className="form-buttons">
              <button className="btn btn-primary login-btn">Login</button>
            </div>
            <div className="signup-redirect-container">
              <Link to="/signup" className="signup-redirect-link btn-link">
                Create New Account <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
