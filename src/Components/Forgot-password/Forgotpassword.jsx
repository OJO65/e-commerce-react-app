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
          <div className="btm">
            <div className="btm-row">
              <h2>Have an acount?</h2>
              <span>
                <a href="Login">Login here</a>
              </span>
            </div>
            <div className="btm-row">
              <h2>No Account?</h2>
              <span>
                <a href="signup">Signup here</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
