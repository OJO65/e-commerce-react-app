import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
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
        <div className="button">
          <button className="button">Login</button>
        </div>
        <div class="bottom-text">
          <div>
            <span>
              No account? <a href="Signup">Sign up here</a>
            </span>
          </div>
          <div>
            <span>
              Forgot password? <a href="Forgotpassword">Reset password here</a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;