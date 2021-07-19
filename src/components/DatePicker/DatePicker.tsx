import React from 'react';

export interface DatePickerProps {}

export const DatePicker: React.FC<DatePickerProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
