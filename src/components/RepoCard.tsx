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
        <tr>
          <td className='logo'>
            <img src={repo.owner.avatar_url} alt={`Avatar for ${repo.owner.login}`} />
          </td>
          <td className='details'>
            <span className='owner'>{`By ${repo.owner.login}`}</span>
            <span>{`${repo.stargazers_count} stars`}</span>
            <span>{`${repo.forks_count} forks`}</span>
            <span>{`${repo.open_issues_count} open issues`}</span>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default RepoShow;
