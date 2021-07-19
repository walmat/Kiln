import React from 'react';

export interface TableProps {}

export const Table: React.FC<TableProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
