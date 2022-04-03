import React, { useEffect, useState } from 'react';
import { BoxButton } from './style';

type FuncClick = {
  funcClick: () => void;
};

export const ButtonDark: React.FC<FuncClick> = ({ funcClick }) => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.darkR === 'light') setActive(true);
    else setActive(false);
  }, []);

  const handleChange = (): void => {
    setActive((value) => !value);
    funcClick();
  };
  return <BoxButton active={active} onClick={handleChange} />;
};
