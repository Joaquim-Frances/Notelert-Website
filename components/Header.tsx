'use client';

import Logo from './Logo';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#top" className="logo-link">
            <Logo 
              width={40} 
              height={40}
              className="header-logo"
              priority
            />
            <span className="logo-text">Notelert</span>
          </a>
          
          <nav className="nav">
            <a href="#key-features">Features</a>
            <a href="#why-notelert">Why Notelert</a>
            <a href="#workflow">Workflow</a>
            <a href="#premium">Premium</a>
            <a href="https://notelert.com/privacy/" className="privacy-link">Privacy</a>
            <a href="#download" className="nav-cta">Download</a>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(5, 0, 13, 0.78);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 122, 61, 0.12);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header.scrolled {
          background: rgba(5, 0, 13, 0.94);
          box-shadow: 0 10px 30px rgba(236, 22, 133, 0.12);
          padding: 0.25rem 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-normal);
          transition: transform 0.2s ease;
        }

        .logo-link:hover {
          transform: scale(1.05);
        }

        .header-logo {
          width: 40px;
          height: 40px;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 900;
          color: white;
          letter-spacing: 0;
          line-height: 1;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav a {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 700;
          transition: color 0.2s ease;
          font-size: 0.95rem;
        }

        .nav a:hover {
          color: var(--text-accent);
        }

        .nav-cta {
          background: var(--gradient-primary);
          color: white !important;
          padding: 0.6rem 1.5rem;
          border-radius: 12px;
          font-weight: 900;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(236, 22, 133, 0.28);
          filter: brightness(1.08);
        }

        .privacy-link {
          color: var(--text-muted) !important;
          font-size: 0.9rem;
        }

        .privacy-link:hover {
          color: var(--primary-color) !important;
        }

        @media (max-width: 768px) {
          .nav {
            gap: 1rem;
          }

          .nav a {
            font-size: 0.85rem;
          }

          .nav a:not(.nav-cta) {
            display: none;
          }

          .logo-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </header>
  );
}
