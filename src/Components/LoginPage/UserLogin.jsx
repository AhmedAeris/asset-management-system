import React from "react";
import './UserLogin.css';
import BrandLogo from '../Assets/BrandLogo.png';
import BackgroundImage from '../Assets/BackgroundImage.png';

const UserLogin = () => {
  return (
    <div className="login-container">
      {/* Left Panel: Logo and Form */}
      <div className="login-panel">
        <div className="logo-wrapper">
          <img src={BrandLogo} alt="Brand Logo" />
        </div>
        <div className="title-wrapper">
          <h2>Sign In</h2>
        </div>
        <div className="form-wrapper">
          <form>
            <div className="input-field">
              <input 
                type="email" 
                className="email-field" 
                placeholder="Email Address" 
                required 
              />
            </div>
            <div className="input-field">
              <input 
                type="password" 
                className="password-field" 
                placeholder="Password" 
                required 
              />
            </div>
            <div className="options-wrapper">
              <label>
                <input type="checkbox" className="remember-me-checkbox" /> Keep me logged in
              </label>
              <a href="/reset-password" className="reset-link">Forgot your password?</a>
            </div>
            <button type="submit" className="login-btn">Sign In</button>
          </form>
        </div>
      </div>

      {/* Right Panel: Background Image */}
      <div className="image-panel">
        <img src={BackgroundImage} alt="Login Background" />
      </div>
    </div>
  );
};

export default UserLogin;
