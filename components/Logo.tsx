'use client';

import Image from 'next/image';
import { useState } from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  borderRadius?: number | string;
}

export default function Logo({ width = 120, height = 120, className = '', priority = false, borderRadius = '24px' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    // Fallback: mostrar un logo SVG generado basado en la descripción
    return (
      <div 
        className={className}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #d946ef 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(124, 58, 237, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <svg
          width={width * 0.7}
          height={height * 0.7}
          viewBox="0 0 100 100"
          style={{ zIndex: 1 }}
        >
          {/* Musical horn shape with N letter */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4facfe" />
              <stop offset="50%" stopColor="#764ba2" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
          
          {/* Horn circle */}
          <circle cx="50" cy="50" r="35" fill="url(#logoGradient)" opacity="0.9" />
          
          {/* Letter N */}
          <path
            d="M 30 25 L 30 75 L 45 50 L 60 75 L 60 25"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M 30 25 L 60 75"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div 
      className={`logo-wrapper ${className}`}
      style={{
        position: 'relative',
        display: 'inline-block',
        borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
        overflow: 'hidden',
      }}
    >
      <Image
        src="/Logo.png"
        alt="Notelert Logo"
        width={width}
        height={height}
        className="logo-image"
        priority={priority}
        onError={() => setImageError(true)}
        style={{
          borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
          boxShadow: '0 8px 24px rgba(124, 58, 237, 0.3)',
        }}
      />
      <style jsx>{`
        .logo-wrapper {
          background: transparent;
        }
        
        .logo-wrapper :global(img.logo-image) {
          mix-blend-mode: multiply;
          filter: brightness(1.05) contrast(1.1);
        }
        
        /* Para fondos oscuros, el multiply hará que el blanco sea transparente */
        /* Si el fondo es claro, podemos usar screen */
        @media (prefers-color-scheme: light) {
          .logo-wrapper :global(img.logo-image) {
            mix-blend-mode: screen;
          }
        }
      `}</style>
    </div>
  );
}

