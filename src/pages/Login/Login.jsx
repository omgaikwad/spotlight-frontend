import React, { useState } from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/auth-context";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { auth, setAuth } = useAuthContext();

  const navigate = useNavigate();

  const axios = require("axios").default;

  const [showPassword, setShowPassword] = useState(false);

  const [showLoginError, setShowLoginError] = useState({
    showError: true,
    errorMessage: "Login to added videos to Playlist",
  });

  const loginExistingUser = async () => {
    try {
      const response = await axios.post("/api/auth/login", loginData);

      localStorage.setItem("USER_TOKEN", response.data.encodedToken);
      localStorage.setItem(
        "USER_DATA",
        JSON.stringify({
          firstName: response.data.foundUser.firstName,
          lastName: response.data.foundUser.lastName,
          email: response.data.foundUser.email,
        })
      );

      setAuth({
        isLoggedIn: true,
        token: response.data.encodedToken,
        user: {
          firstName: response.data.foundUser.firstName,
          lastName: response.data.foundUser.lastName,
          email: response.data.foundUser.email,
        },
      });

      navigate("/explore");
      console.log(response);
    } catch (err) {
      console.log(err);
      setShowLoginError({
        showError: true,
        errorMessage: "Email or Password is wrong",
      });
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(loginData);
    setLoginData({
      email: "",
      password: "",
    });

    loginExistingUser();
  };

  const guestLoginHandler = (e) => {
    setLoginData({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika123",
    });

    loginExistingUser();
  };

  return (
    <div className="Login">
      <Navbar />

      <main className="main-body">
        <div className="login-container">
          <form onSubmit={loginHandler}>
            <h3 className="login-heading">Login</h3>

            <label htmlFor="form-email">Email</label>
            <input
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
              value={loginData.email}
              id="form-email"
              type="email"
              placeholder="abc@xyz.com"
              required
            />

            <label htmlFor="form-password">Password</label>
            <div className="login-password-container">
              <input
                onChange={(e) =>
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  })
                }
                value={loginData.password}
                id="form-password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••••••"
                required
              />
              <span className="password-eye-icon">
                {showPassword ? (
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className="fa-solid fa-eye"
                  ></i>
                ) : (
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className="fa-solid fa-eye-slash"
                  ></i>
                )}
              </span>
            </div>

            {/* Show Error  */}

            {showLoginError.showError && (
              <p className="show-error-text"> {showLoginError.errorMessage} </p>
            )}

            <div className="form-buttons">
              <button
                type="submit"
                className="btn btn-outline-primary login-btn-primary"
              >
                Login
              </button>
              <button
                onClick={guestLoginHandler}
                className="btn btn-primary login-btn"
              >
                Login as Guest
              </button>
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
