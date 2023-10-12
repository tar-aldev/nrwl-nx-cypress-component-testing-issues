import { render } from '@testing-library/react';
import { Component } from './Component';

describe('Jest test', () => {
  it('', () => {
    render(<Component />);

    expect(true).toEqual(false);
  });
});
