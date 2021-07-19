import React from 'react';
import { Typography, TypographyProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TypographyProps = {
  
};

const setup = (props = defaultProps) => render(<Typography {...props} />);

describe('Typography', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
