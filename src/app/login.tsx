import React, { useState } from 'react';
import './login.css'; // Import the CSS file

interface LoginProps {
  onLogin?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Login attempt:', { email, password, rememberMe });
    if (onLogin) {
      onLogin();
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleSignUp = () => {
    console.log('Sign up clicked');
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>

      <div className="login-card">
        {/* Header */}
        <div className="login-header text-center">
          <div className="logo-container">
            <img
              src="/assets/chatbot/v2/capbot_logo.png"
              className="logo"
              alt="CapBot Logo"
            />
          </div>
          <h1 className="login-title text-2xl font-bold">CapBot</h1>
          <p className="login-subtitle text-gray-400">Sign in to continue</p>
        </div>

        {/* Form */}
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            placeholder="Email"
            required
          />

          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            placeholder="Password"
            required
          />

          {/* Remember Me & Forgot Password */}
          <div className="login-options">
            <div className="login-checkbox-container">
              <div
                className={`login-checkbox ${rememberMe ? 'checked' : ''}`}
                onClick={() => setRememberMe(!rememberMe)}
              >
                <svg
                  className="login-checkbox-icon"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <label
                className="login-checkbox-label"
                onClick={() => setRememberMe(!rememberMe)}
              >
                Remember me
              </label>
            </div>
            <button
              type="button"
              onClick={handleForgotPassword}
              className="login-forgot"
            >
              Forgot?
            </button>
          </div>

          {/* Login Button */}
          <button type="submit" className="login-button">
            Sign In
          </button>

          {/* Sign Up Link */}
          <div className="login-signup">
            <button
              type="button"
              onClick={handleSignUp}
              className="login-signup-button"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
