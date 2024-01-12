import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { RepoProps } from './types';
import RepoCard from './components/RepoCard';
import Pagination from './components/Pagination';
import './app.scss';

const App = () => {
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response: AxiosResponse = await axios.get('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100');
        setRepos(response.data.items);
      } catch (error) {
        throw new Error(`Failed to fetch repositories: ${error}`);
      }
    };
    fetchRepos(); 
  }, []);

  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(20);

  const changePage = (pageNum: number) => setCurrentPage(pageNum);

  const lastIndex = currentPage * reposPerPage;
  const firstIndex = lastIndex -  reposPerPage;
  const currentRepos = repos?.slice(firstIndex,lastIndex);

  return (
    <div className='app'>
      <h1>The most popular JS repositories on Github</h1>
      <Pagination
        changePage={changePage} 
        repos={repos?.length}
        reposPerPage={reposPerPage}
        currentPage={currentPage}
      />
      <div className='container'>
        {currentRepos.length !==0 ? currentRepos.map((repo: RepoProps) => (
          <a className='link-wrapper' href={repo.html_url} target="blank" key={repo.id}>
            <RepoCard repo={repo} />
          </a>
        )) : <p>Fetching repos...</p>}
      </div>
    </div>
  )
}

export default App;
