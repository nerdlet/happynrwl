import { render } from '@testing-library/react';

import UiUiHeader from './ui-ui-header';

describe('UiUiHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiUiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
