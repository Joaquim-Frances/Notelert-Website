'use client';

import PhoneFrame from './PhoneFrame';
import Logo from './Logo';

export default function Hero() {
  const title = 'Notelert';
  const subtitle = 'Obsidian Notifications: push, locations, emails, and more...';
  
  return (
    <section className="hero">
      <div className="beta-banner">
        <span className="beta-badge">BETA</span>
        <span className="beta-text">Notelert is now in open beta! Download from Google Play and help us improve.</span>
      </div>
      <div className="container">
        <div className="content">
          <div className="logo-container">
            <Logo 
              width={120} 
              height={120}
              className="logo"
              priority
            />
          </div>
          <h1>{title}</h1>
          <p className="subtitle">{subtitle}</p>
          <p className="description">
            Tired of writing important notes in Obsidian only to forget checking them when it matters most? 
            <strong> Notelert</strong> is the missing bridge between your brain, your notes, and the real world.
          </p>
          <p className="description-secondary">
            Transform your static notes into <strong>smart, actionable reminders</strong>. Whether it's a specific time or a specific place, Notelert ensures your notes find you.
          </p>
          <div className="cta-group">
            <a href="#download" className="btn primary">Download App</a>
            <a href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" target="_blank" rel="noopener noreferrer" className="btn secondary">
              <svg className="github-icon-small" viewBox="0 0 24 24" fill="currentColor" style={{ width: '18px', height: '18px', marginRight: '8px' }}>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Get Plugin
            </a>
          </div>
        </div>
        <div className="visual">
          <div className="hero-frame-wrapper">
            <PhoneFrame src="/1.jpg" alt="Notelert App Screenshot" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          padding: 10rem 0 6rem;
          background: linear-gradient(135deg, #2b2b2b 0%, #1e1e1e 50%, #2b2b2b 100%);
          position: relative;
          overflow: hidden;
        }

        .beta-banner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          padding: 0.75rem 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          z-index: 10;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .beta-badge {
          background: rgba(0, 0, 0, 0.2);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .beta-text {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .beta-banner {
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.75rem 1rem;
            text-align: center;
          }

          .beta-text {
            font-size: 0.8rem;
          }
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        h1 {
          font-size: 3.5rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          background: linear-gradient(to right, var(--primary-color), var(--accent-color));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
          font-weight: 600;
        }

        .description {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .description-secondary {
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          line-height: 1.6;
          max-width: 500px;
        }

        .description strong, .description-secondary strong {
          color: var(--text-accent);
          font-weight: 600;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        .btn.primary {
          background-color: var(--primary-color);
          color: white;
        }

        .btn.secondary {
          background-color: var(--bg-secondary);
          color: var(--text-normal);
          border: 1px solid var(--border-subtle);
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

          .description, .description-secondary {
            margin: 0 auto 1.5rem;
          }

          .cta-group {
            justify-content: center;
          }
          
          .hero-frame-wrapper {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
