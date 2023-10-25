import Image from 'next/image';
import React from 'react';

interface CloudProps {
  cloudCover?: number;
}

export default function Cloud({ cloudCover }: CloudProps) {
  return (
    <div className="absolute w-full h-full overflow-hidden top-0 opacity-50 pointer-events-none">
      <Image
        src="/asset/cloud1.png"
        alt="cloud1"
        className="cloud"
        style={
          { '--i': 1, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
        width={200}
        height={200}
      />
      <Image
        src="/asset/cloud2.png"
        alt="cloud2"
        className="cloud"
        style={
          { '--i': 2, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
        width={200}
        height={200}
      />
      <Image
        src="/asset/cloud3.png"
        alt="cloud3"
        className="cloud"
        style={
          { '--i': 3, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
        width={200}
        height={200}
      />
      <Image
        src="/asset/cloud4.png"
        alt="cloud4"
        className="cloud"
        style={
          { '--i': 4, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
        width={200}
        height={200}
      />
      <Image
        src="/asset/cloud5.png"
        alt="cloud5"
        className="cloud"
        style={
          { '--i': 5, opacity: `0.${cloudCover}` } as React.CSSProperties & {
            '--i': number;
          }
        }
        width={200}
        height={200}
      />
    </div>
  );
}
