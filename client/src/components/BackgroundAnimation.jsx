import React from 'react';
import EnergyFlowLogo from './EnergyFlowLogo';

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-10 flex items-center justify-center overflow-hidden">
        {/* Large scaled up version for background ambience */}
        <div className="scale-[3] transform opacity-30 blur-sm">
            <EnergyFlowLogo />
        </div>
        
        {/* Floating shapes for extra dynamic feel */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-vc-yellow rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-vc-orange rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
    </div>
  );
};

export default BackgroundAnimation;
