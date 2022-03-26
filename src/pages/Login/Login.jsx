import React from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <Navbar />

      <main class="main-body">
        <div class="login-container">
          <form>
            <h3 class="login-heading">Login</h3>

            <label for="form-email">Email</label>
            <input id="form-email" type="email" placeholder="abc@xyz.com" />

            <label for="form-password">Password</label>
            <div class="login-password-container">
              <input
                id="form-password"
                type="password"
                placeholder="••••••••••••••"
              />
              <span class="login-password-eye-icon">
                <i class="fa-solid fa-eye"></i>
              </span>
            </div>

            <div class="form-checkbox">
              <div class="checkbox-container">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <a href="" class="forgot-password">
                Forgot your Password?
              </a>
            </div>

            <div class="form-buttons">
              <button class="btn btn-primary login-btn">Login</button>
            </div>
            <div class="signup-redirect-container">
              <Link to="/signup" class="signup-redirect-link btn-link">
                Create New Account <i class="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
