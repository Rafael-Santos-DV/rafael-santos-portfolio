import React from 'react';
import { GlobalStyles } from '../style/globalstyles';
import {
  BoxButtons,
  ColumnLogo,
  ColumnNav,
  ColumnPerfilOne,
  ColumnPresentation,
  Container,
  ContentMain,
  Header,
  SectionRowOne,
  Ul,
} from '../style/style';

import logo from '../assets/logo.svg';
import { ButtonDark } from '../components/button/button';
import ButtonRectangleRadius from '../components/ButtonRectangleRadius/ButtonRectangleRadius';
import perfinOne from '../assets/rafael-one.svg';

const App: React.FC = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <ColumnLogo>
          <img src={logo} alt="Rafael" title="Rafael" />
        </ColumnLogo>
        <ColumnNav>
          <Ul>
            <li title="About">About</li>
            <li title="Projects">Projects</li>
            <li title="Skills">Skills</li>
            <li title="Contact">Contact</li>
            <ButtonDark />
          </Ul>
        </ColumnNav>
      </Header>
      <span />
      <SectionRowOne>
        <ColumnPresentation>
          <h1>
            Olá, eu sou o <br /> <strong>Rafael Santos</strong>.
          </h1>
          <span>Full Stack Developer</span>
          <BoxButtons>
            <ButtonRectangleRadius text="Download CV" type="normal" />
            <ButtonRectangleRadius text="GitHub" type="file" />
          </BoxButtons>
        </ColumnPresentation>

        <ColumnPerfilOne
          src={perfinOne}
          title="Foto Rafael Santos Full Stack Developer"
        />
      </SectionRowOne>
      <ContentMain />
    </Container>
  );
};

export default App;
