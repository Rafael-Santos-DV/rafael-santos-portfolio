import React from 'react';
import { BoxInfos, ContainerProject } from './style';

interface ParamsProject {
  url: string;
  title: string;
  alt: string;
  nameProject: string;
  urlTechUsed: string[];
  urlProject: string;
}

const BoxProject: React.FC<ParamsProject> = ({
  alt,
  nameProject,
  title,
  url,
  urlTechUsed,
  urlProject,
}) => {
  return (
    <ContainerProject url={url} title={title}>
      <h4>{nameProject}</h4>
      <BoxInfos>
        {urlTechUsed.map((values) => (
          <img src={values} alt={alt} title={title} />
        ))}
      </BoxInfos>
      <div className="button-visit">
        <a href={urlProject} target="_blank" rel="noreferrer">
          Visitar Projeto
        </a>
      </div>
    </ContainerProject>
  );
};

export default BoxProject;
