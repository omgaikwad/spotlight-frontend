import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordAgain: "",
  });

  const { auth, setAuth } = useAuthContext();

  const navigate = useNavigate();

  const axios = require("axios").default;

  const [showPasswords, setShowPasswords] = useState({
    password: false,
    passwordAgain: false,
  });

  const [showSignupError, setShowSignupError] = useState({
    showError: false,
    message: "",
  });

  const signupHandler = (e) => {
    e.preventDefault();

    if (signupData.password != signupData.passwordAgain) {
      setShowSignupError({
        showError: true,
        message: "Given Passwords does not match!",
      });
    } else {
      setShowSignupError({ ...showSignupError, showError: false });
      setSignupData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordAgain: "",
      });

      const createNewUser = async () => {
        try {
          const response = await axios.post("/api/auth/signup", {
            firstName: signupData.firstName,
            lastName: signupData.lastName,
            email: signupData.email,
            password: signupData.password,
          });

          localStorage.setItem("USER_TOKEN", response.data.encodedToken);
          localStorage.setItem(
            "USER_DATA",
            JSON.stringify({
              firstName: response.data.createdUser.firstName,
              lastName: response.data.createdUser.lastName,
              email: response.data.createdUser.email,
            })
          );

          setAuth({
            isLoggedIn: true,
            token: response.data.encodedToken,
            user: {
              firstName: response.data.createdUser.firstName,
              lastName: response.data.createdUser.lastName,
              email: response.data.createdUser.email,
            },
          });
          navigate("/explore");
          console.log(response);
        } catch (err) {
          console.log(err);
          setShowSignupError({
            showError: true,
            message: "Account already exists, please Login",
          });
        }
      };

      createNewUser();
    }
  };

  return (
    <div className="Signup">
      <Navbar />
      <main className="main-body">
        <div className="signup-container">
          <form onSubmit={signupHandler}>
            <h3 className="signup-heading">Sign Up</h3>

            <label htmlFor="form-first-name">First Name</label>
            <input
              onChange={(e) =>
                setSignupData({ ...signupData, firstName: e.target.value })
              }
              value={signupData.firstName}
              id="form-first-name"
              type="text"
              placeholder="John"
              required
            />

            <label htmlFor="form-last-name">Last Name</label>
            <input
              onChange={(e) =>
                setSignupData({ ...signupData, lastName: e.target.value })
              }
              value={signupData.lastName}
              id="form-last-name"
              type="text"
              placeholder="Wick"
              required
            />

            <label htmlFor="form-email">Email</label>
            <input
              onChange={(e) =>
                setSignupData({ ...signupData, email: e.target.value })
              }
              value={signupData.email}
              id="form-email"
              type="email"
              placeholder="abc@xyz.com"
              required
            />

            <label htmlFor="form-password">Create Password </label>
            <div className="create-password-container">
              <input
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                value={signupData.password}
                minLength="6"
                id="form-password"
                type={showPasswords.password ? "text" : "password"}
                placeholder="??????????????????????????????????????????"
                required
              />
              <span className="password-eye-icon">
                {showPasswords.password ? (
                  <i
                    onClick={() =>
                      setShowPasswords({
                        ...showPasswords,
                        password: !showPasswords.password,
                      })
                    }
                    className="fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      setShowPasswords({
                        ...showPasswords,
                        password: !showPasswords.password,
                      })
                    }
                    className="fa-solid fa-eye-slash"
                  ></i>
                )}
              </span>
            </div>

            <label htmlFor="form-password-again">Confirm Password </label>
            <div className="password-again-container">
              <input
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    passwordAgain: e.target.value,
                  })
                }
                value={signupData.passwordAgain}
                minLength="6"
                id="form-password-again"
                type={showPasswords.passwordAgain ? "text" : "password"}
                placeholder="??????????????????????????????????????????"
                required
              />
              <span className="password-eye-icon">
                {showPasswords.passwordAgain ? (
                  <i
                    onClick={() =>
                      setShowPasswords({
                        ...showPasswords,
                        passwordAgain: !showPasswords.passwordAgain,
                      })
                    }
                    className="fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() =>
                      setShowPasswords({
                        ...showPasswords,
                        passwordAgain: !showPasswords.passwordAgain,
                      })
                    }
                    className="fa-solid fa-eye-slash"
                  ></i>
                )}
              </span>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" required />
              <p>I agree to the terms and conditions.</p>
            </div>

            {showSignupError.showError ? (
              <div className="signup-error-container">
                <p className="signup-error"> {showSignupError.message} </p>
              </div>
            ) : null}

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary signup-btn">
                Sign Up
              </button>
            </div>
            <div className="login-redirect-container">
              <Link to="/login" className="login-redirect-link btn-link">
                Already have an account
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
