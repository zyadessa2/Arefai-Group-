"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import arTranslations from '@/locales/ar.json';
import enTranslations from '@/locales/en.json';

type Language = 'ar' | 'en';

interface Translations {
  [key: string]: any;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const translations: Record<Language, Translations> = {
  ar: arTranslations,
  en: enTranslations,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
      
      const body = document.body;
      if (savedLanguage === 'ar') {
        body.classList.remove('font-inter');
        body.classList.add('font-cairo');
      } else {
        body.classList.remove('font-cairo');
        body.classList.add('font-inter');
      }
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    const body = document.body;
    if (lang === 'ar') {
      body.classList.remove('font-inter');
      body.classList.add('font-cairo');
    } else {
      body.classList.remove('font-cairo');
      body.classList.add('font-inter');
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
    isRTL: language === 'ar',
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
