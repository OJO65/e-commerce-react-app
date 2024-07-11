import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="form-group">
          <h1>Login</h1>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          <button>Login</button>
          <div className="btm">
            <div className="btm-row">
            <h2>No acount?</h2>
            <span>
              <a href="Signup">Sign up here</a>
            </span>
            </div>
            <div className="btm-row">
            <h2>Forgot Password?</h2>
            <span>
              <a href="Forgotpassword">Reset Password</a>
            </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
