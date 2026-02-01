'use client';

import Icon from './Icon';

export default function WhyNotelert() {
  return (
    <section className="why-notelert" id="why-notelert">
      <div className="container">
        <h2>🌟 Why Notelert?</h2>
        <p className="section-subtitle">
          Notelert isn't just another reminder app. It's the perfect companion for your "Second Brain," 
          designed for seamless integration and ultimate productivity.
        </p>
        
        <div className="why-grid">
          <div className="why-card">
            <div className="icon-wrapper">
              <Icon name="brain" size={40} color="white" />
            </div>
            <h3>Your Second Brain Companion</h3>
            <p>
              Designed specifically for Obsidian users who want to bridge the gap between their 
              desktop notes and mobile life. Notelert makes your Second Brain truly actionable.
            </p>
          </div>

          <div className="why-card">
            <div className="icon-wrapper">
              <Icon name="link" size={40} color="white" />
            </div>
            <h3>Seamless Integration</h3>
            <p>
              One click from your Obsidian vault to your mobile device. No complex setup, 
              no data migration. Just pure, seamless productivity.
            </p>
          </div>

          <div className="why-card">
            <div className="icon-wrapper">
              <Icon name="shield" size={40} color="white" />
            </div>
            <h3>Privacy First</h3>
            <p>
              We do not scan your Vaults. Notelert only interacts with the specific line you select 
              to add the notification trigger. Your files remain private and intact.
            </p>
          </div>

          <div className="why-card">
            <div className="icon-wrapper">
              <Icon name="bell" size={40} color="white" />
            </div>
            <h3>Smart Notifications</h3>
            <p>
              Choose how you want to be notified. Get instant push notifications on your device 
              or detailed email reminders in your inbox. You're in control.
            </p>
          </div>

          <div className="why-card">
            <div className="icon-wrapper">
              <Icon name="location" size={40} color="white" />
            </div>
            <h3>Location Intelligence</h3>
            <p>
              Geofencing technology ensures your notes find you at the right place and time. 
              Perfect for shopping lists, office tasks, and location-specific reminders.
            </p>
          </div>

          <div className="why-card">
            <div className="icon-wrapper">
              <Icon name="clock" size={40} color="white" />
            </div>
            <h3>Time & Place Flexibility</h3>
            <p>
              Whether you need a reminder at a specific time or when you arrive at a location, 
              Notelert handles both with precision and reliability.
            </p>
          </div>
        </div>

        <div className="highlight-box">
          <Icon name="star" size={32} color="#fbbf24" />
          <div className="highlight-content">
            <h3>Transform Static Notes into Actionable Reminders</h3>
            <p>
              Your notes shouldn't just sit in your vault. With Notelert, they become active 
              reminders that find you when and where you need them most.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .why-notelert {
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
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .why-card {
          background: #0a0a0a;
          border: 1px solid #111111;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .why-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(124, 58, 237, 0.1);
          border-color: rgba(124, 58, 237, 0.3);
          background: #111111;
        }

        .icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
        }

        .why-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: var(--text-normal);
        }

        .why-card p {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 0.95rem;
          font-weight: 300;
        }

        .highlight-box {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.05), rgba(217, 70, 239, 0.05));
          border: 1px solid rgba(124, 58, 237, 0.2);
          border-radius: 24px;
          padding: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .highlight-content h3 {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-normal);
        }

        .highlight-content p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1.05rem;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .why-grid {
            grid-template-columns: 1fr;
          }

          .why-notelert {
            padding: 4rem 0;
          }

          .highlight-box {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
}

