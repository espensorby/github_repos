import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import RepoShow from './components/RepoCard';
import { RepoProps } from './types';
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
      {repos.length !== 0 ? repos.map((repo: RepoProps) => (
        <div className='container' key={repo.id}>
          <RepoShow repo={repo} />
        </div>
      )) : <p>Fetching repos...</p>}
    </>
  )
}

export default App;
