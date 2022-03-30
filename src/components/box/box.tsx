import React from 'react';
import { BoxService } from './style';

export const Box: React.FC = ({ children }) => (
  <BoxService className="js-animate-react">{children}</BoxService>
);
