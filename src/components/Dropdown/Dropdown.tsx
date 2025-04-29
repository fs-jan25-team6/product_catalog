import React from 'react';
import styles from './DropdownLayout.module.scss';
import Select from 'react-select';
import { Typography } from '../atoms/Typography';
import './Dropdown.scss';
import { ArrowIcon } from '../../assets/icons/arrow-icon';
import { Icon } from '../../assets/icons/Icon/Icon';
import classNames from 'classnames';

export type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  options: Option[];
  value: Option | null;
  onChange: (selectedOption: Option | null) => void;
};

export const Dropdown: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
}) => {
  return (
    <div className={styles.dropdown}>
      <Typography
        variant="label"
        tag="label"
        color="secondary"
        className={styles.dropdown__label}
      >
        {label}
      </Typography>
      <div className={styles.dropdown__field}>
        <Select
          classNamePrefix="Dropdown"
          className="Dropdown-component"
          options={options}
          value={value}
          onChange={onChange}
          isSearchable={false}
          components={{
            DropdownIndicator: props => {
              const {
                selectProps: { menuIsOpen },
              } = props;

              return (
                <div className={styles.dropdownIndicator}>
                  <Icon
                    className={classNames('icon', {
                      'icon--arrow-up': menuIsOpen,
                      'icon--arrow-down': !menuIsOpen,
                    })}
                  >
                    <ArrowIcon />
                  </Icon>
                </div>
              );
            },
          }}
        />
      </div>
    </div>
  );
};
