import { render } from '@testing-library/react';

import LibToInclude from './lib-to-include';

describe('LibToInclude', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibToInclude />);
    expect(baseElement).toBeTruthy();
  });
});
