import React from 'react';

export interface InputProps {}

export const Input: React.FC<InputProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
