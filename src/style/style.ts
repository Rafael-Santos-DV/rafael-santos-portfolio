import styled from 'styled-components';
import Colors from './colors';

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
`;

export const ColumnLogo = styled.div`
  display: flex;
  justify-content: end;
`;

export const ColumnNav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  color: ${Colors.colorWhite};

  > li {
    margin: 0 40px;
    transition: 200ms;
    cursor: pointer;
    border-bottom: solid 1px ${Colors.colorBackground};

    &:hover {
      border-bottom: 1px solid ${Colors.colorMaster};
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
`;

export const ColumnPresentation = styled.div`
  width: 100%;

  > h1 {
    color: ${Colors.colorWhite};
    font-size: 55px;
    letter-spacing: 2px;

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
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const ColumnPerfilOne = styled.img`
  width: 100%;
  max-width: 420px;
`;

export const BoxSobre = styled.div`
  > h2 {
    color: ${Colors.colorMaster};
    font-size: 2rem;
    text-align: center;
    margin: 12px 0;
  }
  > p {
    color: ${Colors.colorWhite};
    font-size: 1.5rem;
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

  > div:not(:nth-of-type(5)) {
    > strong {
      margin-top: 12px;
    }
  }
`;
