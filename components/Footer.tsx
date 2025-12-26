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
            <a href="/privacy/">Privacy Policy</a>
            <a href="/terms/">Terms of Service</a>
            <a href="mailto:contact@notelert.com">Contact</a>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {year} {appName}. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
            <a href="/privacy/" style={{ marginRight: '1rem' }}>Privacy Policy</a>
            <a href="/terms/">Terms of Service</a>
          </p>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: var(--bg-secondary);
          padding: 4rem 0 2rem;
          border-top: 1px solid var(--border-subtle);
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
          color: var(--text-normal);
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
          color: var(--text-normal);
          text-decoration: none;
          transition: color 0.2s;
        }

        a:hover {
          color: var(--primary-color);
        }

        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid var(--border-subtle);
          font-size: 0.9rem;
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
