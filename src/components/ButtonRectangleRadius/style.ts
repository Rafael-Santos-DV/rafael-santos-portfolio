import styled, { css } from 'styled-components';
import Colors from '../../style/colors';

interface PropsButton {
  type: 'normal' | 'file';
}

export const ContainerButton = styled.div<PropsButton>`
  width: 150px;
  padding: 12px 4px;
  text-align: center;
  border-radius: 16px;
  border: 1px solid ${Colors.colorBackground};
  cursor: pointer;

  ${(props) =>
    props.type === 'file'
      ? css`
          background-color: none;
          border: 1px solid ${Colors.colorMaster};
          :hover {
            border: 1px solid ${Colors.colorBackground};
            background-color: ${Colors.colorMaster};
          }
        `
      : css`
          background-color: ${Colors.colorMaster};
          transition: 200ms;

          :hover {
            border: 1px solid ${Colors.colorMaster};
            background-color: ${Colors.colorBackground};
          }
        `}

  > * {
    color: ${Colors.colorWhite};
  }
`;
