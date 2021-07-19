import React from 'react';
import './form.scss';

export interface FormProps {}

export const Form: React.FC<FormProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
