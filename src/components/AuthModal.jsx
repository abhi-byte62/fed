import React, { useState } from 'react';

export default function AuthModal({ isOpen, onClose, onLogin }) {
  const [mode, setMode] = useState('signin'); // 'signin' or 'signup'
  const [role, setRole] = useState('student'); // for signup
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin) {
      onLogin(mode === 'signup' ? name : 'User');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{mode === 'signin' ? 'Welcome Back' : 'Join CampusEats'}</h2>
          <p>{mode === 'signin' ? 'Sign in to track your orders' : 'Create an account to skip the lines'}</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Dr. Jane Doe / John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          )}

          <div className="form-group">
            <label>University Email</label>
            <input type="email" placeholder="example@university.edu" required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>

          {mode === 'signup' && (
            <div className="form-group">
              <label>I am a:</label>
              <div className="role-toggle-group">
                <button 
                  type="button" 
                  className={`role-toggle-btn ${role === 'lecturer' ? 'active lecturer-active' : ''}`}
                  onClick={() => setRole('lecturer')}
                >
                  Faculty / Lecturer
                </button>
                <button 
                  type="button" 
                  className={`role-toggle-btn ${role === 'student' ? 'active student-active' : ''}`}
                  onClick={() => setRole('student')}
                >
                  Student
                </button>
              </div>
            </div>
          )}

          <button type="submit" className="btn-glow auth-submit-btn">
            {mode === 'signin' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="modal-footer">
          {mode === 'signin' ? (
            <p>Don't have an account? <span onClick={() => setMode('signup')} className="auth-link">Sign Up</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setMode('signin')} className="auth-link">Sign In</span></p>
          )}
        </div>
      </div>
    </div>
  );
}
