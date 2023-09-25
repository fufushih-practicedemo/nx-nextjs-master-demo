import { render } from '@testing-library/react';

import IronComponents from './iron-components';

describe('IronComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IronComponents />);
    expect(baseElement).toBeTruthy();
  });
});
