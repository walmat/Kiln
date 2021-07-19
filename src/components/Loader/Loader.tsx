import React from 'react';

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
