import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface RepoProps {
  id: number;
  name: string;
}

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
        <div key={repo.id}>
          {repo.name}
        </div>
      )) : <p>Fetching repos...</p>}
    </>
  )
}

export default App;
