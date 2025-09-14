'use client';

import React, { createContext, useState, useCallback, useMemo } from 'react';
import { translations, TranslationKeys } from '@/lib/i18n/translations';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKeys, options?: { returnObjects: boolean }) => any;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = useCallback(
    (key: TranslationKeys, options = { returnObjects: false }) => {
      const keys = key.split('.');
      let result: any = translations[language];

      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          // Fallback to English if translation is missing
          result = translations['en'];
          for (const k_en of keys) {
              if (result && typeof result === 'object' && k_en in result) {
                  result = result[k_en];
              } else {
                  return key;
              }
          }
          break;
        }
      }
      return result;
    },
    [language]
  );
  
  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
