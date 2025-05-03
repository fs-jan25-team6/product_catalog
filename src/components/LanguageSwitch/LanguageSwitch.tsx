import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { Language } from '../../enums/Language';
import { setLanguage } from '../../features/i18nSlice';

export const LanguageSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const currentLang = useAppSelector(state => state.i18n.language);

  const handleLanguageChange = (lang: Language) => {
    dispatch(setLanguage(lang));
  };

  return (
    <div>
      <button
        onClick={() => handleLanguageChange(Language.EN)}
        disabled={currentLang === Language.EN}
      >
        English
      </button>
      <button
        onClick={() => handleLanguageChange(Language.UA)}
        disabled={currentLang === Language.UA}
      >
        Українська
      </button>
    </div>
  );
};
