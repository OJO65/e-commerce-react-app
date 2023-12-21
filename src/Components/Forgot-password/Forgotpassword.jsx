import React from "react";
import "./Forgotpassword.css";
const Forgotpassword = () => {
  return (
    <>
      <div className="password-container">
        <div className="form-group">
          <h1>Forgot Password</h1>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Reset Password"
          />
          <button>Send reset password link</button>
          <h2>
            <span>
              Have an acount?<a href="Login">Login here</a>
            </span>
          </h2>
          <h2>
            <span>
              No Account?<a href="signup">Signup here</a>
            </span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
