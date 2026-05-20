'use client';

import obsidianLogo from '../assets/2023_Obsidian_logo.svg';

const OBSIDIAN_PLUGIN_URL = 'https://community.obsidian.md/plugins/notelert';

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
              <h3>Mobile App</h3>
              <p>Get Notelert on your Android device from the official Google Play Store</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.quim79.notelert" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="google-play-link action-slot"
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
              <h3>Obsidian Plugin</h3>
              <p>Install the official Notelert plugin from Obsidian Community Plugins and connect your vault in minutes.</p>
              <div className="plugin-buttons">
                <a 
                  href={OBSIDIAN_PLUGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-button obsidian action-slot"
                >
                  <img
                    src={obsidianLogo.src ?? obsidianLogo}
                    alt=""
                    className="obsidian-icon"
                    loading="lazy"
                  />
                  <div className="text">
                    <span className="small">Install from</span>
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
          padding: 8rem 0;
          background: var(--bg-primary);
        }

        .download-box {
          background: var(--gradient-surface);
          border: 1px solid var(--border-subtle);
          border-radius: 32px;
          padding: 5rem 2rem;
          text-align: center;
          color: white;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.5), 0 0 42px rgba(236, 22, 133, 0.12);
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
        }

        .download-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(255, 122, 61, 0.38);
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 900;
          letter-spacing: 0;
        }

        .download-subtitle {
          font-size: 1.25rem;
          margin-bottom: 4rem;
          opacity: 0.8;
          line-height: 1.6;
          font-weight: 500;
        }

        .download-content {
          --download-action-height: 124px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 3rem;
          align-items: stretch;
        }

        .plugin-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          width: 100%;
          height: 100%;
        }

        .download-section {
          display: grid;
          grid-template-rows: auto minmax(72px, auto) var(--download-action-height);
          justify-items: center;
          align-items: start;
          gap: 1rem;
        }

        .download-section h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: white;
          font-weight: 800;
        }

        .download-section p {
          font-size: 1rem;
          opacity: 0.9;
          line-height: 1.5;
          max-width: 300px;
        }

        .divider {
          width: 1px;
          background: rgba(255, 255, 255, 0.05);
          align-self: stretch;
        }

        .store-button {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.035);
          border: 1px solid rgba(255, 122, 61, 0.16);
          padding: 1rem 2rem;
          border-radius: 16px;
          color: white;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          max-width: 420px;
          min-height: 84px;
          justify-content: center;
        }

        .action-slot {
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          min-height: var(--download-action-height);
        }

        .google-play-link {
          width: 100%;
          max-width: 420px;
          text-decoration: none;
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease;
        }

        .google-play-badge {
          height: 116px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .google-play-link:hover .google-play-badge {
          transform: scale(1.05);
        }

        .google-play-link:hover {
          transform: translateY(-5px);
          filter: brightness(1.08);
        }

        .store-button.obsidian {
          background: #221032;
          border: 2px solid rgba(255, 255, 255, 0.46);
          box-shadow: 0 14px 32px rgba(255, 49, 95, 0.18);
          min-height: 78px;
          height: 78px;
          padding: 0 2rem;
          width: 262px;
        }

        .store-button.obsidian:hover {
          background: #2b123f;
          border-color: rgba(255, 255, 255, 0.7);
        }

        .store-button:not(.obsidian):hover {
          transform: translateY(-5px);
          background-color: rgba(255, 49, 95, 0.08);
          border-color: rgba(236, 22, 133, 0.28);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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
          font-weight: 800;
          letter-spacing: 0;
        }

        .play-badge-large {
          font-size: 1rem;
          color: #fff;
          line-height: 1.2;
          font-weight: 900;
        }

        .obsidian-icon {
          width: 48px;
          height: 48px;
          object-fit: contain;
          filter: drop-shadow(0 4px 10px rgba(143, 25, 255, 0.45));
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
          letter-spacing: 0;
          font-weight: 800;
        }

        .large {
          font-size: 1.2rem;
          font-weight: 900;
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
