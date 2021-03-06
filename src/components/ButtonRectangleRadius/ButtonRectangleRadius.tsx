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
      <a
        href="https://github.com/Rafael-Santos-DV/rafael-santos-portfolio/raw/master/src/resume/cv-rafael.pdf"
        download
      >
        {text}
      </a>
    ) : (
      <a href="http://github.com/rafael-santos-dv">{text}</a>
    )}
  </ContainerButton>
);

export default ButtonRectangleRadius;
