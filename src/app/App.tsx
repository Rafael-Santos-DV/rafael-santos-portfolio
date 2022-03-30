import React, { useEffect, useState } from 'react';
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
  MobileButton,
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
import enableMobile from '../assets/icons-mobile/buttonOne.svg';
import disableMobile from '../assets/icons-mobile/buttonTwo.svg';

import DarkModel from '../context/contextDark';

const App: React.FC = () => {
  const [getBackground, setBackground] = useState(false);
  const [activeMobile, setMobile] = useState(false);

  useEffect(() => {
    if (localStorage.darkR === 'dark' || localStorage.darkR === undefined) {
      setBackground(false);
    } else {
      setBackground(true);
    }
  }, []);

  useEffect(() => {
    localStorage.darkR = getBackground ? 'light' : 'dark';
  }, [getBackground]);

  const handleClickDark = (): void => {
    setBackground((value) => !value);
  };

  const handleClickActiveMobile = (): void => {
    setMobile((value) => !value);
  };

  return (
    <DarkModel.Provider value={getBackground}>
      <Container>
        <GlobalStyles theme={getBackground} />
        <Header>
          <MobileButton onClick={handleClickActiveMobile}>
            {activeMobile ? (
              <img src={disableMobile} alt="icon button mobile" />
            ) : (
              <img src={enableMobile} alt="icon button mobile" />
            )}
          </MobileButton>
          <ColumnLogo>
            <img src={logo} alt="Rafael" title="foto Rafael Developer" />
          </ColumnLogo>
          <ColumnNav>
            <Ul theme={getBackground}>
              <li title="About">About</li>
              <li title="Projects">Projects</li>
              <li title="Skills">Skills</li>
              <li title="Contact">Contact</li>
            </Ul>
            <ButtonDark funcClick={handleClickDark} />
          </ColumnNav>
        </Header>
        <span />
        <SectionGrid>
          <ColumnPresentation theme={getBackground}>
            <h1>
              Olá, eu sou o <br /> <strong>Rafael Santos</strong>.
            </h1>
            <span>Full Stack Developer</span>
            <BoxButtons>
              <ButtonRectangleRadius
                theme={getBackground}
                text="Download CV"
                type="normal"
              />
              <ButtonRectangleRadius
                theme={getBackground}
                text="GitHub"
                type="file"
              />
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
          <BoxSobre theme={getBackground}>
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
    </DarkModel.Provider>
  );
};

export default App;
