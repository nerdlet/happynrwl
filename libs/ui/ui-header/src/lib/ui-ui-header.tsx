import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiUiHeaderProps {}

const StyledUiUiHeader = styled.div`
  color: pink;
`;

export function UiUiHeader(props: UiUiHeaderProps) {
  return (
    <StyledUiUiHeader>
      <h1>Welcome to UiUiHeader!</h1>
    </StyledUiUiHeader>
  );
}

export default UiUiHeader;
