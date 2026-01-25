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
        lastX: 0,
        lastY: 0,
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

        let animationFrameId: number;
        let particles: Particle[] = [];

        // Configurações de Física e Estética Ajustadas para maior velocidade e tamanho
        const CONNECTION_DISTANCE = 130;
        const FRICTION = 0.97;
        const DRIFT_SPEED = 1.2; // Aumentado de 0.4 para 1.2
        const MOUSE_REPEL_FORCE = 2.5; // Aumentado de 1.5 para 2.5

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
                // Tamanho base aumentado significativamente
                this.baseSize = Math.random() * 3.5 + 1.5;
                this.size = this.baseSize;

                // Velocidade inicial mais agressiva
                this.vx = (Math.random() - 0.5) * DRIFT_SPEED;
                this.vy = (Math.random() - 0.5) * DRIFT_SPEED;

                this.opacity = Math.random() * 0.4 + 0.15;
                this.angle = Math.random() * Math.PI * 2;
                this.spin = (Math.random() - 0.5) * 0.04;
                this.excited = 0;
            }

            draw() {
                if (!ctx) return;

                const currentOpacity = Math.min(this.opacity + (this.excited * 0.5), 0.9);
                const currentSize = this.size * (1 + this.excited * 1.5); // Escala maior no hover

                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                // Desenho do Diamante Neon
                ctx.beginPath();
                ctx.moveTo(0, -currentSize * 1.5);
                ctx.lineTo(currentSize, 0);
                ctx.lineTo(0, currentSize * 1.5);
                ctx.lineTo(-currentSize, 0);
                ctx.closePath();

                // Glow mais intenso
                if (this.excited > 0.05) {
                    ctx.shadowBlur = 15 * this.excited;
                    ctx.shadowColor = 'rgba(34, 211, 238, 1)';
                }

                ctx.fillStyle = `rgba(34, 211, 238, ${currentOpacity})`;
                ctx.fill();

                // Núcleo (Core) mais visível
                ctx.beginPath();
                ctx.arc(0, 0, currentSize * 0.35, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.4 + this.excited * 0.6})`;
                ctx.fill();

                ctx.restore();
            }

            update(width: number, height: number) {
                const mouse = mouseRef.current;
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDist = radiusRef.current;

                // Interação com o Mouse
                if (distance < maxDist && mouse.active) {
                    this.excited = Math.min(this.excited + 0.1, 1);

                    const force = (maxDist - distance) / maxDist;
                    const dirX = dx / distance;
                    const dirY = dy / distance;

                    // Repulsão magnética mais forte
                    this.vx -= dirX * force * MOUSE_REPEL_FORCE;
                    this.vy -= dirY * force * MOUSE_REPEL_FORCE;

                    // Vortex mais pronunciado
                    const swirl = 0.5;
                    this.vx += dirY * force * swirl;
                    this.vy -= dirX * force * swirl;
                } else {
                    this.excited = Math.max(this.excited - 0.02, 0);

                    // Turbulência contínua para manter o movimento "vivo"
                    this.vx += (Math.random() - 0.5) * 0.08;
                    this.vy += (Math.random() - 0.5) * 0.08;
                }

                // Aplicar Física
                this.vx *= FRICTION;
                this.vy *= FRICTION;

                // Velocidade mínima mais alta para garantir movimento constante
                const minVel = 0.4;
                const currentVel = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (currentVel < minVel) {
                    const angle = Math.random() * Math.PI * 2;
                    this.vx += Math.cos(angle) * 0.15;
                    this.vy += Math.sin(angle) * 0.15;
                }

                this.x += this.vx;
                this.y += this.vy;

                // Rotação contínua acelerada pela excitação
                this.angle += this.spin * (1 + this.excited * 4);

                // Wrapping
                const margin = 120;
                if (this.x < -margin) this.x = width + margin;
                if (this.x > width + margin) this.x = -margin;
                if (this.y < -margin) this.y = height + margin;
                if (this.y > height + margin) this.y = -margin;
            }
        }

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < CONNECTION_DISTANCE) {
                        const avgExcited = (particles[i].excited + particles[j].excited) / 2;
                        const opacity = (1 - dist / CONNECTION_DISTANCE) * (0.12 + avgExcited * 0.5);

                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`;
                        ctx.lineWidth = 0.8 + avgExcited * 2;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const init = () => {
            const { innerWidth: width, innerHeight: height } = window;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

            particles = [];
            const density = 18000;
            const count = Math.min(Math.floor((width * height) / density), 150);

            for (let i = 0; i < count; i++) {
                particles.push(new Particle(Math.random() * width, Math.random() * height));
            }
        };

        const animate = () => {
            const { innerWidth: width, innerHeight: height } = window;

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
            mouseRef.current.x = -1000;
            mouseRef.current.y = -1000;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ background: '#030303' }}
        />
    );
};

export default ParticleBackground;