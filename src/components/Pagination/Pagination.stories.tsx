import React from 'react';

export interface PaginationProps {}

export const Pagination: React.FC<PaginationProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
