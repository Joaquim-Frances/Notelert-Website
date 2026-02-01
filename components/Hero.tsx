'use client';

import React from 'react';
import PhoneFrame from './PhoneFrame';
import Logo from './Logo';

export default function Hero() {
  const title = 'Notelert';
  const subtitle = 'Obsidian Notifications: push, locations, emails, and more...';
  
  const installSteps = [
    {
      title: 'Install BRAT',
      description: 'Find "Obsidian 42 - BRAT" in Community Plugins and install it.'
    },
    {
      title: 'Add Beta Plugin',
      description: 'Open BRAT settings, click "Add Beta plugin".'
    },
    {
      title: 'Paste Repository',
      description: 'Enter: https://github.com/Joaquim-Frances/obsidian-notelert-plugin',
      isCopyable: true,
      copyValue: 'https://github.com/Joaquim-Frances/obsidian-notelert-plugin'
    },
    {
      title: 'Enable Plugin',
      description: 'Click "Add Plugin" and enable Notelert in Community Plugins.'
    }
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="content">
          <div className="beta-indicator">
            <span className="beta-badge">OPEN BETA</span>
            <span className="beta-dot"></span>
          </div>
          <div className="logo-container">
            <Logo 
              width={120} 
              height={120}
              className="logo"
              priority
            />
          </div>
          <h1>
            {title}
            <span className="beta-tag">Beta</span>
          </h1>
          <p className="subtitle">{subtitle}</p>
          <p className="beta-notice">
            🚀 <strong>Now in Open Beta!</strong> Download Notelert from Google Play and help us improve. 
            Your feedback shapes the future of the app.
          </p>
          <p className="description">
            Tired of writing important notes in Obsidian only to forget checking them when it matters most? 
            <strong> Notelert</strong> is the missing bridge between your brain, your notes, and the real world.
          </p>
          <div className="cta-group">
            <a 
              href="https://play.google.com/store/apps/details?id=com.quim79.notelert" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn primary"
            >
              <img 
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                alt="Get it on Google Play"
                className="play-badge-inline"
              />
            </a>
          </div>

          <div className="install-guide">
            <h3>How to Install Beta Plugin</h3>
            <div className="steps-container">
              {installSteps.map((step, index) => (
                <div key={index} className="step-item">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                    {step.isCopyable && (
                      <div className="copy-box">
                        <code>{step.copyValue}</code>
                        <button 
                          onClick={() => {
                            if (typeof navigator !== 'undefined') {
                              navigator.clipboard.writeText(step.copyValue!);
                            }
                          }}
                          className="copy-btn"
                          title="Copy to clipboard"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="privacy-notice">
            By using Notelert, you agree to our <a href="https://notelert.com/privacy/" className="privacy-link-inline">Privacy Policy</a> and <a href="https://notelert.com/terms/" className="privacy-link-inline">Terms of Service</a>.
          </p>
        </div>
        <div className="visual">
          <div className="hero-frame-wrapper">
            <PhoneFrame src="/1.jpg" alt="Notelert App Screenshot" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 8rem 0 6rem;
          background: #000000;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(192, 132, 252, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .beta-indicator {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .beta-badge {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        }

        .beta-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, #ffffff 0%, #a882ff 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          font-weight: 500;
          letter-spacing: -0.02em;
        }

        .beta-tag {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          background-clip: unset;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: white;
          box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
        }

        .beta-notice {
          background: rgba(245, 158, 11, 0.1);
          border-left: 3px solid #f59e0b;
          padding: 1rem 1.5rem;
          border-radius: 8px;
          margin-bottom: 2rem;
          font-size: 1rem;
          color: var(--text-normal);
          line-height: 1.6;
        }

        .beta-notice strong {
          color: #f59e0b;
        }

        .logo-container {
          margin-bottom: 2rem;
          display: flex;
          justify-content: flex-start;
        }

        .logo {
          width: 120px;
          height: 120px;
          border-radius: 24px;
          box-shadow: 0 8px 24px rgba(124, 58, 237, 0.3);
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05) rotate(5deg);
        }

        .subtitle {
          font-size: 1.5rem;
          color: var(--text-normal);
          margin-bottom: 1.5rem;
          font-weight: 300;
          letter-spacing: 0.05em;
        }

        .description {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
          max-width: 500px;
          font-weight: 400;
        }

        .description strong {
          color: var(--text-accent);
          font-weight: 600;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .btn {
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .btn.primary {
          background-color: var(--primary-color);
          color: white;
          padding: 0;
          overflow: hidden;
          border: none;
        }

        .play-badge-inline {
          height: 50px;
          width: auto;
          display: block;
          transition: transform 0.3s ease;
        }

        .btn.primary:hover .play-badge-inline {
          transform: scale(1.05);
        }

        .btn.secondary {
          background-color: var(--bg-secondary);
          color: var(--text-normal);
          border: 1px solid var(--border-subtle);
        }

        .btn.secondary.active {
          background-color: var(--primary-color);
          color: white;
          border-color: var(--primary-color);
        }

        .install-guide {
          opacity: 1;
          background: rgba(124, 58, 237, 0.02);
          border-radius: 16px;
          margin-bottom: 2rem;
          padding: 2rem;
          border: 1px solid rgba(124, 58, 237, 0.1);
          backdrop-filter: blur(10px);
        }

        .install-guide h3 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: var(--text-normal);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .steps-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .step-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .step-number {
          width: 28px;
          height: 28px;
          background: var(--primary-color);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 700;
          flex-shrink: 0;
        }

        .step-content h4 {
          font-size: 1rem;
          margin-bottom: 0.25rem;
          color: var(--text-normal);
        }

        .step-content p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .copy-box {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(0, 0, 0, 0.2);
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          margin-top: 0.75rem;
          border: 1px solid var(--border-subtle);
        }

        .copy-box code {
          font-size: 0.85rem;
          color: var(--accent-color);
          font-family: monospace;
          word-break: break-all;
        }

        .copy-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .copy-btn:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .privacy-notice {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          max-width: 500px;
        }

        .privacy-link-inline {
          color: var(--primary-color);
          text-decoration: underline;
          transition: color 0.2s;
        }

        .privacy-link-inline:hover {
          color: var(--accent-color);
        }

        .visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hero-frame-wrapper {
          transform: rotate(-5deg);
          transition: transform 0.3s ease;
        }

        .hero-frame-wrapper:hover {
          transform: rotate(0deg) scale(1.02);
        }

        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 3rem;
          }

          .logo-container {
            justify-content: center;
          }

          .description {
            margin: 0 auto 2rem;
          }

          .cta-group {
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }

          .install-guide {
            text-align: left;
          }
          
          .hero-frame-wrapper {
            transform: none;
          }

          h1 {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
