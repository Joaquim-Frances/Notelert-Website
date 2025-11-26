import Hero from '@/components/Hero';
import KeyFeatures from '@/components/KeyFeatures';
import ObsidianWorkflow from '@/components/ObsidianWorkflow';
import Features from '@/components/Features';
import Premium from '@/components/Premium';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  const appName = "Notelert";

  return (
    <main>
      <Hero 
        title={appName}
        subtitle="Your Notes, Where and When You Need Them"
      />
      
      <KeyFeatures />
      
      <ObsidianWorkflow />
      
      <Features />
      
      <Premium />
      
      <Download />
      
      <Footer appName={appName} />
    </main>
  );
}
