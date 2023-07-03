import styled from "styled-components"

export const Container = styled.div`
  padding-top: ${(props) => props.theme.space[14]};
  padding-bottom: ${(props) => props.theme.space[14]};
  padding-right: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};

  text-align: center;

  @media (min-width: 768px) {
    padding-top: 133px;
    padding-bottom: 196px;
    padding-right: 114px;
    padding-left: 114px;
  }

  @media (min-width: 1440px) {
    padding-right: 450px;
    padding-left: 450px;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.color.textSecondary};
  font-size: ${(props) => props.theme.size.N};
  line-height: 1.29;
  font-weight: ${(props) => props.theme.weight.bold};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.size.XXN};
  }
`;