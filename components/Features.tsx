'use client';

import PhoneFrame from './PhoneFrame';

const features = [
  {
    title: "Location-Based Reminders",
    description: "Assign a location to your notes. Get a push notification on your phone the moment you enter or leave a specific place. Perfect for shopping lists or office tasks.",
    image: "/2.jpg"
  },
  {
    title: "Date & Time Reminders",
    description: "Need to remember something at a specific moment? Set precise date and time alerts directly from your notes.",
    image: "/3.jpg"
  },
  {
    title: "Deep Obsidian Integration",
    description: "Create reminders directly from your Obsidian vault. One click bridges your desktop workflow with your mobile life.",
    image: "/1.jpg"
  },
  {
    title: "Push & Email Notifications",
    description: "Choose how you want to be notified. Get instant push notifications on your device or detailed email reminders in your inbox.",
    image: "/4.jpg"
  },
  {
    title: "Privacy First",
    description: "Your privacy is paramount. We do not scan your Vaults. Notelert only interacts with the specific line you select. Your files remain private and intact.",
    image: "/5.jpg"
  }
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Features in Detail</h2>
        <p className="section-subtitle">
          See Notelert in action. Each feature is designed to make your notes more actionable 
          and help you stay on top of what matters most.
        </p>
        
        <div className="feature-grid">
          {features.map((feature, i) => (
            <div key={i} className={`feature-card ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className="feature-visual">
                <PhoneFrame src={feature.image} alt={feature.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .features {
          padding: 6rem 0;
          background-color: var(--bg-primary);
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

        .feature-grid {
          display: flex;
          flex-direction: column;
          gap: 6rem;
        }

        .feature-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .feature-card.reverse .feature-content {
          order: 2;
        }

        .feature-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: var(--text-normal);
        }

        .feature-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-muted);
        }

        .feature-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .feature-card {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .feature-card.reverse .feature-content {
            order: 0;
          }
        }
      `}</style>
    </section>
  );
}
