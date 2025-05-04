import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Option, Dropdown } from '../../../../Dropdown';
import { getSearchWith } from '../../../../../helpers/searchHelper';
import styles from './Controls.module.scss';
import { enumToDropdownOptions } from '../../../../../helpers/enumToOptions';
import { SortBy } from '../../../../../enums/SortBy';
import { ItemPerPage } from '../../../../../enums/ItemsPerPage';
import { SearchParam } from '../../../../../enums/SearchFields';
import { DefaultValues } from '../../../../../enums/DefaultValues';
import { useTranslation } from 'react-i18next';

export const Controls: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const optionsSort: Option[] = enumToDropdownOptions(
    SortBy,
    t,
    'catalog.dropdown.sortBy.options',
  );
  const optionsProdPerPage: Option[] = enumToDropdownOptions(
    ItemPerPage,
    t,
    'catalog.dropdown.sortBy.options',
  );

  const currentSortBy = searchParams.get(SearchParam.Sort);
  const currentPerPage = searchParams.get(SearchParam.PerPage);

  const selectedSortBy = optionsSort.find(
    option => option.value === (currentSortBy || DefaultValues.Sort),
  )!;
  const selectedPerPage = optionsProdPerPage.find(
    option => option.value === (currentPerPage || DefaultValues.PerPage),
  )!;

  const handleSortByChange = (selectedOption: Option | null) => {
    const updatedSearch = getSearchWith(searchParams, {
      [SearchParam.Sort]: selectedOption?.value ?? null,
      [SearchParam.Page]: null,
    });

    navigate({ search: updatedSearch });
  };

  const handlePerPageChange = (selectedOption: Option | null) => {
    const updatedSearch = getSearchWith(searchParams, {
      [SearchParam.PerPage]: selectedOption?.value ?? null,
      [SearchParam.Page]: null,
    });

    navigate({ search: updatedSearch });
  };

  return (
    <div className={styles.controls}>
      <div className={styles.controls__sort}>
        <Dropdown
          label={t('catalog.dropdown.sortBy.label')}
          options={optionsSort}
          value={selectedSortBy}
          onChange={handleSortByChange}
        />
      </div>
      <div className={styles.controls__quantity}>
        <Dropdown
          label={t('catalog.dropdown.perPage.label')}
          options={optionsProdPerPage}
          value={selectedPerPage}
          onChange={handlePerPageChange}
        />
      </div>
    </div>
  );
};
