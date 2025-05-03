import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { Language } from '../../enums/Language';
import { setLanguage } from '../../features/i18nSlice';
import { useTranslation } from 'react-i18next';

const langs = [Language.EN, Language.UA];

type Props = {
  className?: string;
};

export const LanguageSwitcher: React.FC<Props> = ({ className = '' }) => {
  const dispatch = useDispatch();
  const currentLang = useAppSelector(state => state.i18n.language);
  const { t } = useTranslation();

  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div className={className}>
      {langs.map(lang => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          disabled={currentLang === lang}
        >
          {t(`languages.title.${lang}`)}
        </button>
      ))}
    </div>
  );
};
