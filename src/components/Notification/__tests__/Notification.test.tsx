import React from 'react';
import { Notification, NotificationProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: NotificationProps = {
  
};

const setup = (props = defaultProps) => render(<Notification {...props} />);

describe('Notification', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
