import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiUiFooterProps {}

const StyledUiUiFooter = styled.div`
  color: pink;
`;

export function UiUiFooter(props: UiUiFooterProps) {
  return (
    <StyledUiUiFooter>
      <h1>Welcome to UiUiFooter!</h1>
    </StyledUiUiFooter>
  );
}

export default UiUiFooter;
