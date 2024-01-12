import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { RepoProps } from './types';
import RepoCard from './components/RepoCard';
import './app.scss';

const App = () => {
  const [repos, setRepos] = useState<RepoProps[]>([]);

  const fetchRepos = useCallback(async () => {
    try {
      const response: AxiosResponse = await axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100');
      setRepos(response.data.items);
    } catch (error) {
      throw new Error(`Failed to fetch repositories: ${error}`);
    }
  }, []);

  useEffect(() => { 
    fetchRepos(); 
  }, [fetchRepos]);

  return (
    <>
      <h1>The most popular JS libraries on Github</h1>
      <div className='container'>
        {repos.length !== 0 ? repos.map((repo: RepoProps) => (
          <a className='link-wrapper' href={repo.html_url} target="blank" key={repo.id}>
            <RepoCard repo={repo} />
          </a>
        )) : <p>Fetching repos...</p>}
      </div>
    </>
  )
}

export default App;
