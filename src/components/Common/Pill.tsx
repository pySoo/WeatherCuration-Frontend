import React, { ReactNode } from 'react';

export interface PillProps extends React.ComponentProps<'div'> {
  selected?: boolean;
  bgColor?: string;
  children: ReactNode;
}

export default function Pill({
  className,
  selected = false,
  bgColor,
  children,
  ...props
}: PillProps) {
  return (
    <div
      {...props}
      className={`rounded-lg px-2.5 py-0.5 transition-colors cursor-pointer hover:bg-[#094F91]
        ${selected ? `bg-[#094F91]` : 'bg-[#094F91]/60'}
        ${className}
      `}
      style={{
        background: bgColor ?? '',
      }}
    >
      {children}
    </div>
  );
}
