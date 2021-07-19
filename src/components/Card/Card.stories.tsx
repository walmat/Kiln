import React from 'react';

export interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
