import React from "react";
import "./Signup.css";
const Signup = () => {
  return (
    <>
      <div className="signup-container">
        <div className="form-group">
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
          <button>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Signup;
