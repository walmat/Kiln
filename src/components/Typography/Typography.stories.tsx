import React from 'react';

export interface TypographyProps {}

export const Typography: React.FC<TypographyProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
