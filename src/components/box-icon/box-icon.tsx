import React from 'react';
import { ContainerIcon } from './style';

interface PropsBoxIcon {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const BoxIcon: React.FC<PropsBoxIcon> = ({ src, text, alt, title }) => (
  <ContainerIcon>
    <img src={src} alt={alt} title={title} />
    <strong>{text}</strong>
  </ContainerIcon>
);

export default BoxIcon;
