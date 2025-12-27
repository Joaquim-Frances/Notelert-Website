import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyFeatures from '@/components/KeyFeatures';
import WhyNotelert from '@/components/WhyNotelert';
import ObsidianWorkflow from '@/components/ObsidianWorkflow';
import Features from '@/components/Features';
import Premium from '@/components/Premium';
import Download from '@/components/Download';
import Footer from '@/components/Footer';
import PrivacyLink from '@/components/PrivacyLink';

export default function Home() {
  return (
    <>
      {/* Enlace a la política de privacidad renderizado como Server Component - visible en HTML estático */}
      <div 
        id="privacy-policy-banner"
        style={{ 
          position: 'static',
          display: 'block',
          textAlign: 'center',
          padding: '0.75rem 1rem',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-subtle)',
          fontSize: '0.875rem',
          color: 'var(--text-muted)'
        }}
      >
        <span>By using this site, you agree to our </span>
        <a 
          href="/privacy/" 
          id="privacy-policy-link-main"
          style={{ 
            color: 'var(--text-normal)',
            textDecoration: 'underline',
            fontWeight: 500
          }}
        >
          Privacy Policy
        </a>
        <span> and </span>
        <a 
          href="/terms/" 
          style={{ 
            color: 'var(--text-normal)',
            textDecoration: 'underline',
            fontWeight: 500
          }}
        >
          Terms of Service
        </a>
        <span>.</span>
      </div>
      <main id="top">
        <Header />
        <Hero />
        <KeyFeatures />     
        <WhyNotelert />     
        <ObsidianWorkflow />     
        <Features />
        <Premium />
        <Download />
        <Footer />
      </main>
    </>
  );
}
