import React from 'react';
import { GlobalStyles } from '../style/globalstyles';
import {
  BoxButtons,
  BoxServices,
  BoxSobre,
  ColumnLogo,
  ColumnNav,
  ColumnPerfilOne,
  ColumnPresentation,
  Container,
  Header,
  SectionGrid,
  SectionServicesMain,
  Ul,
} from '../style/style';

import logo from '../assets/logo.svg';
import { ButtonDark } from '../components/button/button';
import ButtonRectangleRadius from '../components/ButtonRectangleRadius/ButtonRectangleRadius';
import perfinOne from '../assets/rafael-one.svg';
import { Box } from '../components/box/box';

// import services svg
import serviceLoja from '../assets/icons-services/carrinho.svg';
import sericeApiInterface from '../assets/icons-services/api_interface.svg';
import coding from '../assets/icons-services/coding.svg';
import responsive from '../assets/icons-services/responsive.svg';
import lading from '../assets/icons-services/icon-lading.svg';
import plus from '../assets/icons-services/plus.svg';
import blog from '../assets/icons-services/web-blog.svg';
import setting from '../assets/icons-services/setting.svg';

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
        <SectionServicesMain>
          <h2>Services</h2>
          <BoxServices>
            <Box>
              <img src={serviceLoja} alt="icon de um carrinho de comprar" />
              <strong>
                E-commerce <br /> (Loja Virtual)
              </strong>
            </Box>
            <Box>
              <img src={coding} alt="icon de um web-site" />
              <strong>Soluções em SEO</strong>
            </Box>
            <Box>
              <img
                src={responsive}
                alt="Icon ilustrando um Computador e um celular"
              />
              <strong>Sites 100% Responsivos</strong>
            </Box>
            <Box>
              <img src={lading} alt="icon ilustrando um web-site" />
              <strong>Landing Pages</strong>
            </Box>
            <Box>
              <img
                src={sericeApiInterface}
                alt="icon ilustrando um tela com a palavra API"
              />
              <strong>API Rest e Resful</strong>
            </Box>
            <Box>
              <img src={setting} alt="icon ilustrando configuração" />
              <strong>Manuntenção de sites</strong>
            </Box>
            <Box>
              <img src={blog} alt="icon ilustrando web-site-blog" />
              <strong>Blog</strong>
            </Box>
            <Box>
              <img src={plus} alt="icon ilustrando a símbulo de 'mais'" />
              <strong>E muito mais</strong>
            </Box>
          </BoxServices>
        </SectionServicesMain>
      </SectionGrid>
    </Container>
  );
};

export default App;
