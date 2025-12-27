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
    <main id="top">
      {/* Enlace a la política de privacidad renderizado como Server Component en el HTML estático */}
      <div style={{ 
        position: 'static',
        display: 'block',
        textAlign: 'center',
        padding: '0.5rem',
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <PrivacyLink />
        <a 
          href="/terms/" 
          style={{ 
            display: 'inline-block',
            color: 'var(--text-normal)',
            textDecoration: 'underline',
            fontSize: '0.875rem',
            padding: '0.25rem 0.5rem',
            margin: '0.5rem'
          }}
        >
          Terms of Service
        </a>
      </div>
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
  );
}
