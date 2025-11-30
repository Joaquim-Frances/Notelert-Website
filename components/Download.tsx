'use client';

import Icon from './Icon';

export default function Download() {
  return (
    <section className="download" id="download">
      <div className="container">
        <div className="download-box">
          <h2>Ready to get started?</h2>
          <p className="download-subtitle">
            Download Notelert today and make your notes work for you. Your future self will thank you!
          </p>
          
          <div className="download-content">
            <div className="download-section">
              <h3>📱 Mobile App</h3>
              <p>Get Notelert on your Android device from the official Google Play Store</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.notelert.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="store-button google-play"
              >
                <svg className="play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text">
                  <span className="small">Get it on</span>
                  <span className="large">Google Play</span>
                </div>
              </a>
            </div>

            <div className="divider"></div>

            <div className="download-section">
              <h3>💎 Obsidian Plugin</h3>
              <p>Install the Notelert plugin directly from GitHub to integrate with your Obsidian vault</p>
              <a 
                href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="store-button github"
              >
                <Icon name="link" size={24} color="white" />
                <div className="text">
                  <span className="small">Download from</span>
                  <span className="large">GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .download {
          padding: 6rem 0;
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
        }

        .download-box {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 24px;
          padding: 4rem 2rem;
          text-align: center;
          color: white;
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.3);
          max-width: 1000px;
          margin: 0 auto;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .download-subtitle {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.95;
          line-height: 1.6;
        }

        .download-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 3rem;
          align-items: start;
        }

        .download-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .download-section h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: white;
        }

        .download-section p {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          line-height: 1.5;
          max-width: 300px;
        }

        .divider {
          width: 2px;
          background: rgba(255, 255, 255, 0.3);
          align-self: stretch;
        }

        .store-button {
          display: flex;
          align-items: center;
          gap: 1rem;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          padding: 1rem 2rem;
          border-radius: 16px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          min-width: 220px;
          justify-content: center;
        }

        .store-button:hover {
          transform: translateY(-4px);
          background-color: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .play-icon {
          width: 32px;
          height: 32px;
        }

        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .small {
          font-size: 0.75rem;
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .large {
          font-size: 1.2rem;
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .download-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .divider {
            width: 100%;
            height: 2px;
          }

          .download-box {
            padding: 3rem 1.5rem;
          }

          h2 {
            font-size: 2rem;
          }

          .download-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
