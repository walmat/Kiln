import React from 'react';

export interface TextFieldProps {}

export const TextField: React.FC<TextFieldProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
