import React, {useState, FormEvent} from 'react';
import { FiChevronRight } from 'react-icons/fi'

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string,
  },
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('')

  async function handleAddRepository(event: FormEvent){
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return
    }

    try{
      const response = await api.get(`repos/${newRepo}`)
      const repository = response.data

      setRepositories([...repositories, repository])
      setNewRepo('');
      setInputError('')
    }
    catch (error) {
      setInputError('Erro na busca por esse repositório')
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github explorer"/>
      <Title>Explore repositórios no Github</Title>

      <Form
        hasError={Boolean(inputError)}
        onSubmit={handleAddRepository}>
          
        <input
          value={newRepo}
          onChange={event => setNewRepo(event.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name}href="#">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20}/>
          </a>
        ))}
      </Repositories>
    </>
  );
}

export default Dashboard;
