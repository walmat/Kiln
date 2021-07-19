import React from 'react';

export interface PopoverProps {}

export const Popover: React.FC<PopoverProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
