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
  const appName = "Notelert";

  return (
    <main id="top">
      <Header />
      <Hero 
        title={appName}
        subtitle="Your Notes, Where and When You Need Them"
      />
      
      <KeyFeatures />
      
      <WhyNotelert />
      
      <ObsidianWorkflow />
      
      <Features />
      
      <Premium />
      
      <Download />
      
      <Footer appName={appName} />
    </main>
  );
}
