'use client';

import Icon from './Icon';

const features = [
  {
    icon: 'location' as const,
    title: '📍 Location-Based Reminders (Geofencing)',
    description: 'Assign a location to your notes. Get a push notification on your phone the moment you enter or leave a specific place. Perfect for shopping lists or office tasks.',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  {
    icon: 'clock' as const,
    title: '📅 Date & Time Reminders',
    description: 'Need to remember something at a specific moment? Set precise date and time alerts directly from your notes.',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  },
  {
    icon: 'bell' as const,
    title: '🔔 Push & Email Notifications',
    description: 'Choose how you want to be notified. Get instant push notifications on your device or detailed email reminders in your inbox.',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  {
    icon: 'link' as const,
    title: '🔗 Deep Obsidian Integration',
    description: 'Create reminders directly from your Obsidian vault. One click bridges your desktop workflow with your mobile life.',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
  },
  {
    icon: 'shield' as const,
    title: '🛡️ No Vault Scanning & Privacy First',
    description: 'Your privacy is paramount. We do not scan your Vaults. Notelert only interacts with the specific line you select to add the notification trigger. Your files remain private and intact. Secure Google Sign-In. Your data remains yours.',
    gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
  }
];

export default function KeyFeatures() {
  return (
    <section className="key-features" id="key-features">
      <div className="container">
        <h2>✨ Key Features</h2>
        <p className="section-subtitle">
          Everything you need to make your notes actionable. Transform your static notes into 
          smart, actionable reminders that find you when and where you need them.
        </p>
        
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
          padding: 8rem 0;
          background: #000000;
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

        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .feature-card {
          background: #0a0a0a;
          border: 1px solid #111111;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.3);
          background: #111111;
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
          font-weight: 500;
        }

        p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          font-weight: 300;
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
