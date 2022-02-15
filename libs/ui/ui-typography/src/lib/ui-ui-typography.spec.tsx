import { render } from '@testing-library/react';

import UiUiTypography from './ui-ui-typography';

describe('UiUiTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiUiTypography />);
    expect(baseElement).toBeTruthy();
  });
});
