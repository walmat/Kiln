import React from 'react';

export interface CheckboxProps {}

export const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
