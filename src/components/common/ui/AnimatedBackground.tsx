'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedBackground = () => {
  // const containerRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    // Анімація пончиків
    // if (containerRef.current) {
    //   const donuts = containerRef.current.querySelectorAll('.donut');
    //   donuts.forEach((donut) => {
    //     gsap.to(donut, {
    //       y: gsap.utils.random(-20, -40),
    //       scale: gsap.utils.random(1, 1.15),
    //       opacity: gsap.utils.random(0.5, 1),
    //       duration: gsap.utils.random(3, 5),
    //       ease: 'sine.inOut',
    //       repeat: -1,
    //       yoyo: true,
    //     });
    //   });
    // }

    // Анімація градієнта
    if (gradientRef.current) {
      gsap.to(gradientRef.current, {
        backgroundPosition: '200% 200%',
        duration: 20,
        ease: 'linear',
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  // Типи
  // type RowConfig = {
  //   offset: string;
  //   count: number;
  //   startSize: number;
  //   startOpacity: number;
  // };

  // type DonutPosition = {
  //   size: number;
  //   opacity: number;
  //   top?: string;
  //   left?: string;
  //   bottom?: string;
  //   right?: string;
  //   [key: string]: string | number | undefined;
  // };

  // type PositionKey = 'top' | 'bottom';

  // Конфігурація рядів для верхнього лівого кута
  // const topLeftRows: RowConfig[] = [
  //   { offset: '10%', count: 5, startSize: 40, startOpacity: 0.6 },
  //   { offset: '15%', count: 4, startSize: 38, startOpacity: 0.58 },
  //   { offset: '20%', count: 4, startSize: 36, startOpacity: 0.56 },
  //   { offset: '25%', count: 3, startSize: 34, startOpacity: 0.54 },
  //   { offset: '30%', count: 2, startSize: 32, startOpacity: 0.52 },
  // ];

  // Конфігурація рядів для нижнього правого кута
  // const bottomRightRows: RowConfig[] = [
  //   { offset: '30%', count: 3, startSize: 32, startOpacity: 0.52 },
  //   { offset: '25%', count: 4, startSize: 34, startOpacity: 0.54 },
  //   { offset: '20%', count: 4, startSize: 36, startOpacity: 0.56 },
  //   { offset: '15%', count: 5, startSize: 38, startOpacity: 0.58 },
  //   { offset: '10%', count: 5, startSize: 40, startOpacity: 0.6 },
  // ];

  // Генерація позицій пончиків
  // const generatePositions = (
  //   rows: RowConfig[],
  //   positionKey: PositionKey
  // ): DonutPosition[] => {
  //   const positions: DonutPosition[] = [];
  //   const leftOffsets: string[] = ['6%', '11%', '15.5%', '19.5%', '23%'];

  //   rows.forEach((row) => {
  //     for (let i = 0; i < row.count; i++) {
  //       positions.push({
  //         [positionKey]: row.offset,
  //         [positionKey === 'top' ? 'left' : 'right']: leftOffsets[i],
  //         size: row.startSize - i * 5,
  //         opacity: row.startOpacity - i * 0.05,
  //       });
  //     }
  //   });

  //   return positions;
  // };

  // Рендер пончиків
  // const renderDonuts = (
  //   positions: DonutPosition[],
  //   color: string,
  //   prefix: string
  // ) => {
  //   return positions.map((pos, i) => {
  //     const positionStyle = Object.keys(pos).reduce(
  //       (acc: Record<string, string | number | undefined>, key) => {
  //         if (key !== 'size' && key !== 'opacity') {
  //           acc[key] = pos[key];
  //         }
  //         return acc;
  //       },
  //       {}
  //     );

  //     return (
  //       <div
  //         key={`${prefix}-${i}`}
  //         className="donut absolute"
  //         style={{
  //           ...positionStyle,
  //           width: `${pos.size}px`,
  //           height: `${pos.size}px`,
  //         }}
  //       >
  //         <svg
  //           viewBox="0 0 100 100"
  //           className="w-full h-full"
  //         >
  //           <circle
  //             cx="40"
  //             cy="40"
  //             r="35"
  //             fill="none"
  //             stroke={`rgba(${color}, ${pos.opacity})`}
  //             strokeWidth="15"
  //           />
  //         </svg>
  //       </div>
  //     );
  //   });
  // };

  // const topLeftPositions = generatePositions(topLeftRows, 'top');
  // const bottomRightPositions = generatePositions(bottomRightRows, 'bottom');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Градієнтний шар */}
      <div
        ref={gradientRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at top left, #7F00FF 0%, transparent 60%),
            radial-gradient(circle at bottom right, #24C0F4 0%, transparent 60%)
          `,
          backgroundSize: '200% 200%',
          backgroundPosition: '0% 0%',
        }}
      />

      {/* Контейнер для пончиків */}
      {/* <div
        ref={containerRef}
        className="absolute inset-0"
      >
        {renderDonuts(topLeftPositions, '59, 130, 246', 'tl')}
        {renderDonuts(bottomRightPositions, '168, 85, 247', 'br')}
      </div> */}
    </div>
  );
};

export default AnimatedBackground;

AnimatedBackground.displayName = 'AnimatedBackground';
