import React from 'react';

export interface NotificationProps {}

export const Notification: React.FC<NotificationProps> = ({ children }) => {
  return (
    <div>{ children }</div>
  );
}
