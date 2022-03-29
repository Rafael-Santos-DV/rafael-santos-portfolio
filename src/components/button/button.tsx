import React, { useState } from 'react';
import { BoxButton } from './style';

export const ButtonDark: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleChange = (): void => {
    setActive((value) => !value);
  };
  return <BoxButton active={active} onClick={handleChange} />;
};
