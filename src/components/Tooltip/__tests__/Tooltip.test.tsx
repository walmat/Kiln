import React from 'react';
import { Tooltip, TooltipProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: TooltipProps = {
  
};

const setup = (props = defaultProps) => render(<Tooltip {...props} />);

describe('Tooltip', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
