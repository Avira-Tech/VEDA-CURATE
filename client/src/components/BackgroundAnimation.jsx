// import { useEffect, useRef, useState } from "react";

// export default function BackgroundAnimation() {
//   const canvasRef = useRef(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const prevMouseRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let time = 0;

//     // Resize canvas
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     // Track mouse position
//     const handleMouseMove = (e) => {
//       const newX = e.clientX;
//       const newY = e.clientY;
      
//       // Calculate velocity for trail intensity
//       const velocity = Math.sqrt(
//         Math.pow(newX - prevMouseRef.current.x, 2) +
//         Math.pow(newY - prevMouseRef.current.y, 2)
//       );
      
//       setMousePos({ x: newX, y: newY, velocity });
//       prevMouseRef.current = { x: newX, y: newY };
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     /* =========================
//        PARTICLE CLASS
//     ========================= */
//     class Particle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 0.5;
//         this.speedX = (Math.random() - 0.5) * 0.3;
//         this.speedY = (Math.random() - 0.5) * 0.3;
//         this.opacity = Math.random() * 0.4 + 0.1;
//         this.fadeSpeed = Math.random() * 0.004 + 0.002;
//         this.direction = Math.random() > 0.5 ? 1 : -1;
//         this.hue = Math.random() * 30 + 20; // Orange-gold hue range
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

//         this.opacity += this.fadeSpeed * this.direction;
//         if (this.opacity > 0.6 || this.opacity < 0.1) {
//           this.direction *= -1;
//         }
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.opacity})`;
//         ctx.fill();
//       }
//     }

//     /* =========================
//        LIGHT STREAK CLASS
//     ========================= */
//     class LightStreak {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.length = Math.random() * 120 + 60;
//         this.angle = Math.random() * Math.PI * 2;
//         this.speed = Math.random() * 0.4 + 0.2;
//         this.opacity = Math.random() * 0.12 + 0.04;
//         this.width = Math.random() * 2 + 0.8;
//       }

//       update() {
//         this.x += Math.cos(this.angle) * this.speed;
//         this.y += Math.sin(this.angle) * this.speed;

//         if (
//           this.x < -this.length ||
//           this.x > canvas.width + this.length ||
//           this.y < -this.length ||
//           this.y > canvas.height + this.length
//         ) {
//           this.reset();
//         }
//       }

//       draw() {
//         ctx.save();
//         ctx.translate(this.x, this.y);
//         ctx.rotate(this.angle);
//         ctx.beginPath();
//         ctx.moveTo(0, 0);
//         ctx.lineTo(this.length, 0);
//         ctx.strokeStyle = `rgba(255, 152, 0, ${this.opacity})`;
//         ctx.lineWidth = this.width;
//         ctx.lineCap = "round";
//         ctx.stroke();
//         ctx.restore();
//       }
//     }

//     /* =========================
//        CURSOR TRAIL PARTICLE CLASS (Paint Effect)
//     ========================= */
//     class TrailParticle {
//       constructor(x, y, velocity) {
//         this.x = x;
//         this.y = y;
//         this.size = Math.random() * 8 + 4;
//         this.maxSize = this.size;
//         this.opacity = 1;
//         this.fadeSpeed = Math.random() * 0.02 + 0.01;
//         this.shrinkSpeed = Math.random() * 0.03 + 0.02;
        
//         // Random offset from cursor for organic feel
//         this.offsetX = (Math.random() - 0.5) * 20;
//         this.offsetY = (Math.random() - 0.5) * 20;
        
//         // Orange-gold colors
//         this.hue = Math.random() * 30 + 20; // 20-50 covers orange to orange-red
//         this.saturation = 90 + Math.random() * 10;
//         this.lightness = 50 + Math.random() * 15;
        
//         // Velocity affects size
//         const velocityFactor = Math.min(velocity / 100, 1);
//         this.size *= (0.5 + velocityFactor * 1.5);
//         this.maxSize = this.size;
        
//         // Random shape variation
//         this.isCircle = Math.random() > 0.3;
//         this.rotation = Math.random() * Math.PI * 2;
//         this.rotationSpeed = (Math.random() - 0.5) * 0.1;
//       }

//       update() {
//         this.size -= this.shrinkSpeed;
//         this.opacity -= this.fadeSpeed;
//         this.rotation += this.rotationSpeed;
//         return this.size > 0 && this.opacity > 0;
//       }

//       draw() {
//         if (this.size <= 0 || this.opacity <= 0) return;

//         ctx.save();
//         ctx.translate(this.x + this.offsetX, this.y + this.offsetY);
//         ctx.rotate(this.rotation);
//         ctx.globalAlpha = this.opacity;

//         const color = `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, `;

//         if (this.isCircle) {
//           // Create gradient for paint blob effect
//           const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
//           gradient.addColorStop(0, color + "1)");
//           gradient.addColorStop(0.5, color + "0.6)");
//           gradient.addColorStop(1, color + "0)");
          
//           ctx.beginPath();
//           ctx.arc(0, 0, this.size, 0, Math.PI * 2);
//           ctx.fillStyle = gradient;
//           ctx.fill();
//         } else {
//           // Irregular paint splatter shape
//           ctx.beginPath();
//           const points = 6;
//           for (let i = 0; i < points; i++) {
//             const angle = (i / points) * Math.PI * 2;
//             const radius = this.size * (0.5 + Math.random() * 0.5);
//             const px = Math.cos(angle) * radius;
//             const py = Math.sin(angle) * radius;
//             if (i === 0) ctx.moveTo(px, py);
//             else ctx.lineTo(px, py);
//           }
//           ctx.closePath();
//           ctx.fillStyle = color + "0.8)";
//           ctx.fill();
//         }

//         ctx.restore();
//       }
//     }

//     /* =========================
//        PAINT SPLASH BURST CLASS
//     ========================= */
//     class PaintSplash {
//       constructor(x, y, velocity) {
//         this.particles = [];
//         this.life = 1;
//         this.decay = 0.02;
        
//         const splashCount = Math.floor(Math.min(velocity / 20, 10)) + 3;
//         for (let i = 0; i < splashCount; i++) {
//           const angle = (Math.PI * 2 * i) / splashCount + Math.random() * 0.5;
//           const speed = Math.random() * 3 + 1;
//           this.particles.push({
//             x,
//             y,
//             vx: Math.cos(angle) * speed,
//             vy: Math.sin(angle) * speed,
//             size: Math.random() * 4 + 2,
//             hue: Math.random() * 30 + 20,
//             life: 1,
//             decay: Math.random() * 0.03 + 0.02
//           });
//         }
//       }

//       update() {
//         this.life -= this.decay;
//         let alive = false;
        
//         this.particles.forEach(p => {
//           p.x += p.vx;
//           p.y += p.vy;
//           p.vx *= 0.95;
//           p.vy *= 0.95;
//           p.life -= p.decay;
//           p.size *= 0.97;
//           if (p.life > 0 && p.size > 0.5) alive = true;
//         });
        
//         return this.life > 0 && alive;
//       }

//       draw() {
//         ctx.save();
//         this.particles.forEach(p => {
//           if (p.life <= 0 || p.size <= 0) return;
          
//           ctx.globalAlpha = p.life;
//           ctx.beginPath();
//           ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
//           ctx.fillStyle = `hsla(${p.hue}, 100%, 55%, 0.8)`;
//           ctx.fill();
//         });
//         ctx.restore();
//       }
//     }

//     /* =========================
//        CREATE OBJECTS
//     ========================= */
//     const particles = Array.from({ length: 60 }, () => new Particle());
//     const streaks = Array.from({ length: 10 }, () => new LightStreak());
//     let trailParticles = [];
//     let splashParticles = [];
    
//     let lastTrailTime = 0;
//     const trailInterval = 15; // ms between trail particles

//     /* =========================
//        ANIMATION LOOP
//     ========================= */
//     const animate = (timestamp) => {
//       time += 0.016;

//       // Clear background
//       ctx.fillStyle = "#0B0B0B";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw particles
//       particles.forEach((p) => {
//         p.update();
//         p.draw();
//       });

//       // Draw streaks
//       streaks.forEach((s) => {
//         s.update();
//         s.draw();
//       });

//       // Create trail particles on mouse move
//       if (mousePos.velocity && mousePos.velocity > 5) {
//         if (timestamp - lastTrailTime > trailInterval) {
//           // Add trail particles
//           const particleCount = Math.min(Math.floor(mousePos.velocity / 30), 5);
//           for (let i = 0; i < particleCount; i++) {
//             trailParticles.push(
//               new TrailParticle(mousePos.x, mousePos.y, mousePos.velocity)
//             );
//           }
          
//           // Add splash on fast movement
//           if (mousePos.velocity > 50 && Math.random() > 0.7) {
//             splashParticles.push(
//               new PaintSplash(mousePos.x, mousePos.y, mousePos.velocity)
//             );
//           }
          
//           lastTrailTime = timestamp;
//         }
//       }

//       // Update and draw trail particles
//       trailParticles = trailParticles.filter(p => {
//         const alive = p.update();
//         if (alive) p.draw();
//         return alive;
//       });

//       // Update and draw splash particles
//       splashParticles = splashParticles.filter(p => {
//         const alive = p.update();
//         if (alive) p.draw();
//         return alive;
//       });

//       // Limit trail particles for performance
//       if (trailParticles.length > 200) {
//         trailParticles = trailParticles.slice(-200);
//       }
//       if (splashParticles.length > 50) {
//         splashParticles = splashParticles.slice(-50);
//       }

//       // Ambient center glow (NO LOGO)
//       const centerX = canvas.width / 2;
//       const centerY = canvas.height / 2;
//       const glowScale = 1 + Math.sin(time * 0.5) * 0.05;

//       const glowLayers = [
//         { size: 260, opacity: 0.04 },
//         { size: 200, opacity: 0.06 },
//         { size: 140, opacity: 0.08 },
//         { size: 90, opacity: 0.12 },
//       ];

//       glowLayers.forEach((layer) => {
//         const gradient = ctx.createRadialGradient(
//           centerX,
//           centerY,
//           0,
//           centerX,
//           centerY,
//           layer.size * glowScale
//         );
//         gradient.addColorStop(0, `rgba(255, 152, 0, ${layer.opacity})`);
//         gradient.addColorStop(0.5, `rgba(255, 87, 34, ${layer.opacity * 0.6})`);
//         gradient.addColorStop(1, "transparent");

//         ctx.beginPath();
//         ctx.arc(centerX, centerY, layer.size * glowScale, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate(0);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: -1,
//         background: "#0B0B0B",
//         pointerEvents: "none",
//         overflow: "hidden",
//       }}
//     >
//       <canvas
//         ref={canvasRef}
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "block",
//         }}
//       />

//       {/* Vignette overlay */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.45) 100%)",
//           pointerEvents: "none",
//         }}
//       />
//     </div>
//   );
// }

// import { useEffect, useRef, useState } from "react";

// export default function BackgroundAnimation() {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0, velocity: 0 });
//   const prevMouseRef = useRef({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let time = 0;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const handleMouseMove = (e) => {
//       const newX = e.clientX;
//       const newY = e.clientY;
      
//       const dx = newX - prevMouseRef.current.x;
//       const dy = newY - prevMouseRef.current.y;
//       const velocity = Math.sqrt(dx * dx + dy * dy);
      
//       mouseRef.current = { x: newX, y: newY, velocity };
//       prevMouseRef.current = { x: newX, y: newY };
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     /* =========================
//        3D FLOATING RIBBONS
//     ========================= */
//     class Ribbon {
//       constructor() {
//         this.reset();
//       }
//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.length = Math.random() * 200 + 100;
//         this.amplitude = Math.random() * 20 + 10;
//         this.speed = Math.random() * 0.01 + 0.005;
//         this.thickness = Math.random() * 2 + 1;
//       }
//       draw(t) {
//         ctx.beginPath();
//         ctx.strokeStyle = "rgba(212, 175, 55, 0.15)"; // Golden metallic
//         ctx.lineWidth = this.thickness;
//         for (let i = 0; i < this.length; i++) {
//           const x = this.x + i;
//           const y = this.y + Math.sin(i * 0.02 + t) * this.amplitude;
//           if (i === 0) ctx.moveTo(x, y);
//           else ctx.lineTo(x, y);
//         }
//         ctx.stroke();
//         this.x -= 0.5;
//         if (this.x < -this.length) this.x = canvas.width;
//       }
//     }

//     /* =========================
//        PAINT SPLASH (The "Spread" Effect)
//     ========================= */
//     class Splash {
//       constructor(x, y, velocity) {
//         this.x = x;
//         this.y = y;
//         this.particles = [];
//         const count = Math.min(Math.floor(velocity / 2), 15);
        
//         for (let i = 0; i < count; i++) {
//           const angle = Math.random() * Math.PI * 2;
//           const force = Math.random() * (velocity * 0.15);
//           this.particles.push({
//             px: 0,
//             py: 0,
//             vx: Math.cos(angle) * force,
//             vy: Math.sin(angle) * force,
//             size: Math.random() * 5 + 2,
//             life: 1.0,
//             color: Math.random() > 0.5 ? '#D4AF37' : '#FFFFFF' // Gold or White
//           });
//         }
//       }

//       update() {
//         let active = false;
//         this.particles.forEach(p => {
//           p.px += p.vx;
//           p.py += p.vy;
//           p.vx *= 0.92; // Friction
//           p.vy *= 0.92;
//           p.life -= 0.015;
//           if (p.life > 0) active = true;
//         });
//         return active;
//       }

//       draw() {
//         this.particles.forEach(p => {
//           if (p.life <= 0) return;
//           ctx.beginPath();
//           ctx.arc(this.x + p.px, this.y + p.py, p.size * p.life, 0, Math.PI * 2);
//           ctx.fillStyle = p.color;
//           ctx.globalAlpha = p.life * 0.6;
//           ctx.fill();
//         });
//         ctx.globalAlpha = 1;
//       }
//     }

//     const ribbons = Array.from({ length: 8 }, () => new Ribbon());
//     let splashes = [];

//     const animate = () => {
//       time += 0.02;
      
//       // Deep Black Background with slight trail
//       ctx.fillStyle = "rgba(11, 11, 11, 0.15)";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw 3D Ribbons
//       ribbons.forEach(r => r.draw(time));

//       // Handle Splash creation on movement
//       if (mouseRef.current.velocity > 10) {
//         splashes.push(new Splash(mouseRef.current.x, mouseRef.current.y, mouseRef.current.velocity));
//       }

//       // Update and Draw Splashes
//       splashes = splashes.filter(s => {
//         const isActive = s.update();
//         if (isActive) s.draw();
//         return isActive;
//       });

//       // Keep performance stable
//       if (splashes.length > 40) splashes.shift();

//       // Subtle Center Golden Glow
//       const grad = ctx.createRadialGradient(
//         canvas.width/2, canvas.height/2, 0, 
//         canvas.width/2, canvas.height/2, canvas.width/1.5
//       );
//       grad.addColorStop(0, "rgba(212, 175, 55, 0.05)");
//       grad.addColorStop(1, "transparent");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0,0, canvas.width, canvas.height);

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div style={{
//       position: "fixed",
//       inset: 0,
//       zIndex: -1,
//       background: "#0B0B0B",
//       overflow: "hidden"
//     }}>
//       <canvas ref={canvasRef} style={{ display: "block" }} />
//       {/* Texture Overlay for a "Design Paper" feel */}
//       <div style={{
//         position: "absolute",
//         inset: 0,
//         opacity: 0.03,
//         pointerEvents: "none",
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
//       }} />
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";

// export default function BackgroundAnimation() {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0, velocity: 0 });
//   const prevMouseRef = useRef({ x: 0, y: 0 });
//   const splashesRef = useRef([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let time = 0;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const handleMouseMove = (e) => {
//       const dx = e.clientX - prevMouseRef.current.x;
//       const dy = e.clientY - prevMouseRef.current.y;
//       const velocity = Math.sqrt(dx * dx + dy * dy);
//       mouseRef.current = { x: e.clientX, y: e.clientY, velocity };
//       prevMouseRef.current = { x: e.clientX, y: e.clientY };

//       if (velocity > 15) {
//         splashesRef.current.push(new Splash(e.clientX, e.clientY, velocity));
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     /* =========================
//        BRANDED CIRCULAR RINGS (Matches UI Motifs)
//     ========================= */
//     class BrandRing {
//       constructor(index) {
//         this.index = index;
//         this.reset();
//       }
//       reset() {
//         this.radius = 100 + this.index * 150;
//         this.opacity = 0.03 + Math.random() * 0.05;
//       }
//       draw(t) {
//         const pulse = Math.sin(t * 0.5 + this.index) * 20;
//         ctx.beginPath();
//         ctx.arc(canvas.width / 2, canvas.height / 2, this.radius + pulse, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(255, 140, 0, ${this.opacity})`; // Branded Orange
//         ctx.lineWidth = 1;
//         ctx.stroke();
//       }
//     }

//     /* =========================
//        FLOWING STRANDS
//     ========================= */
//     class Strand {
//       constructor() {
//         this.reset();
//       }
//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.len = Math.random() * 300 + 200;
//         this.speed = Math.random() * 0.4 + 0.1;
//       }
//       draw(t) {
//         ctx.beginPath();
//         const grad = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y);
//         grad.addColorStop(0, "transparent");
//         grad.addColorStop(0.5, "rgba(255, 165, 0, 0.1)"); // Vedacurate Orange
//         grad.addColorStop(1, "transparent");
        
//         ctx.strokeStyle = grad;
//         ctx.lineWidth = 1.5;
        
//         ctx.moveTo(this.x, this.y);
//         for(let i=0; i<this.len; i+=10) {
//           const shift = Math.sin(i * 0.01 + t) * 15;
//           ctx.lineTo(this.x + i, this.y + shift);
//         }
//         ctx.stroke();
//         this.x -= this.speed;
//         if (this.x < -this.len) this.x = canvas.width;
//       }
//     }

//     class Splash {
//       constructor(x, y, velocity) {
//         this.x = x;
//         this.y = y;
//         this.particles = Array.from({ length: 6 }, () => ({
//           x: 0, y: 0,
//           vx: (Math.random() - 0.5) * velocity * 0.2,
//           vy: (Math.random() - 0.5) * velocity * 0.2,
//           life: 1.0,
//           size: Math.random() * 3 + 1
//         }));
//       }
//       update() {
//         this.particles.forEach(p => {
//           p.x += p.vx; p.y += p.vy;
//           p.life -= 0.02;
//         });
//         return (this.particles = this.particles.filter(p => p.life > 0)).length > 0;
//       }
//       draw() {
//         this.particles.forEach(p => {
//           ctx.beginPath();
//           ctx.arc(this.x + p.x, this.y + p.y, p.size, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(255, 140, 0, ${p.life * 0.6})`;
//           ctx.fill();
//         });
//       }
//     }

//     const rings = Array.from({ length: 6 }, (_, i) => new BrandRing(i));
//     const strands = Array.from({ length: 10 }, () => new Strand());

//     const animate = () => {
//       time += 0.01;
//       ctx.fillStyle = "#0B0B0B"; // Solid deep black to match your UI
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       rings.forEach(r => r.draw(time));
//       strands.forEach(s => s.draw(time));

//       splashesRef.current = splashesRef.current.filter(s => {
//         const active = s.update();
//         if (active) s.draw();
//         return active;
//       });

//       // Branded Radial Glow (Matching the center glow in your screenshots)
//       const grad = ctx.createRadialGradient(
//         canvas.width / 2, canvas.height / 2, 0,
//         canvas.width / 2, canvas.height / 2, canvas.width * 0.7
//       );
//       grad.addColorStop(0, "rgba(255, 140, 0, 0.06)");
//       grad.addColorStop(1, "transparent");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div style={{ position: "fixed", inset: 0, zIndex: -1, background: "#0B0B0B", overflow: "hidden" }}>
//       <canvas ref={canvasRef} style={{ display: "block" }} />
//       {/* Noise texture tuned to match the "Design Magic" feel */}
//       <div style={{
//         position: "absolute",
//         inset: 0,
//         opacity: 0.04,
//         pointerEvents: "none",
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
//       }} />
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";

// export default function BackgroundAnimation() {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: null, y: null });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let animationFrameId;

//     const particles = [];
//     const particleCount = 60;
//     const connectionDistance = 180;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas();

//     const handleMouseMove = (e) => {
//       mouseRef.current.x = e.clientX;
//       mouseRef.current.y = e.clientY;
//     };
    
//     const handleMouseLeave = () => {
//       mouseRef.current.x = null;
//       mouseRef.current.y = null;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     class Particle {
//       constructor() {
//         this.reset();
//       }
//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//         this.radius = Math.random() * 2 + 1;
//       }
//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//       }
//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255, 140, 0, 0.5)"; // Brand Orange
//         ctx.fill();
//       }
//     }

//     // Initialize particles
//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       // Background color matches your #0B0B0B UI
//       ctx.fillStyle = "#0B0B0B";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       // Draw subtle background rings (Vedacurate Motif)
//       ctx.beginPath();
//       ctx.arc(canvas.width / 2, canvas.height / 2, 400, 0, Math.PI * 2);
//       ctx.strokeStyle = "rgba(255, 140, 0, 0.02)";
//       ctx.lineWidth = 2;
//       ctx.stroke();

//       particles.forEach((p, i) => {
//         p.update();
//         p.draw();

//         // Check distance to mouse
//         if (mouseRef.current.x !== null) {
//           const dx = p.x - mouseRef.current.x;
//           const dy = p.y - mouseRef.current.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < connectionDistance) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(255, 140, 0, ${1 - dist / connectionDistance - 0.5})`;
//             ctx.lineWidth = 0.8;
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
//             ctx.stroke();
//           }
//         }

//         // Connect particles to each other
//         for (let j = i + 1; j < particles.length; j++) {
//           const p2 = particles[j];
//           const dx = p.x - p2.x;
//           const dy = p.y - p2.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < connectionDistance) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(255, 140, 0, ${0.1 * (1 - dist / connectionDistance)})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         }
//       });

//       // Branded spotlight glow
//       const grad = ctx.createRadialGradient(
//         canvas.width / 2, canvas.height / 2, 0,
//         canvas.width / 2, canvas.height / 2, canvas.width * 0.8
//       );
//       grad.addColorStop(0, "rgba(255, 140, 0, 0.05)");
//       grad.addColorStop(1, "transparent");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div style={{ position: "fixed", inset: 0, zIndex: -1, background: "#0B0B0B" }}>
//       <canvas ref={canvasRef} style={{ display: "block" }} />
//       {/* Heavy Grain Overlay for that "Paper Texture" found in your UI */}
//       <div style={{
//         position: "absolute",
//         inset: 0,
//         opacity: 0.05,
//         pointerEvents: "none",
//         backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
//       }} />
//     </div>
//   );
// }

// import { useEffect, useRef } from "react";

// const BRAND = {
//   bg: "#0B0B0B",
//   orange: "255, 140, 0",
// };

// export default function BackgroundAnimation() {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0, velocity: 0 });
//   const prevMouseRef = useRef({ x: 0, y: 0 });
//   const splashesRef = useRef([]);
//   const reduceMotionRef = useRef(false);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     let animationFrameId;
//     let time = 0;
//     let dpr = window.devicePixelRatio || 1;

//     reduceMotionRef.current = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     const resizeCanvas = () => {
//       const { innerWidth: w, innerHeight: h } = window;
//       dpr = window.devicePixelRatio || 1;

//       canvas.width = w * dpr;
//       canvas.height = h * dpr;
//       canvas.style.width = `${w}px`;
//       canvas.style.height = `${h}px`;

//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const updatePointer = (x, y) => {
//       const dx = x - prevMouseRef.current.x;
//       const dy = y - prevMouseRef.current.y;
//       const velocity = Math.sqrt(dx * dx + dy * dy);

//       mouseRef.current = { x, y, velocity };
//       prevMouseRef.current = { x, y };

//       if (velocity > 14 && splashesRef.current.length < 40) {
//         splashesRef.current.push(new Splash(x, y, velocity));
//       }
//     };

//     const handleMouseMove = (e) => updatePointer(e.clientX, e.clientY);
//     const handleTouchMove = (e) => {
//       if (e.touches[0]) {
//         updatePointer(e.touches[0].clientX, e.touches[0].clientY);
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("touchmove", handleTouchMove, { passive: true });

//     /* =========================
//        BRANDED CIRCULAR RINGS
//     ========================= */
//     class BrandRing {
//       constructor(index) {
//         this.index = index;
//         this.radius = 120 + index * 160;
//         this.opacity = 0.025 + Math.random() * 0.04;
//       }

//       draw(t) {
//         const pulse = reduceMotionRef.current
//           ? 0
//           : Math.sin(t * 0.6 + this.index) * 18;

//         const mx = (mouseRef.current.x - canvas.width / 2) * 0.02;
//         const my = (mouseRef.current.y - canvas.height / 2) * 0.02;

//         ctx.beginPath();
//         ctx.arc(
//           canvas.width / 2 + mx,
//           canvas.height / 2 + my,
//           this.radius + pulse,
//           0,
//           Math.PI * 2
//         );
//         ctx.strokeStyle = `rgba(${BRAND.orange}, ${this.opacity})`;
//         ctx.lineWidth = 1;
//         ctx.stroke();
//       }
//     }

//     /* =========================
//        FLOWING STRANDS
//     ========================= */
//     class Strand {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.len = Math.random() * 280 + 220;
//         this.speed = Math.random() * 0.4 + 0.15;
//       }

//       draw(t) {
//         ctx.beginPath();
//         const grad = ctx.createLinearGradient(
//           this.x,
//           this.y,
//           this.x + this.len,
//           this.y
//         );

//         grad.addColorStop(0, "transparent");
//         grad.addColorStop(0.5, `rgba(${BRAND.orange}, 0.12)`);
//         grad.addColorStop(1, "transparent");

//         ctx.strokeStyle = grad;
//         ctx.lineWidth = 1.5;

//         ctx.moveTo(this.x, this.y);
//         for (let i = 0; i < this.len; i += 12) {
//           const shift = reduceMotionRef.current
//             ? 0
//             : Math.sin(i * 0.01 + t) * 14;
//           ctx.lineTo(this.x + i, this.y + shift);
//         }
//         ctx.stroke();

//         this.x -= this.speed;
//         if (this.x < -this.len) this.x = canvas.width + this.len;
//       }
//     }

//     /* =========================
//        SPLASH PARTICLES
//     ========================= */
//     class Splash {
//       constructor(x, y, velocity) {
//         this.x = x;
//         this.y = y;
//         this.particles = Array.from({ length: 6 }, () => ({
//           x: 0,
//           y: 0,
//           vx: (Math.random() - 0.5) * velocity * 0.18,
//           vy: (Math.random() - 0.5) * velocity * 0.18,
//           life: 1,
//           size: Math.random() * 3 + 1,
//         }));
//       }

//       update() {
//         this.particles.forEach((p) => {
//           p.x += p.vx;
//           p.y += p.vy;
//           p.life -= 0.025;
//         });
//         this.particles = this.particles.filter((p) => p.life > 0);
//         return this.particles.length > 0;
//       }

//       draw() {
//         this.particles.forEach((p) => {
//           ctx.beginPath();
//           ctx.arc(this.x + p.x, this.y + p.y, p.size, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(${BRAND.orange}, ${p.life * 0.55})`;
//           ctx.fill();
//         });
//       }
//     }

//     const rings = Array.from({ length: 6 }, (_, i) => new BrandRing(i));
//     const strands = Array.from({ length: 10 }, () => new Strand());

//     const animate = () => {
//       time += 0.01;

//       ctx.fillStyle = BRAND.bg;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       rings.forEach((r) => r.draw(time));
//       strands.forEach((s) => s.draw(time));

//       splashesRef.current = splashesRef.current.filter((s) => {
//         const active = s.update();
//         if (active) s.draw();
//         return active;
//       });

//       // Central glow
//       const grad = ctx.createRadialGradient(
//         canvas.width / 2,
//         canvas.height / 2,
//         0,
//         canvas.width / 2,
//         canvas.height / 2,
//         canvas.width * 0.7
//       );
//       grad.addColorStop(0, `rgba(${BRAND.orange}, 0.06)`);
//       grad.addColorStop(1, "transparent");
//       ctx.fillStyle = grad;
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("touchmove", handleTouchMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div
//       style={{
//         position: "fixed",
//         inset: 0,
//         zIndex: -1,
//         background: BRAND.bg,
//         overflow: "hidden",
//       }}
//     >
//       <canvas ref={canvasRef} />
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           opacity: 0.04,
//           pointerEvents: "none",
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//         }}
//       />
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, velocity: 0 });
  const prevMouseRef = useRef({ x: 0, y: 0 });
  const splashesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let time = 0;

    // Branded Multi-color Palette
    const colors = [
      "#FF4500", // Orange Red
      "#FF8C00", // Dark Orange
      "#FFA500", // Orange
      "#FFD700", // Gold
      "#FFFFFF", // Pure White (for highlights)
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      const dx = e.clientX - prevMouseRef.current.x;
      const dy = e.clientY - prevMouseRef.current.y;
      const velocity = Math.sqrt(dx * dx + dy * dy);
      
      mouseRef.current = { x: e.clientX, y: e.clientY, velocity };
      prevMouseRef.current = { x: e.clientX, y: e.clientY };

      // Increase frequency of splash for smoother spreading
      if (velocity > 5) {
        splashesRef.current.push(new Splash(e.clientX, e.clientY, velocity, colors));
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    /* =========================
       MULTICOLOR SPREADER EFFECT
    ========================= */
    class Splash {
      constructor(x, y, velocity, palette) {
        this.x = x;
        this.y = y;
        // Create more particles based on speed
        const particleCount = Math.min(Math.floor(velocity / 2), 12);
        
        this.particles = Array.from({ length: particleCount }, () => {
          const angle = Math.random() * Math.PI * 2;
          const force = Math.random() * (velocity * 0.15);
          
          return {
            x: 0,
            y: 0,
            vx: Math.cos(angle) * force,
            vy: Math.sin(angle) * force,
            life: 1.0,
            size: Math.random() * 4 + 1,
            // Assign a random color from the palette
            color: palette[Math.floor(Math.random() * palette.length)]
          };
        });
      }

      update() {
        this.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.95; // Add slight friction
          p.vy *= 0.95;
          p.life -= 0.02; // Fade out speed
        });
        return (this.particles = this.particles.filter(p => p.life > 0)).length > 0;
      }

      draw() {
        this.particles.forEach(p => {
          ctx.beginPath();
          ctx.arc(this.x + p.x, this.y + p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.life * 0.8;
          ctx.fill();
          
          // Add a small glow to each particle
          ctx.shadowBlur = 10;
          ctx.shadowColor = p.color;
        });
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0; // Reset shadow for other drawings
      }
    }

    /* =========================
       REMAINING ELEMENTS (Rings & Strands)
    ========================= */
    class BrandRing {
      constructor(index) {
        this.index = index;
        this.reset();
      }
      reset() {
        this.radius = 100 + this.index * 150;
        this.opacity = 0.03 + Math.random() * 0.03;
      }
      draw(t) {
        const pulse = Math.sin(t * 0.5 + this.index) * 20;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, this.radius + pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 140, 0, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    class Strand {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.len = Math.random() * 300 + 200;
        this.speed = Math.random() * 0.4 + 0.1;
      }
      draw(t) {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(this.x, this.y, this.x + this.len, this.y);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, "rgba(255, 165, 0, 0.08)");
        grad.addColorStop(1, "transparent");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.moveTo(this.x, this.y);
        for(let i=0; i<this.len; i+=10) {
          const shift = Math.sin(i * 0.01 + t) * 10;
          ctx.lineTo(this.x + i, this.y + shift);
        }
        ctx.stroke();
        this.x -= this.speed;
        if (this.x < -this.len) this.x = canvas.width;
      }
    }

    const rings = Array.from({ length: 6 }, (_, i) => new BrandRing(i));
    const strands = Array.from({ length: 8 }, () => new Strand());

    const animate = () => {
      time += 0.015;
      ctx.fillStyle = "#0B0B0B";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rings.forEach(r => r.draw(time));
      strands.forEach(s => s.draw(time));

      splashesRef.current = splashesRef.current.filter(s => {
        const active = s.update();
        if (active) s.draw();
        return active;
      });

      // Cleanup to keep it fast
      if (splashesRef.current.length > 60) splashesRef.current.shift();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, background: "#0B0B0B", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
      }} />
    </div>
  );
}