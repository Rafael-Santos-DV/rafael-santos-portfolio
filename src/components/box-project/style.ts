import styled from 'styled-components';
import Colors from '../../styles/colors';

type urlBack = {
  url: string;
};

export const ContainerProject = styled.div<urlBack>`
  background-image: url(${(props) => props.url});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 526px;
  height: 345px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;

  transition: transform 200ms cubic-bezier(1, 0, 0, 1);
  cursor: pointer;
  border: 1px solid transparent;
  position: relative;

  > h4 {
    font-size: 1.5rem;
    color: ${Colors.colorMaster};
    padding: 10px 0;
  }

  > div.button-visit {
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms cubic-bezier(1, 0, 0, 1);
    width: 100%;
    padding: 5px;
    display: flex;
    justify-content: center;

    > a {
      max-width: 150px;
      background-color: ${Colors.colorMaster};
      padding: 10px;
      color: ${Colors.colorWhite};
      border-radius: 10px;
    }
  }

  @media only screen and (max-width: 1200px) {
    height: 325px;
    > h4 {
      font-size: 1.1rem;
    }
  }
  @media only screen and (max-width: 968px) {
    height: 225px;
  }

  @media only screen and (max-width: 590px) {
    min-width: 100%;
  }

  :hover {
    transform: scale(1.1, 1.1);
    border: 1px solid ${Colors.colorMaster};
    z-index: 2;

    > div.button-visit {
      transform: translateY(100%);
      opacity: 1;
    }
  }
`;
export const BoxInfos = styled.div`
  width: 100%;
  max-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  > img {
    width: 100%;
    max-width: 40px;
    border: 1px solid ${Colors.colorMaster};
    border-radius: 4px;
  }
  @media only screen and (max-width: 1200px) {
    > img {
      max-width: 25px;
    }
  }
`;
