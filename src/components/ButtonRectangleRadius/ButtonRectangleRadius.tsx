import React from 'react';
import { ContainerButton } from './style';

interface PropsButton {
  text: string;
  type: 'normal' | 'file';
}

const ButtonRectangleRadius: React.FC<PropsButton> = ({ text, type }) => (
  <ContainerButton type={type}>
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
