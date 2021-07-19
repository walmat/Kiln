import React from 'react';
import { Select, SelectProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: SelectProps = {
  
};

const setup = (props = defaultProps) => render(<Select {...props} />);

describe('Select', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
