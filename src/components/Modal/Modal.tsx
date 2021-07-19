import React from 'react';

export interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
