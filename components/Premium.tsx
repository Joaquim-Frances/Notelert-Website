'use client';

import Icon from './Icon';

const premiumFeatures = [
  { icon: 'location' as const, text: 'Unlimited location reminders' },
  { icon: 'clock' as const, text: 'Unlimited date & time reminders' },
  { icon: 'email' as const, text: 'Email notifications included' }
];

export default function Premium() {
  return (
    <section className="premium" id="premium">
      <div className="container">
        <div className="premium-card">
          <div className="premium-header">
            <Icon name="star" size={48} color="#fbbf24" />
            <h2>💎 Notelert Premium</h2>
            <p className="tagline">Take your productivity to the next level</p>
            <p className="premium-description">
              Unlock unlimited reminders and email notifications. Make your Second Brain truly unlimited.
            </p>
          </div>

          <div className="premium-features">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="premium-feature">
                <Icon name="check" size={20} color="#10b981" />
                <Icon name={feature.icon} size={20} color="var(--text-accent)" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="premium-cta">
            <a href="#download" className="btn-premium">Upgrade to Premium</a>
            <p className="cta-subtitle">Your future self will thank you!</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .premium {
          padding: 8rem 0;
          background: #000000;
        }

        .premium-card {
          max-width: 700px;
          margin: 0 auto;
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          border-radius: 32px;
          padding: 4rem 3rem;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.8), 0 0 50px rgba(124, 58, 237, 0.1);
          position: relative;
          overflow: hidden;
        }

        .premium-card::after {
          content: '';
          position: absolute;
          top: -20%;
          right: -20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .premium-card::before {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -20%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(217, 70, 239, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .premium-header {
          text-align: center;
          position: relative;
          z-index: 1;
          margin-bottom: 2.5rem;
        }

        .premium-header :global(.icon) {
          margin-bottom: 1rem;
          filter: drop-shadow(0 4px 8px rgba(251, 191, 36, 0.5));
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        h2 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .tagline {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 0.75rem 0;
        }

        .premium-description {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
          line-height: 1.5;
        }

        .premium-features {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2.5rem;
          position: relative;
          z-index: 1;
        }

        .premium-feature {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #111111;
          padding: 1rem 1.75rem;
          border-radius: 16px;
          border: 1px solid #222222;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .premium-feature:hover {
          background: #1a1a1a;
          transform: translateX(10px);
          border-color: #333333;
        }

        .premium-feature span {
          color: white;
          font-size: 1.1rem;
          font-weight: 400;
        }

        .premium-cta {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .btn-premium {
          display: inline-block;
          padding: 1.25rem 3rem;
          background: white;
          color: black;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .btn-premium:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.2);
          background: #f0f0f0;
        }

        .cta-subtitle {
          margin-top: 1rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.95rem;
          font-style: italic;
        }

        @media (max-width: 640px) {
          .premium {
            padding: 4rem 0;
          }

          .premium-card {
            padding: 2rem;
          }

          h2 {
            font-size: 2rem;
          }

          .premium-feature {
            padding: 0.75rem 1rem;
          }

          .premium-feature span {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
