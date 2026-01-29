// import { useEffect, useRef } from "react";

// // Class definitions moved outside useEffect to avoid inline class declarations
// class BrushStroke {
//   constructor(x, y, velocity, palette, ctx) {
//     this.x = x;
//     this.y = y;
//     this.ctx = ctx;
//     const particleCount = Math.min(Math.floor(velocity / 1.5), 15);
    
//     this.particles = Array.from({ length: particleCount }, () => {
//       const angle = Math.random() * Math.PI * 2;
//       const force = Math.random() * (velocity * 0.2);
//       return {
//         x: 0, y: 0,
//         vx: Math.cos(angle) * force,
//         vy: Math.sin(angle) * force,
//         life: 1.0,
//         size: Math.random() * 5 + 2,
//         color: palette[Math.floor(Math.random() * palette.length)]
//       };
//     });
//   }

//   update() {
//     this.particles.forEach(p => {
//       p.x += p.vx; p.y += p.vy;
//       p.vx *= 0.92; p.vy *= 0.92;
//       p.life -= 0.015;
//     });
//     this.particles = this.particles.filter(p => p.life > 0);
//     return this.particles.length > 0;
//   }

//   draw() {
//     this.particles.forEach(p => {
//       this.ctx.globalAlpha = p.life * 0.6;
//       this.ctx.shadowBlur = 15;
//       this.ctx.shadowColor = p.color;
//       this.ctx.fillStyle = p.color;
//       this.ctx.beginPath();
//       this.ctx.arc(this.x + p.x, this.y + p.y, p.size * p.life, 0, Math.PI * 2);
//       this.ctx.fill();
//     });
//     this.ctx.shadowBlur = 0;
//   }
// }

// class KineticGrid {
//   constructor() {
//     this.ctx = null;
//     this.width = 0;
//     this.height = 0;
//     this.spacing = 60;
//   }
//   updateDimensions(ctx, width, height) {
//     this.ctx = ctx;
//     this.width = width;
//     this.height = height;
//   }
//   draw(mouseRef) {
//     if (!this.ctx) return;
//     this.ctx.lineWidth = 0.5;
//     this.ctx.strokeStyle = "rgba(255, 140, 0, 0.05)";
    
//     for (let x = 0; x < this.width; x += this.spacing) {
//       this.ctx.beginPath();
//       this.ctx.moveTo(x, 0);
//       for (let y = 0; y < this.height; y += 20) {
//         const dist = Math.hypot(x - mouseRef.current.x, y - mouseRef.current.y);
//         const warp = Math.max(0, (150 - dist) * 0.2);
//         this.ctx.lineTo(x + (x < mouseRef.current.x ? -warp : warp), y);
//       }
//       this.ctx.stroke();
//     }
//     for (let y = 0; y < this.height; y += this.spacing) {
//       this.ctx.beginPath();
//       this.ctx.moveTo(0, y);
//       for (let x = 0; x < this.width; x += 20) {
//         const dist = Math.hypot(x - mouseRef.current.x, y - mouseRef.current.y);
//         const warp = Math.max(0, (150 - dist) * 0.2);
//         this.ctx.lineTo(x, y + (y < mouseRef.current.y ? -warp : warp));
//       }
//       this.ctx.stroke();
//     }
//   }
// }

// class DesignNode {
//   constructor() {
//     this.ctx = null;
//     this.width = 0;
//     this.height = 0;
//     this.reset();
//   }
//   updateDimensions(ctx, width, height) {
//     this.ctx = ctx;
//     this.width = width;
//     this.height = height;
//   }
//   reset() {
//     this.x = Math.random() * this.width;
//     this.y = Math.random() * this.height;
//     this.vx = (Math.random() - 0.5) * 0.5;
//     this.vy = (Math.random() - 0.5) * 0.5;
//   }
//   update() {
//     this.x += this.vx;
//     this.y += this.vy;
//     if (this.x < 0 || this.x > this.width) this.vx *= -1;
//     if (this.y < 0 || this.y > this.height) this.vy *= -1;
//   }
//   draw(mouseRef) {
//     if (!this.ctx) return;
//     const dist = Math.hypot(this.x - mouseRef.current.x, this.y - mouseRef.current.y);
//     if (dist < 250) {
//       this.ctx.beginPath();
//       this.ctx.moveTo(this.x, this.y);
//       this.ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
//       this.ctx.strokeStyle = `rgba(255, 165, 0, ${0.15 * (1 - dist / 250)})`;
//       this.ctx.stroke();
      
//       this.ctx.fillStyle = "rgba(255, 255, 255, 0.2)";
//       this.ctx.fillRect(this.x - 2, this.y - 2, 4, 4);
//     }
//   }
// }

// export default function BackgroundAnimation() {
//   const canvasRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0, velocity: 0 });
//   const prevMouseRef = useRef({ x: 0, y: 0 });
//   const splashesRef = useRef([]);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d", { alpha: false });
//     let animationFrameId;

//     // Set canvas dimensions
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const colors = ["#FF4500", "#FF8C00", "#FFA500", "#FFD700", "#FFFFFF"];

//     // Create instances
//     const grid = new KineticGrid();
//     const nodes = Array.from({ length: 40 }, () => new DesignNode());

//     // Initialize dimensions
//     grid.updateDimensions(ctx, canvas.width, canvas.height);
//     nodes.forEach(n => n.updateDimensions(ctx, canvas.width, canvas.height));

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       // Update grid and nodes with new dimensions
//       grid.updateDimensions(ctx, canvas.width, canvas.height);
//       nodes.forEach(n => n.updateDimensions(ctx, canvas.width, canvas.height));
//     };
//     window.addEventListener("resize", resizeCanvas);

//     const handleMouseMove = (e) => {
//       const dx = e.clientX - prevMouseRef.current.x;
//       const dy = e.clientY - prevMouseRef.current.y;
//       const velocity = Math.sqrt(dx * dx + dy * dy);
      
//       mouseRef.current = { x: e.clientX, y: e.clientY, velocity };
//       prevMouseRef.current = { x: e.clientX, y: e.clientY };

//       if (velocity > 4) {
//         splashesRef.current.push(new BrushStroke(e.clientX, e.clientY, velocity, colors, ctx));
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     const animate = () => {
//       ctx.globalAlpha = 1;
//       ctx.fillStyle = "#080808";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       grid.draw(mouseRef);

//       nodes.forEach(n => {
//         n.update();
//         n.draw(mouseRef);
//       });

//       splashesRef.current = splashesRef.current.filter(s => {
//         const active = s.update();
//         if (active) s.draw();
//         return active;
//       });

//       if (splashesRef.current.length > 80) splashesRef.current.shift();

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
//     <div className="fixed inset-0 z-[-1] bg-[#080808] overflow-hidden pointer-events-none">
//       <canvas ref={canvasRef} className="w-full h-full block" />
//       {/* Noise texture */}
//       <div 
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
//         }}
//       />
//       {/* Vignette */}
//       <div 
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background: "radial-gradient(circle, transparent 40%, rgba(0,0,0,0.4) 100%)"
//         }}
//       />
//     </div>
//   );
// }

import { useEffect, useRef } from "react";

/* =========================
   FAST-DECAY INK DROP
   Optimized for rapid disappearance
========================= */
class InkDrop {
  constructor(x, y, color, velocity, ctx) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.color = color;
    this.opacity = 0.8; // Slightly higher initial pop
    this.radius = Math.random() * 2 + 1;
    this.maxRadius = Math.random() * (velocity * 2.0) + 15;
    
    // Increased growth rate for faster spread
    this.growthRate = Math.random() * 1.5 + 0.5;
    
    this.vx = (Math.random() - 0.5) * 1.5;
    this.vy = (Math.random() - 0.5) * 1.5;
  }

  update() {
    if (this.radius < this.maxRadius) {
      this.radius += this.growthRate;
    }
    
    // SPEED UPDATE: Increased opacity decay from 0.006 to 0.035
    // This makes the drop disappear roughly 6x faster.
    this.opacity -= 0.035; 
    
    this.x += this.vx;
    this.y += this.vy;

    return this.opacity > 0;
  }

  draw() {
    this.ctx.beginPath();
    const gradient = this.ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius
    );
    
    const rgb = this.hexToRgb(this.color);
    gradient.addColorStop(0, `rgba(${rgb}, ${this.opacity})`);
    gradient.addColorStop(0.5, `rgba(${rgb}, ${this.opacity * 0.2})`);
    gradient.addColorStop(1, `rgba(${rgb}, 0)`);

    this.ctx.fillStyle = gradient;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }

  hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }
}

export default function BackgroundAnimation() {
  const canvasRef = useRef(null);
  const dropsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false });
    let animationFrameId;

    const palette = ["#FF4500", "#FF8C00", "#FFA500", "#FFFFFF"];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e) => {
      const dx = e.clientX - mouseRef.current.lastX;
      const dy = e.clientY - mouseRef.current.lastY;
      const velocity = Math.sqrt(dx * dx + dy * dy);

      if (velocity > 3) {
        // Reduced drop count slightly for a cleaner "fast" feel
        const dropCount = Math.min(Math.floor(velocity / 6), 3);
        for (let i = 0; i < dropCount; i++) {
          dropsRef.current.push(new InkDrop(
            e.clientX + (Math.random() - 0.5) * 15,
            e.clientY + (Math.random() - 0.5) * 15,
            palette[Math.floor(Math.random() * palette.length)],
            velocity,
            ctx
          ));
        }
      }

      mouseRef.current.lastX = e.clientX;
      mouseRef.current.lastY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      // SPEED UPDATE: Increased background alpha from 0.1 to 0.4
      // This wipes the "trails" off the screen much faster.
      ctx.fillStyle = "rgba(8, 8, 8, 0.4)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dropsRef.current = dropsRef.current.filter(drop => {
        const active = drop.update();
        if (active) drop.draw();
        return active;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#080808] overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-60" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
      />
    </div>
  );
}