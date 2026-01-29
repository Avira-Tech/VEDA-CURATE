import React, { useRef, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  ScrollControls,
  Scroll,
  Float,
  Environment,
  useScroll,
  Sparkles,
  ContactShadows,
  MeshWobbleMaterial, MeshDistortMaterial,
} from '@react-three/drei';
import * as THREE from 'three';

// --- 1. 3D Model Components ---

const BrandingModel = () => (
  <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
    <mesh castShadow>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshPhysicalMaterial color="#3b82f6" roughness={0.1} metalness={0.8} transmission={0.5} thickness={0.5} />
    </mesh>
    <Sparkles count={40} scale={4} size={3} color="#3b82f6" speed={0.5} />
  </Float>
);

// const SocialMediaModel = () => (
//   <Float speed={1.5} rotationIntensity={1}>
//     <group>
//       <mesh castShadow position={[0, 0, 0]}>
//         <boxGeometry args={[0.6, 1.2, 0.1]} />
//         <meshStandardMaterial color="#10b981" metalness={0.6} roughness={0.3} />
//       </mesh>
//       <mesh position={[0, 0, 0.06]}>
//         <planeGeometry args={[0.5, 1]} />
//         <meshBasicMaterial color="#34d399" />
//       </mesh>
//       <mesh position={[-0.15, 0.3, 0.07]}>
//         <sphereGeometry args={[0.05, 16, 16]} />
//         <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
//       </mesh>
//       <mesh position={[0.15, 0.3, 0.07]}>
//         <sphereGeometry args={[0.05, 16, 16]} />
//         <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
//       </mesh>
//       <mesh position={[0, -0.3, 0.07]}>
//         <sphereGeometry args={[0.05, 16, 16]} />
//         <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
//       </mesh>
//     </group>
//   </Float>
// );

// const ARVRModel = () => (
//   <Float speed={2} floatIntensity={1}>
//     <group>
//       <mesh castShadow position={[0, 0, 0]}>
//         <boxGeometry args={[1.5, 0.8, 0.3]} />
//         <meshStandardMaterial color="#ff6b00" metalness={0.7} roughness={0.2} />
//       </mesh>
//       <mesh position={[-0.4, 0, 0.16]}>
//         <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
//         <meshBasicMaterial color="#ff6b00" transparent opacity={0.8} />
//       </mesh>
//       <mesh position={[0.4, 0, 0.16]}>
//         <cylinderGeometry args={[0.2, 0.2, 0.1, 16]} />
//         <meshBasicMaterial color="#ff6b00" transparent opacity={0.8} />
//       </mesh>
//       <mesh position={[0, -0.5, 0]}>
//         <torusGeometry args={[0.8, 0.05, 16, 50]} />
//         <meshStandardMaterial color="#ff6b00" />
//       </mesh>
//       <mesh scale={2}>
//         <sphereGeometry args={[1, 32, 32]} />
//         <meshBasicMaterial color="#ff6b00" transparent opacity={0.05} />
//       </mesh>
//     </group>
//   </Float>
// );

// const WebDevModel = () => (
//   <Float speed={1.5} floatIntensity={0.5}>
//     <group>
//       <mesh position={[0, -0.8, 0]} castShadow>
//         <boxGeometry args={[0.8, 0.2, 0.6]} />
//         <meshStandardMaterial color="#84cc16" roughness={0.8} />
//       </mesh>
//       <mesh position={[0, -0.4, 0]} castShadow>
//         <cylinderGeometry args={[0.05, 0.05, 0.8, 16]} />
//         <meshStandardMaterial color="#84cc16" />
//       </mesh>
//       <mesh position={[0, 0.2, 0]} castShadow>
//         <boxGeometry args={[1.2, 0.8, 0.1]} />
//         <meshStandardMaterial color="#84cc16" emissive="#84cc16" emissiveIntensity={0.1} />
//       </mesh>
//       <mesh position={[-0.4, 0.2, 0.06]}>
//         <boxGeometry args={[0.8, 0.05, 0.01]} />
//         <meshStandardMaterial color="#fbbf24" />
//       </mesh>
//       <mesh position={[-0.3, 0.1, 0.06]}>
//         <boxGeometry args={[0.6, 0.05, 0.01]} />
//         <meshStandardMaterial color="#fbbf24" />
//       </mesh>
//       <mesh position={[-0.5, 0, 0.06]}>
//         <boxGeometry args={[0.7, 0.05, 0.01]} />
//         <meshStandardMaterial color="#fbbf24" />
//       </mesh>
//       <Sparkles count={20} scale={2} size={2} color="#84cc16" speed={0.3} />
//     </group>
//   </Float>
// );

// const DataAnalyticsModel = () => (
//   <Float speed={1.5} floatIntensity={0.3}>
//     <group>
//       <mesh position={[0, -1, 0]} castShadow>
//         <boxGeometry args={[2, 0.2, 1]} />
//         <meshStandardMaterial color="#ef4444" metalness={0.4} roughness={0.2} />
//       </mesh>
//       <mesh position={[-0.6, -0.3, 0]} castShadow>
//         <boxGeometry args={[0.2, 1, 0.2]} />
//         <meshStandardMaterial color="#fde047" />
//       </mesh>
//       <mesh position={[-0.2, -0.5, 0]} castShadow>
//         <boxGeometry args={[0.2, 0.8, 0.2]} />
//         <meshStandardMaterial color="#fde047" />
//       </mesh>
//       <mesh position={[0.2, -0.2, 0]} castShadow>
//         <boxGeometry args={[0.2, 1.2, 0.2]} />
//         <meshStandardMaterial color="#fde047" />
//       </mesh>
//       <mesh position={[0.6, -0.6, 0]} castShadow>
//         <boxGeometry args={[0.2, 0.6, 0.2]} />
//         <meshStandardMaterial color="#fde047" />
//       </mesh>
//       <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 4]}>
//         <coneGeometry args={[0.4, 0.1, 8]} />
//         <meshStandardMaterial color="#ef4444" />
//       </mesh>
//       <mesh position={[0, 0.5, 0]} rotation={[0, 0, -Math.PI / 4]}>
//         <coneGeometry args={[0.4, 0.1, 8]} />
//         <meshStandardMaterial color="#fde047" />
//       </mesh>
//     </group>
//   </Float>
// );

// --- 2. Scene Orchestration ---
const SocialMediaModel = () => (
  <Float speed={2} rotationIntensity={1.5}>
    <group>
      {/* Central Phone/Feed Body */}
      <mesh castShadow>
        <boxGeometry args={[1, 1.8, 0.15]} />
        <meshStandardMaterial color="#065f46" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Floating "Notification" Bubbles */}
      <mesh position={[0.7, 0.5, 0.2]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} />
      </mesh>
      <mesh position={[-0.6, -0.3, 0.1]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#34d399" />
      </mesh>
      {/* Scroll Bars */}
      {[0.4, 0.1, -0.2].map((y, i) => (
        <mesh key={i} position={[0, y, 0.08]}>
          <planeGeometry args={[0.7, 0.15]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  </Float>
);

const ARVRModel = () => (
  <Float speed={3} floatIntensity={2}>
    <group>
      {/* The Headset Base */}
      <mesh castShadow>
        <boxGeometry args={[1.6, 0.8, 0.8]} />
        <meshStandardMaterial color="#222" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Lenses/Glass Front */}
      <mesh position={[0, 0, 0.41]}>
        <planeGeometry args={[1.4, 0.6]} />
        <MeshWobbleMaterial color="#ff6b00" factor={0.2} speed={1} metalness={0.9} />
      </mesh>
      {/* Floating Coordinate Grid */}
      <gridHelper args={[4, 10, "#ff6b00", "#444"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -1]} />
      {/* Orbiting Tech Rings */}
      <mesh rotation={[1.2, 0, 0]}>
        <torusGeometry args={[2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ff6b00" />
      </mesh>
    </group>
  </Float>
);

const WebDevModel = () => (
  <Float speed={2} floatIntensity={1}>
    <group>
      {/* Code "Window" */}
      <mesh castShadow>
        <boxGeometry args={[1.8, 1.2, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} roughness={0.5} />
      </mesh>
      {/* Floating Syntax Elements */}
      <group position={[-0.5, 0, 0.1]}>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.6, 0.08, 0.02]} />
          <meshStandardMaterial color="#84cc16" />
        </mesh>
        <mesh position={[0.2, 0.1, 0]}>
          <boxGeometry args={[0.8, 0.08, 0.02]} />
          <meshStandardMaterial color="#fbbf24" />
        </mesh>
        <mesh position={[-0.1, -0.1, 0]}>
          <boxGeometry args={[0.5, 0.08, 0.02]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      </group>
      {/* Spinning "Logic" Gear */}
      <mesh position={[0.6, -0.3, 0.2]} rotation={[0, 0, Date.now() * 0.001]}>
        <torusGeometry args={[0.2, 0.05, 16, 8]} />
        <meshStandardMaterial color="#84cc16" wireframe />
      </mesh>
    </group>
  </Float>
);

const DataAnalyticsModel = () => (
  <Float speed={2} floatIntensity={0.5}>
    <group>
      {/* Modern Bar Chart on a Platform */}
      <mesh position={[0, -0.8, 0]} castShadow>
        <cylinderGeometry args={[1.5, 1.5, 0.1, 32]} />
        <meshStandardMaterial color="#333" />
      </mesh>
      {/* Dynamic Data Bars */}
      {[
        { h: 1.2, p: -0.6, c: "#ef4444" },
        { h: 1.8, p: -0.2, c: "#fde047" },
        { h: 1.4, p: 0.2, c: "#ef4444" },
        { h: 2.2, p: 0.6, c: "#fde047" },
      ].map((bar, i) => (
        <mesh key={i} position={[bar.p, bar.h / 2 - 0.7, 0]}>
          <boxGeometry args={[0.25, bar.h, 0.25]} />
          <meshStandardMaterial color={bar.c} emissive={bar.c} emissiveIntensity={0.2} />
        </mesh>
      ))}
      {/* Floating Trend Line */}
      <mesh position={[0, 0.5, 0.2]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[2, 0.02, 0.02]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  </Float>
);
// const Scene = ({ currentSection, setActiveSection }) => {
//   const scroll = useScroll();
//   const groupRef = useRef();
//   const targetY = useRef(0);

//   const colors = ["#080808", "#051510", "#150d05", "#0d1505", "#150505"];

//   useFrame((state) => {
//     if (!groupRef.current) return;

//     const offset = scroll.offset;
//     const effectiveOffset = currentSection !== null ? currentSection / 5 : offset;
    
//     targetY.current = -effectiveOffset * 40;

//     groupRef.current.position.y = THREE.MathUtils.lerp(
//       groupRef.current.position.y,
//       targetY.current,
//       0.1
//     );

//     const colorIndex = Math.min(Math.floor(effectiveOffset * colors.length), colors.length - 1);
//     state.scene.background.lerp(new THREE.Color(colors[colorIndex]), 0.05);

//     const sectionIndex = Math.min(Math.floor(effectiveOffset * 6), 5);
//     setActiveSection(sectionIndex);

//     state.camera.lookAt(0, 0, 0);
//   });

//   const projects = [
//     { model: <BrandingModel />, pos: [2, 0, 0] },
//     { model: <SocialMediaModel />, pos: [-2, 8, 0] },
//     { model: <ARVRModel />, pos: [2, 16, 0] },
//     { model: <WebDevModel />, pos: [-2, 24, 0] },
//     { model: <DataAnalyticsModel />, pos: [2, 32, 0] },
//   ];

//   return (
//     <group ref={groupRef}>
//       <ContactShadows opacity={0.5} scale={20} blur={2.5} far={4.5} />
//       {projects.map((p, i) => (
//         <group key={i} position={p.pos}>
//           {p.model}
//           <pointLight position={[2, 2, 2]} intensity={5} color="white" />
//           <pointLight position={[-2, -2, -2]} intensity={2} color="white" />
//         </group>
//       ))}
//     </group>
//   );
// };

// --- 3. Main Viewer Component ---
const Scene = ({ currentSection, setActiveSection }) => {
  const scroll = useScroll();
  const groupRef = useRef();
  
  // Adjusted spacing to match section heights (10 units per section is standard)
  const SECTION_DISTANCE = 15; 

  useFrame((state) => {
    if (!groupRef.current) return;

    // Use the scroll offset (0 to 1) to determine vertical position
    const offset = scroll.offset;
    groupRef.current.position.y = offset * (SECTION_DISTANCE * 4);

    // Dynamic background color transition
    const colors = ["#080808", "#051510", "#150d05", "#0d1505", "#150505"];
    const colorIndex = Math.min(Math.floor(offset * colors.length), colors.length - 1);
    state.scene.background.lerp(new THREE.Color(colors[colorIndex]), 0.05);

    // Update active section state for the sidebar
    const sectionIndex = Math.min(Math.floor(offset * 5), 4);
    setActiveSection(sectionIndex);
  });

  const projects = [
    { model: <BrandingModel />, pos: [3, 0, 0] },
    { model: <SocialMediaModel />, pos: [-3, -SECTION_DISTANCE, 0] },
    { model: <ARVRModel />, pos: [3, -SECTION_DISTANCE * 2, 0] },
    { model: <WebDevModel />, pos: [-3, -SECTION_DISTANCE * 3, 0] },
    { model: <DataAnalyticsModel />, pos: [3, -SECTION_DISTANCE * 4, 0] },
  ];

  return (
    <group ref={groupRef}>
      {projects.map((p, i) => (
        <group key={i} position={p.pos}>
          {p.model}
        </group>
      ))}
    </group>
  );
};
const ServiceModel = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [activeSection, setActiveSection] = useState(0);

  const projectInfo = [
    { title: "Creative Branding", category: "BRANDING", color: "from-blue-400 to-indigo-600", desc: "Crafting unique brand identities that resonate and inspire, from logos to comprehensive visual strategies." },
    { title: "Social Media", category: "SOCIAL", color: "from-emerald-400 to-teal-600", desc: "Strategic social media management and content creation to boost engagement and grow your online presence." },
    { title: "AR/VR Experiences", category: "ARVR", color: "from-orange-400 to-red-600", desc: "Immersive augmented and virtual reality solutions for interactive storytelling and user experiences." },
    { title: "Web Development", category: "WEBDEV", color: "from-lime-400 to-green-600", desc: "Building responsive, scalable websites and web applications with modern technologies and best practices." },
    { title: "Data Analytics", category: "DATA", color: "from-red-400 to-pink-600", desc: "Transforming raw data into actionable insights with advanced analytics, visualization, and reporting tools." },
  ];

  const scrollToCaseStudy = (index) => {
    setCurrentSection(index);
    setTimeout(() => setCurrentSection(null), 1500);
  };

  return (
    <div className="w-full h-screen relative">
      {/* Fixed Sidebar Progress */}
      <div className="fixed left-6 xl:left-12 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-6 pointer-events-auto">
        {projectInfo.map((_, i) => (
          <div
            key={i}
            className="group flex items-center gap-4 cursor-pointer"
            onClick={() => scrollToCaseStudy(i)}
          >
            <div className={`h-[2px] transition-all duration-500 ${i === activeSection ? 'w-10 bg-brand-orange-400' : 'w-6 bg-white/10 group-hover:w-10 group-hover:bg-brand-orange-400/50'}`} />
            <span className={`text-[10px] font-mono tracking-tighter transition-all duration-500 ${i === activeSection ? 'text-white' : 'text-white/30 group-hover:text-white/70'}`}>0{i+1}</span>
          </div>
        ))}
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          shadows
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
          camera={{ position: [0, 0, 12], fov: 35 }}
          onCreated={(state) => { state.scene.background = new THREE.Color('#080808'); }}
        >
          <Environment preset="city" />
          <ambientLight intensity={0.4} />
          
          <Suspense fallback={null}>
            <ScrollControls pages={projectInfo.length} damping={0.2}>
              <Scene currentSection={currentSection} setActiveSection={setActiveSection} />
              
              <Scroll html style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}>
                <div className="w-screen">
                  {projectInfo.map((info, i) => (
                    <section
                      key={i}
                      className={`h-screen flex items-center px-8 md:px-16 xl:px-40 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                      style={{ pointerEvents: 'none' }}
                    >
                      <div className="max-w-2xl relative pointer-events-auto">
                        <h2 className="absolute -top-20 -left-10 md:-left-20 text-[10rem] md:text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase italic leading-none">
                          {info.category}
                        </h2>
                        
                        <div className="relative z-10 space-y-6 md:space-y-8">
                          <div className="flex items-center gap-4 md:gap-6">
                            <div className="w-12 md:w-16 h-[1px] bg-brand-orange-400" />
                            <span className="text-[10px] md:text-[10px] font-mono tracking-[0.6em] text-white/50 uppercase">
                              Case Study 0{i+1}
                            </span>
                          </div>

                          <h1 className={`text-5xl md:text-7xl xl:text-[9rem] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${info.color} uppercase italic`}>
                            {info.title.split(' ')[0]} <br />
                            <span className="text-white not-italic">{info.title.split(' ').slice(1).join(' ')}</span>
                          </h1>

                          <p className="text-white/40 text-base md:text-xl font-light leading-relaxed max-w-md border-l-2 border-brand-orange-400/20 pl-6 md:pl-8">
                            {info.desc}
                          </p>

                          <div className="flex gap-4 md:gap-8 pt-4 md:pt-6">
                            <button className="group relative px-6 md:px-10 py-3 md:py-5 bg-white text-black font-black text-[10px] md:text-xs tracking-widest rounded-full overflow-hidden transition-all pointer-events-auto">
                              <span className="relative z-10">VIEW PROJECT</span>
                              <div className="absolute inset-0 bg-brand-orange-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                            <button className="px-6 md:px-10 py-3 md:py-5 border border-white/10 text-white font-black text-[10px] md:text-xs tracking-widest rounded-full hover:bg-white/5 transition-all pointer-events-auto">
                              LIVE
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default ServiceModel;

