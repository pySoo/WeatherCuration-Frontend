import React, { useEffect, useState } from 'react';

interface Star {
  x: number;
  y: number;
  randomNumberTwotoFour: number;
  duration: number;
}

export default function Stars() {
  const [stars, setStars] = useState<Star[]>([]);

  const generateStarsArr = () => {
    const newStarsArr = [];
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
      const x = parseFloat(Math.random().toFixed(2)) * 100;
      const y = parseFloat(Math.random().toFixed(2)) * 100;
      const randomNumberTwotoFour = Math.floor(Math.random() * 3) + 2;
      const duration = 0.7 + Math.random() * 0.3;

      const star = {
        x,
        y,
        randomNumberTwotoFour,
        duration,
      };

      newStarsArr.push(star);
    }

    setStars(newStarsArr);
  };

  useEffect(() => {
    generateStarsArr();
  }, []);

  return (
    <div className="absolute w-full h-full overflow-hidden top-0 opacity-50 pointer-events-none">
      {stars.map((item, index) => (
        <span
          key={index}
          className="star"
          style={{
            width: `${item.randomNumberTwotoFour}px`,
            height: `${item.randomNumberTwotoFour}px`,
            top: item.x + '%',
            left: item.y + '%',
            animationDuration: item.duration + 's',
          }}
        />
      ))}
    </div>
  );
}
