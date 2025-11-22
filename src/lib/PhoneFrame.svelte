<script>
  export let src;
  export let alt;
</script>

<div class="phone-frame">
  <div class="notch"></div>
  <div class="screen">
    <img {src} {alt} loading="lazy" />
  </div>
</div>

<style>
  .phone-frame {
    position: relative;
    width: 300px; /* Default width, can be overridden by parent */
    aspect-ratio: 9 / 19.5;
    background: #1e1e1e;
    border-radius: 40px;
    box-shadow: 
      0 0 0 2px #333,
      0 0 0 4px #1a1a1a,
      0 20px 40px rgba(0,0,0,0.4);
    margin: 0 auto;
    border: 8px solid #121212;
    overflow: hidden;
  }

  .notch {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40%;
    height: 25px;
    background: #121212;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    z-index: 2;
  }

  .screen {
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 32px;
    overflow: hidden;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>
