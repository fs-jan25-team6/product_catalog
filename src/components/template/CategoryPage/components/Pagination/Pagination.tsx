import React from 'react';
import styles from './Pagination.module.scss';
import { Icon } from '../../../../../assets/icons/Icon/Icon';
import { ArrowIcon } from '../../../../../assets/icons/arrow-icon';
import { IconButton } from '../../../../atoms/IconButton';
import { getPageRange } from '../../../../../helpers/getPaginationPages';
import { getSearchWith } from '../../../../../helpers/searchHelper';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchParam } from '../../../../../enums/SearchFields';

type Props = {
  currentPage: number;
  totalPages: number;
};

export const ProductListPagination: React.FC<Props> = ({
  currentPage,
  totalPages,
}) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  if (totalPages <= 1) {
    return null;
  }

  const handlePageClick = (newPage: number) => {
    const updatedSearch = getSearchWith(searchParams, {
      [SearchParam.Page]: newPage.toString() ?? null,
    });

    navigate({ search: updatedSearch });
  };

  const range = getPageRange(currentPage, totalPages, 4);

  return (
    <div className={styles.container}>
      <IconButton
        onClick={() => {
          handlePageClick(currentPage - 1);
        }}
        className={styles.container__arrow}
        disabled={currentPage === 1}
      >
        <Icon>
          <ArrowIcon />
        </Icon>
      </IconButton>

      <div className={styles.container__pages}>
        {range.map(page => (
          <IconButton
            key={page}
            isActive={page === currentPage}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </IconButton>
        ))}
      </div>

      <IconButton
        onClick={() => {
          handlePageClick(currentPage + 1);
        }}
        className={styles.container__arrow}
        disabled={currentPage === totalPages}
      >
        <Icon direction="right">
          <ArrowIcon />
        </Icon>
      </IconButton>
    </div>
  );
};
