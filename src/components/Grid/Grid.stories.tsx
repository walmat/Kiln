import React from 'react';

export interface GridProps {}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
