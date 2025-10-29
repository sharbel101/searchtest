'use client';
import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { useRouter } from 'next/navigation';
import { createClient } from '@/utils/supabase/client';
import { useUserInfo } from '@/components/database/zustand_containers/UsersInfo';

export default function Login() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async () => {
    console.log('Login attempt:', { email, password, rememberMe });

    if (!email || !password) {
      setError('Please provide both email and password');
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Supabase error:', error);
      setError(error.message);
      return;
    }

    if (data.user) {
      const { setCurrentUserId } = useUserInfo.getState();
      console.log('logged in successfully.');
      setCurrentUserId(data.user.id);
      router.push('/chatbot');
    }
  };

  const handleSignUp = async () => {
    console.log('Sign up attempt:', { email, password, username });

    if (!email || !password || !username) {
      setError('Please provide email, password, and username');
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) {
      console.error('Supabase error:', error);
      setError(error.message);
      return;
    }

    if (data.user) {
      setMessage(
        'Sign up successful! Please check your email to verify your account.',
      );
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
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
            {isSignUp ? 'Create an account' : 'Sign in to continue'}
          </p>
        </div>

        {/* Form */}
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            if (isSignUp) {
              handleSignUp();
            } else {
              handleLogin();
            }
          }}
        >
          {isSignUp && (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
              placeholder="Username"
              required
            />
          )}
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
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>

          {/* Sign Up Link */}
          <div className="login-signup">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="login-signup-button"
            >
              {isSignUp ? 'Already have an account? Sign In' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
