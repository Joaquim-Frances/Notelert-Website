'use client';

import Image from 'next/image';

interface PhoneFrameProps {
  src: string;
  alt: string;
}

export default function PhoneFrame({ src, alt }: PhoneFrameProps) {
  return (
    <div className="phone-frame">
      <div className="notch"></div>
      <div className="screen">
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
      </div>
      <style jsx>{`
        .phone-frame {
          position: relative;
          width: 300px;
          aspect-ratio: 9 / 19.5;
          background: #1e1e1e;
          border-radius: 40px;
          box-shadow: 
            0 0 0 2px #333,
            0 0 0 4px #1a1a1a,
            0 20px 40px rgba(0,0,0,0.4);
          margin: 0 auto;
          border: 8px solid #121212;
          overflow: hidden;
        }

        .notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40%;
          height: 25px;
          background: #121212;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          z-index: 2;
        }

        .screen {
          width: 100%;
          height: 100%;
          background: #000;
          border-radius: 32px;
          overflow: hidden;
          position: relative;
        }
      `}</style>
    </div>
  );
}
