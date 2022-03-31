import styled from 'styled-components';
import Colors from '../../styles/colors';

export const BoxService = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  max-width: 220px;
  background-color: ${Colors.colorMaster};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 30px 0;
  border: 1px solid transparent;
  transition: background 200ms;

  > img {
    width: 100%;
    max-width: 65px;
  }

  > strong {
    color: ${Colors.colorWhite};
  }

  :hover {
    opacity: 0.9;
    border: 1px solid ${Colors.colorWhite};

    > img {
      transform: scale(1.1, 1.1);
    }
  }

  @media only screen and (max-width: 400px) {
    height: 130px;

    > strong {
      font-size: 3.4vw;
    }

    > img {
      max-width: 50px;
    }
  }
`;
