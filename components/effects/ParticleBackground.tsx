
import React, { useRef, useEffect } from 'react';

interface ParticleBackgroundProps {
  interactionRadius?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ interactionRadius = 150 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const radiusRef = useRef(interactionRadius);
  const mouseRef = useRef({ 
    x: -1000, 
    y: -1000, 
    vx: 0, 
    vy: 0, 
    active: false 
  });

  useEffect(() => {
    radiusRef.current = interactionRadius;
  }, [interactionRadius]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number | undefined;
    let particles: Particle[] = [];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Constantes de Movimento Otimizadas (Calmas e Fluídas)
    const CONNECTION_DISTANCE = 110;
    const CONNECTION_DISTANCE_SQ = CONNECTION_DISTANCE * CONNECTION_DISTANCE;
    const FRICTION = 0.99; // Menos fricção para manter o movimento por mais tempo
    const DRIFT_SPEED = 0.25; // Velocidade bem reduzida para não "poluir" visualmente
    const MOUSE_REPEL_FORCE = 1.2;
    const CONSTANT_ACCEL = 0.005; // Pequeno impulso constante para nunca parar
    const MAX_PARTICLES = window.innerWidth < 768 ? 50 : 100;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      baseSize: number;
      opacity: number;
      angle: number;
      spin: number;
      excited: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseSize = Math.random() * 1.5 + 1; 
        this.size = this.baseSize;
        // Velocidade inicial bem baixa
        this.vx = (Math.random() - 0.5) * DRIFT_SPEED;
        this.vy = (Math.random() - 0.5) * DRIFT_SPEED;
        this.opacity = Math.random() * 0.25 + 0.1;
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.01; // Rotação mais lenta
        this.excited = 0;
      }

      draw() {
        if (!ctx) return;
        
        const currentOpacity = this.opacity + (this.excited * 0.3);
        const currentSize = this.size * (1 + this.excited * 0.5);
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.beginPath();
        ctx.moveTo(0, -currentSize * 1.2);
        ctx.lineTo(currentSize, 0);
        ctx.lineTo(0, currentSize * 1.2);
        ctx.lineTo(-currentSize, 0);
        ctx.closePath();

        if (this.excited > 0.3) {
          ctx.shadowBlur = 8 * this.excited;
          ctx.shadowColor = '#22d3ee';
        }

        ctx.fillStyle = `rgba(34, 211, 238, ${currentOpacity})`;
        ctx.fill();
        ctx.restore();
      }

      update(width: number, height: number) {
        const mouse = mouseRef.current;
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = radiusRef.current * radiusRef.current;

        // Interação com o Mouse
        if (distSq < maxDistSq && mouse.active) {
          this.excited = Math.min(this.excited + 0.03, 1);
          const distance = Math.sqrt(distSq);
          const force = (radiusRef.current - distance) / radiusRef.current;
          
          this.vx -= (dx / distance) * force * MOUSE_REPEL_FORCE;
          this.vy -= (dy / distance) * force * MOUSE_REPEL_FORCE;
        } else {
          this.excited = Math.max(this.excited - 0.01, 0);
        }

        // Micro-impulsos aleatórios para manter a vida (Brownian motion leve)
        this.vx += (Math.random() - 0.5) * CONSTANT_ACCEL;
        this.vy += (Math.random() - 0.5) * CONSTANT_ACCEL;

        // Aplicar Física
        this.vx *= FRICTION;
        this.vy *= FRICTION;
        
        this.x += this.vx;
        this.y += this.vy;
        this.angle += this.spin * (1 + this.excited);

        // Wrapping suave
        const margin = 50;
        if (this.x < -margin) this.x = width + margin;
        if (this.x > width + margin) this.x = -margin;
        if (this.y < -margin) this.y = height + margin;
        if (this.y > height + margin) this.y = -margin;
      }
    }

    const drawConnections = () => {
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < CONNECTION_DISTANCE_SQ) {
            const opacity = (1 - distSq / CONNECTION_DISTANCE_SQ) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const init = () => {
      const { innerWidth: width, innerHeight: height } = window;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // Reduzido DPR para estabilidade máxima
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      
      particles = [];
      for (let i = 0; i < MAX_PARTICLES; i++) {
        particles.push(new Particle(Math.random() * width, Math.random() * height));
      }
    };

    const animate = () => {
      const { innerWidth: width, innerHeight: height } = window;
      
      // Limpeza sólida para performance
      ctx.fillStyle = '#030303';
      ctx.fillRect(0, 0, width, height);

      drawConnections();

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(width, height);
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };
    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    init();
    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId !== undefined) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0" 
      style={{ background: '#030303', willChange: 'transform' }}
    />
  );
};

export default ParticleBackground;
