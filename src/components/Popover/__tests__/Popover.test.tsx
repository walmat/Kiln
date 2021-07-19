import React from 'react';
import { Popover, PopoverProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: PopoverProps = {
  
};

const setup = (props = defaultProps) => render(<Popover {...props} />);

describe('Popover', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
