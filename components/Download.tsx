'use client';

export default function Download() {
  return (
    <section className="download" id="download">
      <div className="container">
        <div className="download-box">
          <h2>Ready to get started?</h2>
          <p>Download Notelert today and make your notes work for you.</p>
          
          <div className="buttons">
            <a href="#" className="store-button">
              <span className="icon">🤖</span>
              <div className="text">
                <span className="small">Get it on</span>
                <span className="large">Google Play</span>
              </div>
            </a>
            
            <a href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" target="_blank" rel="noopener noreferrer" className="store-button obsidian">
              <span className="icon">💎</span>
              <div className="text">
                <span className="small">Available for</span>
                <span className="large">Obsidian</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .download {
          padding: 6rem 0;
          background-color: var(--bg-primary);
        }

        .download-box {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          border-radius: 24px;
          padding: 4rem 2rem;
          text-align: center;
          color: white;
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.2);
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 3rem;
          opacity: 0.9;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .store-button {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          color: white;
          text-decoration: none;
          transition: transform 0.2s, background-color 0.2s;
          min-width: 180px;
        }

        .store-button:hover {
          transform: translateY(-2px);
          background-color: rgba(255, 255, 255, 0.2);
        }

        .icon {
          font-size: 2rem;
        }

        .text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .small {
          font-size: 0.75rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .large {
          font-size: 1.1rem;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
