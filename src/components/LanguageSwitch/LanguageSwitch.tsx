import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { Language } from '../../enums/Language';
import { setLanguage } from '../../features/i18nSlice';
import { t } from 'i18next';

const langs = [Language.EN, Language.UA];

export const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const currentLang = useAppSelector(state => state.i18n.language);

  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      {langs.map(lang => (
        <button
          onClick={() => handleLanguageChange(lang)}
          disabled={currentLang === lang}
        >
          {t(`languages.title.${lang}`)}
        </button>
      ))}
    </div>
  );
};
