import React from "react";
import "./Forgotpassword.css";
const Forgotpassword = () => {
  return (
    <div className="password">
      <h1>Forgot Password</h1>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Reset Password"
      />
      <div className="buttonpassword">
        <button className="button">Send reset password link</button>
      </div>
      <div class="bottom-text">
        <div>
          <span>
            Have an account? <a href="Login">Login here</a>
          </span>
        </div>
        <div>
          <span>
            No Account? <a href="Signup">Sign up here</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
