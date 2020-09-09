import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="#">
          <img
            src="https://avatars3.githubusercontent.com/u/55333929?s=460&u=ee19ecf53d37b8dfc4492d50293a46e6fa9df302&v=4"
            alt="Guilherme Victor"
          />
          <div>
            <strong>guivictorr/github-explorer</strong>
            <p>Aplicativo legal</p>
          </div>

          <FiChevronRight size={20}/>
        </a>

        <a href="#">
          <img
            src="https://avatars3.githubusercontent.com/u/55333929?s=460&u=ee19ecf53d37b8dfc4492d50293a46e6fa9df302&v=4"
            alt="Guilherme Victor"
          />
          <div>
            <strong>guivictorr/github-explorer</strong>
            <p>Aplicativo legal</p>
          </div>

          <FiChevronRight size={20}/>
        </a>
      </Repositories>
    </>
  );
}

export default Dashboard;
