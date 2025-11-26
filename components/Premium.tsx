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
          padding: 6rem 0;
          background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
        }

        .premium-card {
          max-width: 700px;
          margin: 0 auto;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.4);
          position: relative;
          overflow: hidden;
        }

        .premium-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
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
          margin: 0;
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
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 1rem 1.5rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .premium-feature:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateX(8px);
        }

        .premium-feature span {
          color: white;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .premium-cta {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .btn-premium {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: white;
          color: #764ba2;
          font-size: 1.1rem;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .btn-premium:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          background: #fbbf24;
          color: #1e1e1e;
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
