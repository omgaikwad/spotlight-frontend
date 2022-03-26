import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="Signup">
      <Navbar />
      <main class="main-body">
        <div class="signup-container">
          <form>
            <h3 class="signup-heading">Sign Up</h3>

            <label for="form-first-name">First Name</label>
            <input id="form-first-name" type="text" placeholder="John" />

            <label for="form-last-name">Last Name</label>
            <input id="form-last-name" type="text" placeholder="Wick" />

            <label for="form-email">Email</label>
            <input id="form-email" type="email" placeholder="abc@xyz.com" />

            <label for="form-password">Create Password </label>
            <div class="create-password-container">
              <input
                id="form-password"
                type="password"
                placeholder="••••••••••••••"
              />
              <span class="password-eye-icon">
                <i class="fa-solid fa-eye"></i>
              </span>
            </div>

            <label for="form-password-again">Confirm Password </label>
            <div class="password-again-container">
              <input
                id="form-password-again"
                type="password"
                placeholder="••••••••••••••"
              />
              <span class="password-again-eye-icon">
                <i class="fa-solid fa-eye"></i>
              </span>
            </div>

            <div class="form-checkbox">
              <input type="checkbox" />
              <p>I agree to the terms and conditions.</p>
            </div>

            <div class="form-buttons">
              <button class="btn btn-primary signup-btn">Sign Up</button>
            </div>
            <div class="login-redirect-container">
              <a
                href="../login/login.html"
                class="login-redirect-link btn-link"
              >
                Already have an account{" "}
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Signup;
