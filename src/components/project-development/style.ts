import styled from 'styled-components';
import Colors from '../../styles/colors';

export const BoxDevelopment = styled.div`
  border: 2px dotted ${Colors.colorMaster};
  width: 100%;
  max-width: 526px;
  height: 345px;
  color: ${Colors.colorMaster};
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    height: 325px;
  }
  @media only screen and (max-width: 968px) {
    height: 225px;
  }

  @media only screen and (max-width: 590px) {
    min-width: 100%;
  }
`;
