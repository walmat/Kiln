import React from 'react';

export interface TooltipProps {}

export const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
