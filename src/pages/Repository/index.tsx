import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {

  const { repository } = useParams<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16}/>

          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars3.githubusercontent.com/u/55333929?s=460&u=ee19ecf53d37b8dfc4492d50293a46e6fa9df302&v=4" alt="Guilherme Victor"/>
          <div>
            <strong>guivictorr/proffy</strong>
            <p>Descrição muito louca</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1080</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link
          to="/"
        >
          <div>
            <strong>teste</strong>
            <p>teste</p>
          </div>
          <FiChevronRight size={20}/>
        </Link>
      </Issues>
    </>
  );
}

export default Repository;
