import React from 'react';
import { ContainerButton } from './style';

interface PropsButton {
  text: string;
  type: 'normal' | 'file';
  theme: boolean;
}

const ButtonRectangleRadius: React.FC<PropsButton> = ({
  text,
  type,
  theme,
}) => (
  <ContainerButton type={type} theme={type === 'file' ? theme : false}>
    {type === 'file' ? (
      <a href="http://" download>
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </ContainerButton>
);

export default ButtonRectangleRadius;
