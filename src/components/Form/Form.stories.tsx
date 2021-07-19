import React from 'react';

export interface FormProps {}

export const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
