'use client';

import Icon from './Icon';

const features = [
  {
    icon: 'location' as const,
    title: 'Location-Based Reminders',
    description: 'Get notified when you enter or leave a specific place. Perfect for shopping lists, office tasks, and location-specific notes.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: 'clock' as const,
    title: 'Date & Time Reminders',
    description: 'Set precise date and time alerts directly from your notes. Never miss an important deadline or appointment.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: 'bell' as const,
    title: 'Push Notifications',
    description: 'Get instant push notifications on your device the moment your reminder triggers. Stay on top of your tasks.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    icon: 'email' as const,
    title: 'Email Notifications',
    description: 'Receive detailed email reminders in your inbox. Choose the notification method that works best for you.',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
  },
  {
    icon: 'link' as const,
    title: 'Deep Obsidian Integration',
    description: 'Create reminders directly from your Obsidian vault. Tap notifications to open notes instantly in Obsidian.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    icon: 'shield' as const,
    title: 'Privacy First',
    description: 'We never scan your vaults. Notelert only interacts with the specific lines you select. Your files remain private.',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  }
];

export default function KeyFeatures() {
  return (
    <section className="key-features" id="key-features">
      <div className="container">
        <h2>✨ Key Features</h2>
        <p className="section-subtitle">Everything you need to make your notes actionable</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-wrapper" style={{ background: feature.gradient }}>
                <Icon name={feature.icon} size={32} color="white" />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .key-features {
          padding: 6rem 0;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-normal);
        }

        .section-subtitle {
          text-align: center;
          color: var(--text-muted);
          font-size: 1.2rem;
          margin-bottom: 4rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: rgba(43, 43, 43, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(124, 58, 237, 0.2);
          border-color: var(--interactive-accent);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--text-normal);
        }

        p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .key-features {
            padding: 4rem 0;
          }
        }
      `}</style>
    </section>
  );
}
