import React, {useEffect, useState} from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'

import { Header, RepositoryInfo, Issues } from './styles';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string,
  description: string,
  stargazers_count: number,
  forks_count: number,
  open_issues_count: number,
  owner: {
    login: string,
    avatar_url: string,
  },
}

interface Issue {
  title: string,
  id: number,
  html_url: string,
  user: {
    login: string,
  }
}

const Repository: React.FC = () => {

  const { repository } = useParams<RepositoryParams>()
  const [repositoryData, setRepositoryData] = useState<Repository | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    api.get(`/repos/${repository}`).then(response => {
      setRepositoryData(response.data)
    })

    api.get(`/repos/${repository}/issues`).then(response => {
      setIssues(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>
        <Link to="/">
          <FiChevronLeft size={16}/>

          Voltar
        </Link>
      </Header>

      {repositoryData && (
        <RepositoryInfo>
        <header>
          <img src={repositoryData.owner.avatar_url} alt={repositoryData.owner.login}/>
          <div>
            <strong>{repository}</strong>
            <p>{repositoryData.description}</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>{repositoryData.stargazers_count}</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>{repositoryData.forks_count}</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>{repositoryData.open_issues_count}</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (
          <a
            href={issue.html_url}
            key={issue.id}
            target='_blank'
          >
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20}/>
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repository;
