'use client';

import PhoneFrame from './PhoneFrame';
import Logo from './Logo';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

export default function Hero({ title = 'Notelert', subtitle = 'Obsidian Notifications: push, locations, emails, and more...' }: HeroProps) {
  return (
    <section className="hero">
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
            <a href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" target="_blank" rel="noopener noreferrer" className="btn secondary">Get Plugin</a>
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
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #2b2b2b 0%, #1e1e1e 50%, #2b2b2b 100%);
          position: relative;
          overflow: hidden;
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
