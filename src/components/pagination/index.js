import React from 'react';
import { PaginationList, PaginationLink } from './style';

const Pagination = ({
  currentPage,
  numPages,
  isFirst,
  isLast,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= currentPage + 3 && i <= numPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationList>
      {isFirst ? null : (
        <li>
          <PaginationLink to={`/blog${prevPage}`}>
            « Previous Page
          </PaginationLink>
        </li>
      )}

      {pageNumbers.map((number) => (
        <li key={number}>
          <PaginationLink
            $isActive={currentPage === number ? true : false}
            to={`/blog/${number === 1 ? '' : number}`}
          >
            {number}
          </PaginationLink>
        </li>
      ))}

      {isLast ? null : (
        <li>
          <PaginationLink to={`/blog${nextPage}`}>Next Page »</PaginationLink>
        </li>
      )}
    </PaginationList>
  );
};

export default Pagination;
