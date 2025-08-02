import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showText?: boolean;
}

export function Logo({ className = '', width = 200, height = 80, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Professional Logo Image */}
      <div className="relative">
        <Image
          src="/logo.avif"
          alt="London Eyecare Collective"
          width={width}
          height={height}
          className="object-contain drop-shadow-lg"
          priority
        />
      </div>
    </div>
  );
}

export function LogoMark({ className = '', size = 40 }: { className?: string; size?: number }) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/logo.avif"
        alt="London Eyecare Collective"
        width={size}
        height={size}
        className="object-contain drop-shadow-lg"
        priority
      />
    </div>
  );
}