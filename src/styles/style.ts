import styled from 'styled-components';
import Colors from './colors';

type mobileActive = {
  mobileActive: boolean;
};

export const Container = styled.div`
  display: flex;
  max-height: 100vh;
  flex-direction: column;
  position: relative;
  overflow-y: hidden;

  > span {
    width: 100%;
    border-bottom: 2px solid ${Colors.colorMaster};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 14px 60px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 14px 20px;
  }
`;

export const ColumnLogo = styled.div`
  display: flex;
`;

export const ColumnNav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const Ul = styled.ul<mobileActive>`
  display: flex;
  align-items: center;
  color: ${Colors.colorWhite};

  > li {
    margin: 0 40px;
    transition: 200ms;
    cursor: pointer;
    border-bottom: 1px solid transparent;
    color: ${(props) =>
      props.theme === true ? Colors.colorBackground : Colors.colorWhite};

    &:hover {
      border-bottom: 1px solid ${Colors.colorMaster};
    }
  }

  @media only screen and (max-width: 768px) {
    display: ${(props) => (props.mobileActive ? 'flex' : 'none')};
    position: absolute;
    left: 0;
    top: 69px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${Colors.colorBackground};
    gap: 15px;
    animation: mobileanimate 200ms;
    z-index: 9999999;
    > li {
      color: ${Colors.colorWhite};
      font-size: 35px;
      z-index: 1;
    }

    &::before {
      content: 'Rafael Santos';
      font-size: 40px;
      color: ${Colors.colorMaster};
      padding: 50px 0 20px 0;
    }

    @keyframes mobileanimate {
      from {
        left: -100%;
      }
      to {
        left: 0;
      }
    }
  }
`;

export const MobileButton = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    > img {
      width: 45px;
    }
  }
`;

export const SectionGrid = styled.section`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 100px 50px 80px;
  align-items: center;
  row-gap: 60px;
  overflow-y: scroll;

  scrollbar-width: thin;
  scrollbar-color: ${Colors.colorMaster} ${Colors.colorBackground};

  ::-webkit-scrollbar {
    width: 12px;
    padding: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${Colors.colorMaster};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.colorBackground};
    border-radius: 30px;
    border: 1px solid ${Colors.colorWhite};
    display: block !important;
    max-height: 10px;
  }

  @media only screen and (max-width: 768px) {
    > :nth-child(3) {
      order: 3;
      display: none;
    }
    > :nth-child(4) {
      grid-column: 1 / span 2;
    }
    ::-webkit-scrollbar {
      width: 8px;
      padding: 5px;
    }
  }

  @media only screen and (max-width: 478px) {
    place-items: center;
    padding-left: 10px;
    padding-right: 10px;
    > * {
      grid-column: 1 / span 2;
    }
    > :nth-child(1) {
      order: 2;
    }
    > :nth-child(2) {
      order: 1;
    }
    > :nth-child(3) {
      order: 3;
    }
    > :nth-child(4) {
      order: 4;
    }
    > :nth-child(5) {
      order: 5;
    }
  }
`;

export const ColumnPresentation = styled.div`
  width: 100%;

  > h1 {
    font-size: 55px;
    letter-spacing: 2px;
    color: ${(props) =>
      props.theme === true ? Colors.colorBackground : Colors.colorWhite};

    > strong {
      color: ${Colors.colorMaster};
    }
  }

  > span {
    display: inline-block;
    color: #b3b3b3;
    margin: 15px 0;
    font-size: 22px;
  }

  @media only screen and (max-width: 478px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 11vw;
    }
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 10px;

  @media only screen and (max-width: 478px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 10px;
    flex-direction: column;
    width: 100%;

    > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      > * {
        width: 100%;
        display: block;
        word-wrap: break-word;
        padding: 8px 60px;
        font-size: 5vw;
      }
    }
  }
`;

export const ColumnPerfilOne = styled.img`
  width: 100%;
  max-width: 420px;

  @media only screen and (max-width: 478px) {
    max-width: 280px;
  }
`;

export const BoxSobre = styled.div`
  > h2 {
    color: ${Colors.colorMaster};
    font-size: 2rem;
    text-align: center;
    margin: 12px 0;
  }
  > p {
    color: ${(props) =>
      props.theme === true ? Colors.colorBackground : Colors.colorWhite};
    font-size: 1.5rem;
    text-align: center;
    padding: 0 5px;
    line-height: 1.2;
  }
`;

export const SectionServicesMain = styled.main`
  grid-column: 1 / span 2;
  width: 100%;
  text-align: center;

  > h2 {
    padding: 50px 0;
    font-size: 2.5rem;
    color: ${Colors.colorMaster};
    letter-spacing: 2px;
  }
`;
export const BoxServices = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  justify-content: center;
  grid-row-gap: 15px;
  grid-column-gap: 10px;

  > div:not(:nth-of-type(5)) {
    > strong {
      margin-top: 12px;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 478px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const SectionSkills = styled.section`
  order: 6;
  grid-column: 1 / span 2;
  display: flex;
  flex-direction: column;
  color: ${(props) =>
    props.theme === true ? Colors.colorBackground : Colors.colorWhite};
  text-align: center;
  row-gap: 40px;

  > h2 {
    font-size: 2.5rem;
    color: ${Colors.colorMaster};
    letter-spacing: 2px;
  }
`;

export const ContainerSkills = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  row-gap: 40px;

  > div:last-of-type {
    > img {
      max-width: 85px;
    }
  }

  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(5, 1fr);

    > div > img {
      width: 100%;
      min-width: 25px;
      max-width: 40px;
    }
  }
  @media only screen and (max-width: 468px) {
    > div {
      > img {
        width: 100%;
        min-width: 25px;
        max-width: 35px;
      }
      > strong {
        font-size: 3vw;
      }
    }
  }
`;

export const SectionProjects = styled.section`
  order: 7;
  grid-column: 1 / span 2;
  text-align: center;

  > h2 {
    font-size: 2.5rem;
    color: ${Colors.colorMaster};
    letter-spacing: 2px;
    padding: 50px 0;
  }
`;

export const ContainerProjects = styled.div`
  display: flex;
  column-gap: 20px;
`;
