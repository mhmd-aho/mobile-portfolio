import React from 'react';
import styled from 'styled-components';

const Pattern = ({theme}) => {
  return (
    <StyledWrapper $mode={theme}>
      <div className="container" />
    </StyledWrapper>
  );
}

const StyledWrapper =styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: radial-gradient(
    ${({ $mode }) => ($mode === "dark" ? "#e5e5f7" : "#000")} 1.5px,
    ${({ $mode }) => ($mode === "dark" ? "#000" : "#e5e5f7")} 1.5px
  );

  background-size: 30px 30px;
`;
export default Pattern;
