import React from 'react';
import { Link } from 'react-router-dom';
import './SignUpNew.css';
import PublicNavbar from '../components/navbar/PublicNavbar';
import LoginBackground from '../components/LoginBackground';

export default function SignUp() {
  return (

    <>
    <PublicNavbar />

    <div className="login-container">

    <LoginBackground />

    <form className="form">
      <p className="form-title">Registrera</p>
      <p className="form-subtitle">Skapa ett gratis konto med din e-post.</p>




      <div className="input-container">
        <input type="name" placeholder="Fullständigt namn" />
        <span></span>
      </div>

      <div className="input-container">
        <input type="email" placeholder="Ange e-postadress" />
        <span></span>
      </div>

      <div className="input-container">
        <input type="password" placeholder="Ange lösenord" />
      </div>

      <button type="submit" className="submit">
        Registrera
      </button>

      <p className="signup-link">
        Inget konto? <Link to="/log-in">Logga in</Link>
      </p>
    </form>

    </div>
    </>
  );
}