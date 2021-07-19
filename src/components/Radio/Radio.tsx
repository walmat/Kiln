import React from 'react';

export interface RadioProps {}

export const Radio: React.FC<RadioProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
