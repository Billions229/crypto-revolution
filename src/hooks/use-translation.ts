'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/contexts/language-context';
import { TranslationKeys } from '@/lib/i18n/translations';

export const useTranslation = (namespace?: string) => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  const { t: originalT, language, setLanguage } = context;

  const t = (key: string, options?: { returnObjects: boolean }) => {
    const fullKey = namespace ? `${namespace}.${key}` : key;
    return originalT(fullKey as TranslationKeys, options);
  };
  
  return { t, language, setLanguage };
};
