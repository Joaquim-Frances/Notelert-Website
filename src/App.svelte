<script>
  import Hero from './lib/Hero.svelte';
  import Features from './lib/Features.svelte';
  import Download from './lib/Download.svelte';
  import Footer from './lib/Footer.svelte';
  
  const appName = "Notelert";
</script>

<main>
  <Hero 
    title={appName}
    subtitle="Smart Reminders for Obsidian Users"
  />
  
  <Features />
  
  <Download />
  
  <Footer {appName} />
</main>

<style>
  :global(:root) {
    --primary-color: #7c3aed; /* Violet */
    --accent-color: #d946ef; /* Fuchsia */
  }

  /* body styles are handled by app.css */

  :global(.container) {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 2rem;
  }
</style>
