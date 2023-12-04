import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <>
      <div className="signup-group">
        <h1>Sign Up</h1>
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
        <input
          type="confirm-password"
          id="confirm-password"
          name="confirm-password"
          placeholder="confrim password"
          required
        />
        <div className="button">
          <button>Sign Up</button>
        </div>
        <div class="bottom-text">
          <div>
            <span>
              Have an account? <a href="Login">Login here</a>
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

export default Signup;
