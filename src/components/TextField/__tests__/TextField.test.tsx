import React from 'react';
import { TextField, TextFieldProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TextFieldProps = {
  
};

const setup = (props = defaultProps) => render(<TextField {...props} />);

describe('TextField', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
