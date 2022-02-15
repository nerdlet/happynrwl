import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiProps {}

const StyledSharedUi = styled.div`
  color: pink;
`;

export function SharedUi(props: SharedUiProps) {
  return (
    <StyledSharedUi>
      <h1>Welcome to SharedUi! This is an individual library containing all the information about shared ui</h1>
    </StyledSharedUi>
  );
}

export default SharedUi;
