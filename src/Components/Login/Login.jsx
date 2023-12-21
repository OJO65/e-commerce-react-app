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
          <h2>
            <span>
              No acount?<a href="Signup">Sign up here</a>
            </span>
          </h2>
          <h2>
            <span>
              Forgot Password?<a href="Forgotpassword">Reset Password</a>
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
