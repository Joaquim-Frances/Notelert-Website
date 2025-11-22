<script>
  export let appName = "Notelert";
  const year = new Date().getFullYear();
</script>

<footer>
  <div class="container">
    <div class="footer-content">
      <div class="brand">
        <h3>{appName}</h3>
        <p>Your notes, where and when you need them.</p>
      </div>
      
      <div class="links">
        <h4>Links</h4>
        <a href="#features">Features</a>
        <a href="#download">Download</a>
        <a href="https://github.com/Joaquim-Frances/obsidian-notelert-plugin" target="_blank">GitHub</a>
      </div>
      
      <div class="legal">
        <h4>Legal</h4>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact</a>
      </div>
    </div>
    
    <div class="copyright">
      <p>&copy; {year} {appName}. All rights reserved.</p>
    </div>
  </div>
</footer>

<style>
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
</style>
