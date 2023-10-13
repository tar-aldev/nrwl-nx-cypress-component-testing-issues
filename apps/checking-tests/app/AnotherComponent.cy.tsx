import { AnotherComponent } from './AnotherComponent';
import { LibToInclude } from '@checking-tests/lib-to-include';

describe('AnotherComponent', () => {
  it('cypress component test', () => {
    cy.mount(<AnotherComponent />);
  });
});
