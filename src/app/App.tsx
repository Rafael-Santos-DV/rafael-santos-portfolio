import React from 'react';
import { GlobalStyles } from '../style/globalstyles';
import {
  BoxButtons,
  BoxSobre,
  ColumnLogo,
  ColumnNav,
  ColumnPerfilOne,
  ColumnPresentation,
  Container,
  ContentMain,
  Header,
  SectionGrid,
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
      <SectionGrid>
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

        <ColumnPerfilOne
          src={perfinOne}
          title="Foto Rafael Santos Full Stack Developer"
        />
        <BoxSobre>
          <h2>Quem sou</h2>
          <p>
            Meu nome é Rafael Santos, sou Full Stack Developer, com foco em
            trazer a melhor experiência para o usuário. Desenvolvo sites
            modernos e de alta qualidade, com animações, responsividade e SEO.
          </p>
        </BoxSobre>
      </SectionGrid>
      <ContentMain />
    </Container>
  );
};

export default App;
