import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiUiTypographyProps {}

const StyledUiUiTypography = styled.div`
  color: pink;
`;

export function UiUiTypography(props: UiUiTypographyProps) {
  return (
    <StyledUiUiTypography>
      <h1>Welcome to UiUiTypography!</h1>
    </StyledUiUiTypography>
  );
}

export default UiUiTypography;
