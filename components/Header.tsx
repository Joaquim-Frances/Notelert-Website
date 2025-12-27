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
              borderRadius={8}
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
          background: rgba(30, 30, 30, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border-subtle);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(30, 30, 30, 0.95);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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
          border-radius: 8px;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          background: linear-gradient(to right, var(--primary-color), var(--accent-color));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav a {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
          font-size: 0.95rem;
        }

        .nav a:hover {
          color: var(--text-normal);
        }

        .nav-cta {
          background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
          color: white !important;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);
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

