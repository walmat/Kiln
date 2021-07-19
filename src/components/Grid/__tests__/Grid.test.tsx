import React from 'react';
import { Grid, GridProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: GridProps = {
  
};

const setup = (props = defaultProps) => render(<Grid {...props} />);

describe('Grid', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
