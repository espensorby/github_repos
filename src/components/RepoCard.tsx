import { RepoProps } from '../types';
import './repoCard.scss';

const RepoShow = ({ repo }: {repo: RepoProps }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={2}>{repo.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr className='logo'>
          <td>
            <img src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`} />
          </td>
        </tr>
        <tr className='details'>
          <td className='owner'>{`By ${repo.owner.login}`}</td>
          <td>{`${repo.stargazers_count} stars`}</td>
          <td>{`${repo.forks_count} forks`}</td>
          <td>{`${repo.open_issues_count} open issues`}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default RepoShow;
