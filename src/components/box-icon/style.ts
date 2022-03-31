import styled from 'styled-components';

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  gap: 10px;

  > img {
    width: 100%;
    min-width: 25px;
    max-width: 60px;
  }
`;
