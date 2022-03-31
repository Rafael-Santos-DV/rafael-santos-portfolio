import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';

type Active = {
  active: boolean;
};

export const BoxButton = styled.div<Active>`
  display: flex;
  width: 60px;
  align-items: center;
  padding: 12px 0;
  height: auto;
  background-color: ${Colors.colorMaster};
  position: relative;
  border-radius: 20px;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin-left: 4px;
    border-radius: 50%;
    transition: all 200ms;

    ${(props) =>
      props.active
        ? css`
            left: calc(100% - 28px);
            margin-right: 4px;
            background-color: ${Colors.colorBackground};
          `
        : css`
            left: 0;
            margin-left: 4px;
            background-color: ${Colors.colorWhite};
          `}
  }
`;
