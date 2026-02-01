'use client';

interface FooterProps {
  appName?: string;
}

export default function Footer({ appName = 'Notelert' }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="brand">
            <h3>{appName}</h3>
            <p>Your notes, where and when you need them.</p>
          </div>
          
          <div className="links">
            <h4>Links</h4>
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
          
          <div className="legal">
            <h4>Legal</h4>
            <a href="https://notelert.com/privacy/">Privacy Policy</a>
            <a href="https://notelert.com/terms/">Terms of Service</a>
            <a href="mailto:contact@notelert.com">Contact</a>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {year} {appName}. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            <a href="https://notelert.com/privacy/" style={{ marginRight: '1rem' }}>Privacy Policy</a>
            <a href="https://notelert.com/terms/">Terms of Service</a>
          </p>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: #000000;
          padding: 6rem 0 3rem;
          border-top: 1px solid #111111;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: white;
          font-weight: 500;
          letter-spacing: 0.05em;
        }

        h4 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        p {
          color: var(--text-muted);
          line-height: 1.6;
        }

        .links, .legal {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        a {
          color: var(--text-muted);
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 300;
        }

        a:hover {
          color: white;
          transform: translateX(5px);
        }

        .copyright {
          text-align: center;
          padding-top: 3rem;
          border-top: 1px solid #111111;
          font-size: 0.85rem;
          color: #444444;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
