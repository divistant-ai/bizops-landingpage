'use client';

import React from 'react';

type InfiniteScrollLoopProps = {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
  pauseOnHover?: boolean;
};

const InfiniteScrollLoop: React.FC<InfiniteScrollLoopProps> = ({
  children,
  speed = 30,
  direction = 'left',
  className = '',
  pauseOnHover = true,
}) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex gap-4 ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
        style={{
          animation: `scroll ${speed}s linear infinite`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

InfiniteScrollLoop.displayName = 'InfiniteScrollLoop';

export default InfiniteScrollLoop;
