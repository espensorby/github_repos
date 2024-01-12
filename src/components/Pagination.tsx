import { PaginationProps } from '../types';
import './pagination.scss';

const Pagination = ({
  changePage,
  repos,
  reposPerPage,
  currentPage
}: PaginationProps) => {
  const pageNums = [];

  for (let i = 1; i <= Math.ceil(repos/reposPerPage); i++){
    pageNums.push(i);
  }

  return (
    <div className='pagination'>
      {pageNums.length !==0 && pageNums.map((pageNum) =>{
        return (
          <button 
            key={pageNum}
            className={`page-btn ${pageNum === currentPage ? 'active' : ''}`}
            onClick={() =>{
            changePage(pageNum);
            }}
          >
            {pageNum}
          </button>
        )
      })}
    </div>
  )
}

export default Pagination;
