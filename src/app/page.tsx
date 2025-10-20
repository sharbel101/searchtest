'use client';
import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/components/database/zustand_containers/UsersInfo';

export default function Login() {
  const supabase = createClient();
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    console.log('Login attempt:', { username, password, rememberMe });

    if (!username || !password) {
      setError('Please provide both username and password');
      return;
    }

    const { data, error } = await supabase
      .from('users')
      .select('user_id')
      .eq('username', username)
      .eq('password', password)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      setError('An error occurred while logging in.');
      return;
    }

    if (!data) {
      setError("This user isn't registered. Please sign up first");
      return;
    }

    if (data) {
      const { setCurrentUserId } = useUserInfo.getState();
      console.log('logged in successfully.');
      setCurrentUserId(data.user_id);
      router.push('/chatbot');
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
          <p
            className="login-subtitle text-gray-400"
            style={{ marginTop: '2rem' }}
          >
            CapBot is an AI-powered fintech platform that helps investors
            discover, analyze, and connect with promising companies.
          </p>
          <div style={{ flex: 1 }} />
          <p
            className="login-subtitle text-gray-400 font-bold"
            style={{
              fontSize: '1.4rem',
              lineHeight: '2.0rem',
              marginTop: '4rem',
            }}
          >
            Sign in to continue
          </p>
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
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
            placeholder="Username"
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

          {/* ✅ Error & Message Display */}
          {error && (
            <p
              className="login-subtitle text-red-500 font-semibold"
              style={{ marginTop: '0.5rem', textAlign: 'center' }}
            >
              {error}
            </p>
          )}
          {message && (
            <p
              className="login-subtitle text-green-500 font-semibold"
              style={{ marginTop: '0.5rem', textAlign: 'center' }}
            >
              {message}
            </p>
          )}

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
}
