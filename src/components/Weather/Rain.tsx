import React, { useEffect, useState } from 'react';

interface RainDrops {
  left: number;
  duration: number;
  delay: number;
}

export default function Rain() {
  const [rainArr, setRainArr] = useState<RainDrops[]>([]);

  const generateRainArr = () => {
    const newrRainArr = [];
    for (let i = 0; i < 100; i++) {
      const left = Math.floor(Math.random() * window.innerWidth);
      const duration = 0.7 + Math.random() * 0.3;
      const delay = Math.random() * 5;

      const raindrop = {
        left,
        duration,
        delay,
      };
      newrRainArr.push(raindrop);
    }
    setRainArr(newrRainArr);
  };

  useEffect(() => {
    generateRainArr();
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden top-0 opacity-50 pointer-events-none">
      {rainArr.map((item, index) => (
        <span
          key={index}
          className="raindrop"
          style={{
            left: item.left + 'px',
            animationDelay: item.delay + 's',
            animationDuration: item.duration + 's',
          }}
        ></span>
      ))}
    </div>
  );
}
