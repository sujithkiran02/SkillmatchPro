(function() {
  const canvas = document.getElementById('global-bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: false });
  
  let width, height;
  let particles = [];
  const particleCount = Math.min(window.innerWidth / 12, 100);
  let mouse = { x: null, y: null, radius: 150 };
  
  // Theme state
  let isDark = document.documentElement.getAttribute('data-theme') === 'dark';

  // Watch for theme changes
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme') {
        isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        updateThemeColors();
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true });

  const THEMES = {
    dark: {
      bg: '#050914',
      colors: ['#4F46E5', '#6366F1', '#8B5CF6', '#A78BFA'], // Indigo/Purple
      lineColor: 'rgba(99, 102, 241, '
    },
    light: {
      bg: '#F0F4F8',
      colors: ['#818CF8', '#A78BFA', '#93C5FD', '#C4B5FD'], // Soft blues/purples
      lineColor: 'rgba(129, 140, 248, '
    }
  };

  function updateThemeColors() {
    const theme = isDark ? THEMES.dark : THEMES.light;
    particles.forEach(p => {
      p.color = theme.colors[Math.floor(Math.random() * theme.colors.length)];
    });
  }

  function initDimensions() {
    const dpr = window.devicePixelRatio || 1;
    width = window.innerWidth;
    height = window.innerHeight;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    ctx.scale(dpr, dpr);
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.size = Math.random() * 2 + 0.5;
      this.density = (Math.random() * 30) + 5;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.alpha = Math.random() * 0.5 + 0.2;
      
      const theme = isDark ? THEMES.dark : THEMES.light;
      this.color = theme.colors[Math.floor(Math.random() * theme.colors.length)];
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      
      ctx.shadowBlur = isDark ? 15 : 8;
      ctx.shadowColor = this.color;
      
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
      
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;

      if (mouse.x != null && mouse.y != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * this.density * 0.08;
          const directionY = forceDirectionY * force * this.density * 0.08;

          this.x -= directionX;
          this.y -= directionY;
        }
      }

      this.draw();
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function connectParticles() {
    const theme = isDark ? THEMES.dark : THEMES.light;
    for (let a = 0; a < particles.length; a++) {
      for (let b = a; b < particles.length; b++) {
        let dx = particles[a].x - particles[b].x;
        let dy = particles[a].y - particles[b].y;
        let distance = dx * dx + dy * dy;

        if (distance < 18000) {
          let opacity = 1 - (distance / 18000);
          ctx.beginPath();
          ctx.strokeStyle = theme.lineColor + (opacity * (isDark ? 0.2 : 0.4)) + ')';
          ctx.lineWidth = 1;
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  }

  // Soft gradient overlay to add depth
  function drawBackground() {
    const theme = isDark ? THEMES.dark : THEMES.light;
    
    // Draw solid base
    ctx.fillStyle = theme.bg;
    ctx.fillRect(0, 0, width, height);
    
    // Draw subtle radial gradient
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height));
    if (isDark) {
      gradient.addColorStop(0, '#0f172a');
      gradient.addColorStop(1, '#050914');
    } else {
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(1, '#F0F4F8');
    }
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function animate() {
    drawBackground();
    
    if (!prefersReducedMotion) {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connectParticles();
    }
    
    if (!prefersReducedMotion) {
      requestAnimationFrame(animate);
    }
  }

  window.addEventListener('resize', () => {
    initDimensions();
    // Do not re-init particles, just let them wrap
  });

  document.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  document.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  initDimensions();
  initParticles();
  animate();

})();
