import React from 'react';

export interface SliderProps {}

export const Slider: React.FC<SliderProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
