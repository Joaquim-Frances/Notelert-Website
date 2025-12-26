import Header from '@/components/Header';
import Hero from '@/components/Hero';
import KeyFeatures from '@/components/KeyFeatures';
import WhyNotelert from '@/components/WhyNotelert';
import ObsidianWorkflow from '@/components/ObsidianWorkflow';
import Features from '@/components/Features';
import Premium from '@/components/Premium';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      {/* Enlace a la política de privacidad renderizado directamente en el HTML estático para crawlers */}
      <a href="/privacy/" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap' }}>Privacy Policy</a>
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
