import styled from "styled-components";
import Form from "react-bootstrap/Form";

interface StyleProps {
  position?: number;
}

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[4]};
  padding-top: 22px;
  padding-bottom: 22px;

  margin-top: ${(props) => props.theme.space[4]};
  margin-bottom: ${(props) => props.theme.space[4]};

  background-color: ${(props) => props.theme.color.backgroundSecondary};
`;
export const Display = styled.input`
  height: 100%;
  width: 100%;

  background-color: transparent;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.size.XXN};
  font-weight: ${(props) => props.theme.weight.bold};
  line-height: 1.29;
  border: none;
`;

export const CopyButton = styled.button`
  background-color: transparent;
  border: none;
`;

export const OptionContainer = styled.div`
  padding-left: ${(props) => props.theme.space[4]};
  padding-right: ${(props) => props.theme.space[4]};
  padding-top: 22px;
  padding-bottom: 22px;

  background-color: ${(props) => props.theme.color.backgroundSecondary};
`;

export const RangeIndicatorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RangeIndicator = styled.div`
  font-size: ${(props) => props.theme.size.XXN};
  color: ${(props) => props.theme.color.success};
  font-weight: ${(props) => props.theme.weight.bold};
`;

export const RangeTitle = styled(Form.Label)`
  margin: 0;
  margin-bottom: 18px;

  font-size: ${(props) => props.theme.size.N};
  line-height: 1.29;
  font-weight: ${(props) => props.theme.weight.bold};
`;

export const Range = styled(Form.Range)<StyleProps>`
  height: ${(props) => props.theme.space[2]};

  &::-webkit-slider-thumb {
    transform: translateY(-25%);

    width: ${(props) => props.theme.space[7]};
    height: ${(props) => props.theme.space[7]};

    background-color: ${(props) => props.theme.color.text};
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.color.success} 0%,
      ${(props) => props.theme.color.success} ${(props) => props.position}%,
      ${(props) => props.theme.color.background} ${(props) => props.position}%,
      ${(props) => props.theme.color.background} 100%
    );
  }
`;
