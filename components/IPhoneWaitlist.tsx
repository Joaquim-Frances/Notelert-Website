'use client';

import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getDb } from '../lib/firebase';

export default function IPhoneWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const db = getDb();
      // Guardar el email en Firestore en la colección iPhoneList
      await addDoc(collection(db, 'iPhoneList'), {
        email: email.trim().toLowerCase(),
        subscribedAt: serverTimestamp(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown',
        platform: 'web_waitlist'
      });

      setStatus('success');
      setEmail('');
    } catch (error: any) {
      console.error('Error joining waitlist:', error);
      setStatus('error');
      setErrorMessage(
        error.message || 'Something went wrong. Please try again later.'
      );
    }
  };

  return (
    <section className="waitlist-section" id="iphone-waitlist">
      <div className="container">
        <div className="waitlist-box">
          <div className="waitlist-decor">
            <div className="glow glow-1"></div>
            <div className="glow glow-2"></div>
          </div>
          
          <div className="waitlist-content">
            <span className="badge">Coming Soon</span>
            <h2>Notelert for iPhone is coming!</h2>
            <p className="waitlist-subtitle">
              Obsidian notifications on your iOS device are closer than ever. Join our exclusive waiting list to get early beta access and be the first to experience seamless, smart reminders on your iPhone.
            </p>

            {status === 'success' ? (
              <div className="success-message">
                <div className="success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>You are on the list!</h3>
                <p>Thank you for subscribing. We will notify you as soon as the iOS beta is available.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="waitlist-form">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    required
                    aria-label="Email address for iPhone waiting list"
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <span className="spinner"></span>
                    ) : (
                      'Join the Waitlist'
                    )}
                  </button>
                </div>
                {status === 'error' && (
                  <p className="error-message" role="alert">
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .waitlist-section {
          padding: 6rem 0;
          background: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .waitlist-box {
          background: rgba(11, 3, 20, 0.45);
          border: 1px solid var(--border-subtle);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 32px;
          padding: 4.5rem 2rem;
          text-align: center;
          color: white;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 50px rgba(255, 49, 95, 0.05);
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .waitlist-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 122, 61, 0.4), transparent);
        }

        .waitlist-decor {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          z-index: -1;
          pointer-events: none;
        }

        .glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
        }

        .glow-1 {
          top: -100px;
          left: -100px;
          width: 350px;
          height: 350px;
          background: var(--primary-color);
        }

        .glow-2 {
          bottom: -150px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: var(--accent-color);
        }

        .waitlist-content {
          max-width: 650px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .badge {
          background: linear-gradient(135deg, #ff8a3d 0%, #ff315f 100%);
          color: white;
          font-size: 0.75rem;
          text-transform: uppercase;
          font-weight: 800;
          letter-spacing: 1.5px;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(255, 49, 95, 0.3);
          animation: pulse 2s infinite;
        }

        h2 {
          font-size: 2.75rem;
          margin-bottom: 1.25rem;
          font-weight: 900;
          letter-spacing: -0.5px;
          background: var(--gradient-logo);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .waitlist-subtitle {
          font-size: 1.15rem;
          margin-bottom: 3rem;
          color: var(--text-muted);
          line-height: 1.6;
          font-weight: 500;
        }

        .waitlist-form {
          width: 100%;
          max-width: 500px;
        }

        .input-group {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 122, 61, 0.15);
          padding: 0.4rem;
          border-radius: 16px;
          width: 100%;
          transition: all 0.3s ease;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .input-group:focus-within {
          border-color: var(--primary-color);
          box-shadow: 0 0 20px rgba(255, 49, 95, 0.15), inset 0 2px 4px rgba(0, 0, 0, 0.2);
          background: rgba(255, 255, 255, 0.05);
        }

        input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 0.8rem 1.2rem;
          color: white;
          font-size: 1rem;
          font-family: inherit;
          width: 100%;
        }

        input:focus {
          outline: none;
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .btn-primary {
          background: var(--gradient-logo);
          color: white;
          border: none;
          padding: 0.8rem 2rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(255, 49, 95, 0.2);
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 160px;
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 49, 95, 0.4);
          filter: brightness(1.1);
        }

        .btn-primary:active:not(:disabled) {
          transform: translateY(0);
        }

        .btn-primary:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }

        .error-message {
          color: #ff4e8a;
          font-size: 0.875rem;
          margin-top: 0.75rem;
          font-weight: 600;
          text-align: left;
          padding-left: 0.5rem;
        }

        .success-message {
          animation: fadeIn 0.5s ease forwards;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 0;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          background: rgba(0, 230, 118, 0.15);
          color: #00e676;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 20px rgba(0, 230, 118, 0.2);
          border: 1px solid rgba(0, 230, 118, 0.3);
        }

        .success-icon svg {
          width: 32px;
          height: 32px;
        }

        .success-message h3 {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
          font-weight: 800;
        }

        .success-message p {
          color: var(--text-muted);
          font-size: 1.05rem;
          font-weight: 500;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 4px 15px rgba(255, 49, 95, 0.3);
          }
          50% {
            box-shadow: 0 4px 25px rgba(255, 49, 95, 0.5);
          }
          100% {
            box-shadow: 0 4px 15px rgba(255, 49, 95, 0.3);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .waitlist-box {
            padding: 3rem 1.5rem;
            border-radius: 24px;
          }

          h2 {
            font-size: 2rem;
          }

          .waitlist-subtitle {
            font-size: 1rem;
            margin-bottom: 2rem;
          }

          .input-group {
            flex-direction: column;
            background: transparent;
            border: none;
            padding: 0;
            gap: 1rem;
            box-shadow: none;
          }

          .input-group:focus-within {
            box-shadow: none;
            background: transparent;
          }

          input {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 122, 61, 0.15);
            border-radius: 12px;
            padding: 1rem 1.2rem;
            text-align: center;
          }

          input:focus {
            border-color: var(--primary-color);
            background: rgba(255, 255, 255, 0.05);
          }

          .btn-primary {
            width: 100%;
            padding: 1rem;
            border-radius: 12px;
          }
          
          .error-message {
            text-align: center;
            padding-left: 0;
          }
        }
      `}</style>
    </section>
  );
}
