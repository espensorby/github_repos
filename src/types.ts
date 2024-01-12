export interface RepoProps {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  open_issues_count: number;
  owner: { login: string, avatar_url: string };
  forks_count: number;
}

export interface PaginationProps {
  changePage: (pageNum: number) => void;
  repos: number;
  reposPerPage: number;
  currentPage: number;
}
