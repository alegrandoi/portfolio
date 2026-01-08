
'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import es from '@/lib/i18n/es.json';
import en from '@/lib/i18n/en.json';
import { get } from 'lodash';

export type Language = 'es' | 'en';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = { es, en };

export const I18nContext = createContext<I18nContextType | undefined>(
  undefined
);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('es');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.navigator) {
      const browserLang = navigator.language.split('-')[0] as Language;
      if (browserLang === 'en' || browserLang === 'es') {
        setLang(browserLang);
      }
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      return get(translations[lang], key, key);
    },
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}
