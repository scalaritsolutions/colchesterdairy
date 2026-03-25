import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react';
import '../login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src="./logo.png" alt="Colchester Dairy" className="login-logo" />
        
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Fresh milk, local dairy, delivered to your door.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-wrapper">
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                className="login-input" 
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <label className="form-label" style={{ marginBottom: 0 }}>Password</label>
              <a href="#" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none' }}>Forgot?</a>
            </div>
            <div className="input-wrapper">
              <Lock className="input-icon" size={20} />
              <input 
                type="password" 
                className="login-input" 
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="login-btn-submit">
            Start Your Morning <Sparkles size={20} />
          </button>
        </form>

        <div className="login-footer">
          <p>New to Colchester Dairy?</p>
          <a href="/register" className="register-link">
            Become a Customer <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
