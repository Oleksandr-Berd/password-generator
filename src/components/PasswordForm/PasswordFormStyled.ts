import styled from "styled-components";
import Form from "react-bootstrap/Form";

interface StyleProps {
  position?: number;
  active?: string | undefined;
  status_color?: string;
};

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

export const CheckBox = styled(Form.Check)`
display: flex;
flex-direction: column;
justify-content: flex-start;

padding-top: ${props => props.theme.space[8]};
`
export const ChecksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child){
    margin-bottom: ${props=> props.theme.space[4]};
  }
`;

export const CheckInput = styled(Form.Check.Input)`
  margin: 0;
  margin-right: ${(props) => props.theme.space[5]};

  width: ${(props) => props.theme.space[5]};
  height: ${(props) => props.theme.space[5]};

  &&&,
  &&&:active,
  &&&:hover,
  &&&:focus {
    background-color: ${(props) => props.theme.color.background};
    border: 1px solid ${(props) => props.theme.color.text};
    box-shadow: none;
  }

  &&&:checked {
    background-color: ${(props) => props.theme.color.success};
    background-image: url(${props => props.arrow});
    background-size: 11px 8px;
  }
`;

export const CheckText = styled(Form.Check.Label)`
  &&& {
    color: ${(props) => props.theme.color.text};
    font-weight: ${props => props.theme.weight.bold};
    font-size: ${props => props.theme.size.N};
  }
`;

export const StrengthContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${(props) => props.theme.space[8]};

  padding-top: 14px;
  padding-bottom: 14px;
  padding-right: ${(props) => props.theme.space[4]};
  padding-left: ${(props) => props.theme.space[4]};

  background-color: ${props => props.theme.color.background};
`;

export const StrengthTitle = styled.h3`
  text-transform: uppercase;
  color: ${(props) => props.theme.color.textSecondary};
  font-weight: ${(props) => props.theme.weight.bold};
  font-size: ${(props) => props.theme.size.N};
`;

export const StrengthIndicatorContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const StrengthIndicatorText = styled.h4`
  margin-right: ${(props) => props.theme.space[4]};

  text-transform: uppercase;
  line-height: 1.29;

  font-size: ${(props) => props.theme.size.XXN};
  font-weight: ${(props) => props.theme.weight.bold};
`;

export const StrengthIndicatorItem = styled.div<StyleProps>`
  width: 10px;
  height: 28px;

  border: 1px solid ${(props) => props.theme.color.text};
  line-height: 1.29;

  background-color: ${(props) =>
    props.active && props.status_color === "too weak!"
      ? props.theme.color.poor
      : props.active && props.status_color === "weak"
      ? props.theme.color.weak
      : props.active && props.status_color === "medium"
      ? props.theme.color.medium
      : props.active && props.status_color === "strong"
      ? props.theme.color.success
      : "transparent"};

  &:not(:last-child) {
    margin-right: ${(props) => props.theme.space[2]};
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;

margin-top: ${props => props.theme.space[4]};

  padding-top: 18px;
  padding-bottom: 18px;

  background-color: ${(props) => props.theme.color.success};

  & > span {
    margin-right: ${(props) => props.theme.space[4]};

    text-transform: uppercase;
    line-height: 1.29;

    font-size: ${(props) => props.theme.size.N};
    font-weight: ${(props) => props.theme.weight.bold};
  }
`;