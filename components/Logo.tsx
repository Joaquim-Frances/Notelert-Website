'use client';

import Image from 'next/image';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  borderRadius?: number | string;
}

export default function Logo({ width = 120, height = 120, className = '', priority = false, borderRadius = 0 }: LogoProps) {
  return (
    <Image
      src="/Logo-dark.png"
      alt="Notelert Logo"
      width={width}
      height={height}
      className={`logo-image ${className}`}
      priority={priority}
      style={{
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
      }}
    />
  );
}
