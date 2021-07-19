import React from 'react';
import { DatePicker, DatePickerProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: DatePickerProps = {
  
};

const setup = (props = defaultProps) => render(<DatePicker {...props} />);

describe('DatePicker', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
