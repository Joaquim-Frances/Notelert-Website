<script>
  import PhoneFrame from './PhoneFrame.svelte';
  export let title = "Notelert";
  export let subtitle = "Smart Reminders for Obsidian Users";
</script>

<section class="hero">
  <div class="container">
    <div class="content">
      <h1>{title}</h1>
      <p class="subtitle">{subtitle}</p>
      <p class="description">
        Connect your Obsidian vault with real-world context. 
        Location-based and time-based reminders, directly from your notes.
      </p>
      <div class="cta-group">
        <a href="#download" class="btn primary">Download App</a>
        <a href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" target="_blank" class="btn secondary">Get Plugin</a>
      </div>
    </div>
    <div class="visual">
      <div class="hero-frame-wrapper">
        <PhoneFrame src="/src/assets/1.jpg" alt="Notelert App Screenshot" />
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    padding: 6rem 0;
    background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
    overflow: hidden;
  }

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  h1 {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1rem;
    background: linear-gradient(to right, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .subtitle {
    font-size: 1.5rem;
    color: var(--text-normal);
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  .description {
    font-size: 1.1rem;
    color: var(--text-muted);
    margin-bottom: 2.5rem;
    line-height: 1.6;
    max-width: 500px;
  }

  .cta-group {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .btn.primary {
    background-color: var(--primary-color);
    color: white;
  }

  .btn.secondary {
    background-color: var(--bg-secondary);
    color: var(--text-normal);
    border: 1px solid var(--border-subtle);
  }

  .visual {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .hero-frame-wrapper {
    transform: rotate(-5deg);
    transition: transform 0.3s ease;
  }

  .hero-frame-wrapper:hover {
    transform: rotate(0deg) scale(1.02);
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 3rem;
    }

    .description {
      margin: 0 auto 2.5rem;
    }

    .cta-group {
      justify-content: center;
    }
    
    .hero-frame-wrapper {
        transform: none;
    }
  }
</style>
