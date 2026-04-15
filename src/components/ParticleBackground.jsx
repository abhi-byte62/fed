import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        let width, height;
        let particles = [];
        let animationFrameId;

        const initCanvas = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        class FireParticle {
            constructor() {
                this.reset();
                this.y = Math.random() * height; // Initial random spawn
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 50;
                this.size = Math.random() * 3 + 1.5;
                this.speedY = Math.random() * -2 - 1.5;
                this.speedX = (Math.random() - 0.5) * 0.8;
                this.life = Math.random() * 80 + 40;
                this.maxLife = this.life;
                this.opacity = Math.random() * 0.8 + 0.2;

                const type = Math.random();
                if (type > 0.7) {
                    this.r = 255; this.g = 69; this.b = 0;
                } else if (type > 0.4) {
                    this.r = 255; this.g = 140; this.b = 0;
                } else if (type > 0.1) {
                    this.r = 211; this.g = 47; this.b = 47;
                } else {
                    this.r = 255; this.g = 215; this.b = 0;
                }
            }

            update() {
                this.y += this.speedY;
                this.x += this.speedX + Math.sin(this.y * 0.015) * 0.5;
                this.life--;

                if (this.size > 0.1) this.size -= 0.02;

                if (this.life <= 0 || this.y < -10) {
                    this.reset();
                }
            }

            draw() {
                if (!ctx) return;
                const currentOpacity = this.opacity * (this.life / this.maxLife);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${currentOpacity})`;
                ctx.shadowBlur = 10;
                ctx.shadowColor = `rgb(${this.r}, ${this.g}, ${this.b})`;
                ctx.fill();
            }
        }

        const createParticles = () => {
            particles = [];
            const count = Math.min(Math.floor(width / 20), 60);
            for (let i = 0; i < count; i++) {
                particles.push(new FireParticle());
            }
        };

        const animateParticles = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
            }
            animationFrameId = requestAnimationFrame(animateParticles);
        };

        const handleResize = () => {
            initCanvas();
            createParticles();
        };

        window.addEventListener('resize', handleResize);

        initCanvas();
        createParticles();
        animateParticles();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 bg-[url('/assets/bg.png')] bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none -z-20"></div>
            <div className="fixed inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark pointer-events-none -z-10"></div>
            <div className="fixed inset-0 pointer-events-none z-[-15] overflow-hidden">
                <div className="absolute lg-orb orb-1"></div>
                <div className="absolute lg-orb orb-2"></div>
                <div className="absolute lg-orb orb-3"></div>
            </div>
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[-5]"></canvas>
        </>
    );
};

export default ParticleBackground;
