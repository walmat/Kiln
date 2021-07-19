import React from 'react';

export interface SelectProps {}

export const Select: React.FC<SelectProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
