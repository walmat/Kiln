import React from 'react';
import { Checkbox, CheckboxProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: CheckboxProps = {
  
};

const setup = (props = defaultProps) => render(<Checkbox {...props} />);

describe('Checkbox', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
