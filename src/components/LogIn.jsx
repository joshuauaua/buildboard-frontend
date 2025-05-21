import React from "react";
import "./LogIn.css";

function SignInForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Sign in to your account</p>

        <div className="input-container">
          <input type="email" placeholder="Enter email" required />
          <span></span>
        </div>

        <div className="input-container">
          <input type="password" placeholder="Enter password" required />
        </div>

        <button type="submit" className="submit">
          Sign in
        </button>

        <p className="signup-link">
          No account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}

export default SignInForm;