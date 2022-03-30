import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="Signup">
      <Navbar />
      <main className="main-body">
        <div className="signup-container">
          <form>
            <h3 className="signup-heading">Sign Up</h3>

            <label for="form-first-name">First Name</label>
            <input id="form-first-name" type="text" placeholder="John" />

            <label for="form-last-name">Last Name</label>
            <input id="form-last-name" type="text" placeholder="Wick" />

            <label for="form-email">Email</label>
            <input id="form-email" type="email" placeholder="abc@xyz.com" />

            <label for="form-password">Create Password </label>
            <div className="create-password-container">
              <input
                id="form-password"
                type="password"
                placeholder="••••••••••••••"
              />
              <span className="password-eye-icon">
                <i className="fa-solid fa-eye"></i>
              </span>
            </div>

            <label for="form-password-again">Confirm Password </label>
            <div className="password-again-container">
              <input
                id="form-password-again"
                type="password"
                placeholder="••••••••••••••"
              />
              <span className="password-again-eye-icon">
                <i className="fa-solid fa-eye"></i>
              </span>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" />
              <p>I agree to the terms and conditions.</p>
            </div>

            <div className="form-buttons">
              <button className="btn btn-primary signup-btn">Sign Up</button>
            </div>
            <div className="login-redirect-container">
              <Link to="/login" className="login-redirect-link btn-link">
                Already have an account{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
