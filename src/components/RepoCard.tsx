import { RepoProps } from '../types';

const RepoShow = ({ repo }: {repo: RepoProps }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>{repo.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{repo.owner.login}</td>
          <td>{repo.stargazers_count}</td>
          <td>{repo.forks_count}</td>
          <td>{repo.open_issues_count}</td>
        </tr>
  
      </tbody>
    </table>
  )
}

export default RepoShow;
