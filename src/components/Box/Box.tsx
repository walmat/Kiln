import React from 'react';

export interface BoxProps {}

export const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
