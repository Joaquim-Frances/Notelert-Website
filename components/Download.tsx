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
                href="https://play.google.com/store/apps/details?id=com.quim79.notelert" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="store-button google-play"
              >
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play"
                  className="google-play-badge"
                  loading="lazy"
                />
              </a>
            </div>

            <div className="divider"></div>

            <div className="download-section">
              <h3>💎 Obsidian Plugin</h3>
              <p>Install the Notelert plugin directly from GitHub to integrate with your Obsidian vault</p>
              <div className="plugin-buttons">
                <a 
                  href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="store-button github"
                >
                  <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div className="text">
                    <span className="small">Download from</span>
                    <span className="large">GitHub</span>
                  </div>
                </a>
                <a 
                  href="obsidian://community-plugins?search=obsidian-notelert-plugin" 
                  className="store-button obsidian"
                  onClick={(e) => {
                    // Fallback si Obsidian no está instalado
                    setTimeout(() => {
                      window.location.href = 'https://obsidian.md/plugins';
                    }, 1000);
                  }}
                >
                  <svg className="obsidian-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.074 2.48c-.712-.378-1.52-.378-2.232 0L8.5 4.5 5.158 5.926c-.712.378-1.158 1.08-1.158 1.85v9.448c0 .77.446 1.472 1.158 1.85L8.5 19.5l4.342-1.426c.712-.378 1.52-.378 2.232 0L19.416 19.5l3.342-1.426c.712-.378 1.158-1.08 1.158-1.85V7.776c0-.77-.446-1.472-1.158-1.85L19.416 4.5 15.074 2.48zM12 6.5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-4 4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm8 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-4 4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"/>
                  </svg>
                  <div className="text">
                    <span className="small">Open in</span>
                    <span className="large">Obsidian</span>
                  </div>
                </a>
              </div>
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

        .plugin-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
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

        .store-button.google-play {
          background: transparent;
          border: none;
          padding: 0;
          min-width: auto;
          display: inline-block;
        }

        .google-play-badge {
          height: 60px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .store-button.google-play:hover .google-play-badge {
          transform: scale(1.05);
        }

        .store-button.google-play:hover {
          transform: none;
          box-shadow: none;
        }

        .store-button.obsidian {
          background: linear-gradient(135deg, #483699 0%, #7c3aed 100%);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .store-button.obsidian:hover {
          background: linear-gradient(135deg, #5a45b8 0%, #8d4ef5 100%);
        }

        .store-button:hover {
          transform: translateY(-4px);
          background-color: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .play-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: #000;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          min-width: 180px;
          justify-content: center;
        }

        .play-icon {
          width: 28px;
          height: 28px;
          fill: #fff;
        }

        .play-badge-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .play-badge-small {
          font-size: 0.7rem;
          color: #fff;
          line-height: 1;
          font-weight: 500;
          letter-spacing: 0.5px;
        }

        .play-badge-large {
          font-size: 1rem;
          color: #fff;
          line-height: 1.2;
          font-weight: 700;
        }

        .github-icon {
          width: 24px;
          height: 24px;
        }

        .obsidian-icon {
          width: 24px;
          height: 24px;
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
