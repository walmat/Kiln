import React from 'react';

export interface ContainerProps {}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
