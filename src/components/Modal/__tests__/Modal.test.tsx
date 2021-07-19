import React from 'react';
import { Modal, ModalProps } from '..';
import { render, screen } from '@testing-library/react';

const defaultProps: ModalProps = {
  
};

const setup = (props = defaultProps) => render(<Modal {...props} />);

describe('Modal', () => {
  it('renders', () => {
    setup({children: 'foo'});
    expect(screen.getByText('foo'));
  });
});
