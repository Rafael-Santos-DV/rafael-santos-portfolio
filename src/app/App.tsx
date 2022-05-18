import React, { useEffect, useState } from 'react';
import { GlobalStyles } from '../styles/globalstyles';
import {
  BoxButtons,
  BoxContato,
  BoxServices,
  BoxSobre,
  ColumnLogo,
  ColumnNav,
  ColumnPerfilOne,
  ColumnPresentation,
  Container,
  ContainerContato,
  ContainerProjects,
  ContainerSkills,
  Header,
  MobileButton,
  RowContato,
  SectionGrid,
  SectionProjects,
  SectionServicesMain,
  SectionSkills,
  Ul,
} from '../styles/style';
import logo from '../assets/logo.svg';
import { ButtonDark } from '../components/button/button';
import ButtonRectangleRadius from '../components/ButtonRectangleRadius/ButtonRectangleRadius';
import perfinOne from '../assets/rafael-perfil-one.svg';
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

import imageStudentProgrammer from '../assets/student-programmer.jpg';

// import skills svg
import html from '../assets/icons-skills/file_type_html_icon.svg';
import Css from '../assets/icons-skills/file_type_css_icon.svg';
import JavaScript from '../assets/icons-skills/file_type_js_official_icon.svg';
import Sass from '../assets/icons-skills/sass_icon.svg';
import reactImage from '../assets/icons-skills/react_original_logo_icon.svg';
import StyledComp from '../assets/icons-skills/file_type_styled_icon.svg';
import Express from '../assets/icons-skills/expressjs_logo_icon.svg';
import Nodejs from '../assets/icons-skills/nodejs_plain_logo_icon.svg';
import socket from '../assets/icons-skills/socket_io_logo_icon.svg';
import typescript from '../assets/icons-skills/file_type_typescript_official_icon.svg';
import python from '../assets/icons-skills/python.svg';
import mysql from '../assets/icons-skills/mysql_original_wordmark.svg';
import mongo from '../assets/icons-skills/mongodb_original_logo.svg';
import github from '../assets/icons-skills/github_git_icon.svg';
import git from '../assets/icons-skills/git_icon.svg';
import firebase from '../assets/icons-skills/file_type_firebase_icon.svg';
import figma from '../assets/icons-skills/figma_logo_icon.svg';
import aws from '../assets/icons-skills/amazon_aws_logo_icon.svg';

// import image projects
import projectMariahStore from '../assets/images-projects/project-mariah.png';
import projectSportnet from '../assets/images-projects/project-sportnet.png';
import projectPalpites from '../assets/images-projects/project-palpites.png';
import projectChat from '../assets/images-projects/project-chat.png';
import projectTicTacToe from '../assets/images-projects/project-ticTacToe.png';

import DarkModel from '../context/contextDark';
import useAnimate from '../hook/animateCallback';
import BoxIcon from '../components/box-icon/box-icon';
import BoxProject from '../components/box-project/box-project';
import ContainerDevelopment from '../components/project-development/project';

// icons contato
import email from '../assets/icons-contato/email.svg';
import linkedin from '../assets/icons-contato/linkedin.svg';
import telefone from '../assets/icons-contato/telefone.svg';

// perfil-vetor-test
// import perfilvetor from '../assets/perfil-vector.svg';

const App: React.FC = () => {
  const [getBackground, setBackground] = useState(false);
  const [activeMobile, setMobile] = useState(false);

  const init = useAnimate();
  useEffect(() => {
    const title = document.querySelector(
      '.animate-letter-title'
    ) as HTMLElement;
    const name = document.querySelector('.animate-letter-name') as HTMLElement;
    const TwoText = [Array.from(title.innerHTML), Array.from(name.innerHTML)];
    name.innerHTML = '';
    title.innerHTML = '';

    function AtivarName(): void {
      TwoText[1].forEach((values, index) => {
        setTimeout(() => {
          name.innerHTML += values;
        }, 100 * index);
      });
    }

    TwoText[0].forEach((values, index) => {
      setTimeout(() => {
        title.innerHTML += values;
        if (index === TwoText[0].length - 1) {
          AtivarName();
        }
      }, 100 * index);
    });
  }, []);

  useEffect(() => {
    if (localStorage.darkR === 'dark' || localStorage.darkR === undefined) {
      setBackground(false);
    } else {
      setBackground(true);
    }
    init();
  }, [init]);

  useEffect(() => {
    localStorage.darkR = getBackground ? 'light' : 'dark';
  }, [getBackground]);

  const handleClickDark = (): void => {
    setBackground((value) => !value);
  };

  const handleClickActiveMobile = (): void => {
    setMobile((value) => !value);
  };

  const handleClickAnimate = (classNameEvent: string): void => {
    const scrollMaster = document.querySelector(
      '#js-data-scroll-react'
    ) as HTMLElement;

    const elementScroll = document.querySelector(
      `.${classNameEvent}`
    ) as HTMLElement;

    scrollMaster.scrollTo({
      top: Number(elementScroll.offsetTop) - 130,
      behavior: 'smooth',
    });
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
            <img
              src={logo}
              alt="Rafael"
              title="foto Rafael Developer"
              onClick={() =>
                document
                  .getElementById('js-data-scroll-react')
                  ?.scrollTo({ top: 0, behavior: 'smooth' })
              }
              aria-hidden="true"
            />
          </ColumnLogo>
          <ColumnNav>
            <Ul
              theme={getBackground}
              mobileActive={activeMobile}
              onClick={() => setMobile(false)}
            >
              <li
                title="About"
                onClick={() => handleClickAnimate('about')}
                aria-hidden="true"
              >
                About
              </li>
              <li
                title="Projects"
                onClick={() => handleClickAnimate('projects')}
                aria-hidden="true"
              >
                Projects
              </li>
              <li
                title="Skills"
                onClick={() => handleClickAnimate('skills')}
                aria-hidden="true"
              >
                Skills
              </li>
              <li
                title="Contact"
                onClick={() => handleClickAnimate('contact')}
                aria-hidden="true"
              >
                Contact
              </li>
            </Ul>
            <ButtonDark funcClick={handleClickDark} />
          </ColumnNav>
        </Header>
        <span />
        <SectionGrid id="js-data-scroll-react">
          <ColumnPresentation theme={getBackground}>
            <h1>
              <span className="animate-letter-title">Olá, eu sou o</span> <br />
              <strong className="animate-letter-name">Rafael Santos</strong>
            </h1>
            <span>Full Stack Developer</span>
            <BoxButtons>
              <ButtonRectangleRadius
                theme={getBackground}
                text="Download CV"
                type="file"
              />
              <ButtonRectangleRadius
                theme={getBackground}
                text="GitHub"
                type="normal"
              />
            </BoxButtons>
          </ColumnPresentation>

          <ColumnPerfilOne
            src={perfinOne}
            title="Foto Rafael Santos Full Stack Developer"
          />

          <ColumnPerfilOne
            className="js-animate-all student"
            src={imageStudentProgrammer}
            title="Foto Student of programmer"
          />
          <BoxSobre theme={getBackground} className="js-animate-all about">
            <h2>Quem sou</h2>
            <p>
              Meu nome é Rafael Santos, sou Full Stack Developer, com foco em
              trazer a melhor experiência para o usuário. Desenvolvo sites
              modernos e de alta qualidade, com animações, responsividade e SEO.
            </p>
          </BoxSobre>
          <SectionServicesMain>
            <h2 className="js-animate-all services">Services</h2>
            <BoxServices>
              <Box>
                <img src={serviceLoja} alt="icon de um carrinho de compra" />
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
          <SectionSkills theme={getBackground}>
            <h2 className="js-animate-all skills">Skills</h2>
            <ContainerSkills className="js-animate-all">
              <BoxIcon
                alt="logo HMTL5"
                src={html}
                text="HTML5"
                title="logo html5"
              />
              <BoxIcon
                alt="logo CSS3"
                src={Css}
                text="CSS3"
                title="logo CSS3"
              />
              <BoxIcon
                alt="logo JavaScript"
                src={JavaScript}
                text="JavaScript"
                title="logo JavaScript"
              />
              <BoxIcon
                alt="logo Sass"
                src={Sass}
                text="Sass"
                title="logo Sass"
              />
              <BoxIcon
                alt="logo ReactJs"
                src={reactImage}
                text="ReactJS"
                title="logo ReactJS"
              />
              <BoxIcon
                alt="logo Styled Components"
                src={StyledComp}
                text="Styled Components"
                title="logo Styled Components"
              />
              <BoxIcon
                alt="logo Express"
                src={Express}
                text="Express"
                title="logo Express"
              />
              <BoxIcon
                alt="logo Node.Js"
                src={Nodejs}
                text="Node.Js"
                title="logo Node.Js"
              />
              <BoxIcon
                alt="logo Socket.io"
                src={socket}
                text="Socket.IO"
                title="logo Socket.io"
              />
              <BoxIcon
                alt="logo TypeScript"
                src={typescript}
                text="TypeScript"
                title="logo TypeScript"
              />
              <BoxIcon
                alt="logo Python"
                src={python}
                text="Python"
                title="logo Python"
              />
              <BoxIcon
                alt="logo Mysql"
                src={mysql}
                text="Mysql"
                title="logo Mysql"
              />
              <BoxIcon
                alt="logo JavaScript"
                src={mongo}
                text="MongoDB"
                title="logo JavaScript"
              />
              <BoxIcon
                alt="logo GitHub"
                src={github}
                text="GitHub"
                title="logo GitHub"
              />
              <BoxIcon alt="logo Git" src={git} text="Git" title="logo Git" />
              <BoxIcon
                alt="logo FireBase"
                src={firebase}
                text="FireBase"
                title="logo FireBase"
              />
              <BoxIcon
                alt="logo Figma"
                src={figma}
                text="Figma"
                title="logo Figma"
              />
              <BoxIcon alt="logo AWS" src={aws} text="AWS" title="logo AWS" />
            </ContainerSkills>
          </SectionSkills>
          <SectionProjects theme={getBackground}>
            <h2 className="projects">Projects</h2>
            <ContainerProjects className="js-animate-all">
              <BoxProject
                urlProject="https://mariahstore.online/"
                alt="imagem site marihStore"
                nameProject="E-commerce MariahStore"
                title="Imagem E-commerce MariahStore"
                url={projectMariahStore}
                urlTechUsed={[reactImage, StyledComp, Express, mongo, Nodejs]}
              />
              <BoxProject
                urlProject="https://sportnetnew.com/"
                alt="imagem site Sportnet"
                nameProject="Site de Notícias"
                title="Imagem site Sportnet"
                url={projectSportnet}
                urlTechUsed={[reactImage, StyledComp, Nodejs]}
              />
              <BoxProject
                urlProject="https://palpites-futebol.netlify.app/"
                alt="imagem site Palites de Futebol"
                nameProject="Palpites de Futebol"
                title="Imagem site Palites de Futebol"
                url={projectPalpites}
                urlTechUsed={[reactImage, StyledComp, Express, mongo, Nodejs]}
              />
              <BoxProject
                urlProject="https://chatmenetwork.netlify.com"
                alt="imagem rede Social ChatMe"
                nameProject="Rede Social ChatMe"
                title="Imagem Rede Social ChatMe"
                url={projectChat}
                urlTechUsed={[
                  reactImage,
                  StyledComp,
                  Express,
                  mongo,
                  Nodejs,
                  socket,
                ]}
              />
              <BoxProject
                urlProject="https://tictactoe-25969.web.app/"
                alt="Projeto ticTacToe"
                nameProject="Game Tic Tac Toe"
                title="Game Tic Tac Toe"
                url={projectTicTacToe}
                urlTechUsed={[
                  reactImage,
                  StyledComp,
                  firebase,
                  socket,
                  typescript,
                ]}
              />
              {/* container project production */}
              <ContainerDevelopment />
              <ContainerDevelopment />
              {/* container project production */}
            </ContainerProjects>
          </SectionProjects>
          <ContainerContato className="js-animate-all contact">
            <h4>Contact</h4>
            <RowContato theme={getBackground}>
              <BoxContato
                href="https://github.com/rafael-santos-dv"
                rel="noreferrer"
                target="_blank"
              >
                <img src={github} alt="icon de email" title="icon de email" />
                <span>GitHub</span>
                <strong>/rafael-santos-dv</strong>
              </BoxContato>
              <BoxContato
                href="mailto:santosrafaell187@gmail.com"
                rel="noreferrer"
                target="_blank"
              >
                <img src={email} alt="icon de email" title="icon de email" />
                <span>E-mail</span>
                <strong>santosrafaell187@gmail.com</strong>
              </BoxContato>
              <BoxContato
                href="https://linkedin.com/in/rafael-santdev"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="icon linkedin"
                  title="icon do lindedin"
                />
                <span>Linkedin</span>
                <strong>@rafael-santdev</strong>
              </BoxContato>
              <BoxContato
                href="https://api.whatsapp.com/send?phone=5593992326867"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  src={telefone}
                  alt="icon de telefone"
                  title="icon de telefone"
                />
                <span>Telefone</span>
                <strong>(93) 992326867</strong>
              </BoxContato>
            </RowContato>
          </ContainerContato>
        </SectionGrid>
      </Container>
    </DarkModel.Provider>
  );
};

export default App;
