import styled from "styled-components";

export const SharedLayoutStyled = styled.main`
  min-width: ${(props) => props.theme.width.mobile};

  background-color: ${(props) => props.theme.color.background};

  @media (min-width: 768px) {
    min-width: ${(props) => props.theme.width.tablet};
  }

  @media (min-width: 1440px) {
    min-width: ${(props) => props.theme.width.desktop};
  }
`;
