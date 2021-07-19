import React from 'react';
import { Form, FormProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: FormProps = {
  
};

const setup = (props = defaultProps) => render(<Form {...props} />);

describe('Form', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
