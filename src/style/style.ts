import styled from 'styled-components';
import Colors from './colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;

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
  max-width: 1200px;
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

export const SectionRowOne = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  padding: 100px 50px 80px;
  align-items: center;
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

export const ContentMain = styled.main``;
