import React from 'react';
import { Box, BoxProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: BoxProps = {
  
};

const setup = (props = defaultProps) => render(<Box {...props} />);

describe('Box', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
