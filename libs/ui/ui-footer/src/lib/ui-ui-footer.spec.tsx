import { render } from '@testing-library/react';

import UiUiFooter from './ui-ui-footer';

describe('UiUiFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiUiFooter />);
    expect(baseElement).toBeTruthy();
  });
});
