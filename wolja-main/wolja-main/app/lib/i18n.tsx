"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import enTranslations from "../translations/en.json";
import ruTranslations from "../translations/ru.json";
import plTranslations from "../translations/pl.json";

type Language = "en" | "ru" | "pl";
type Translations = typeof enTranslations;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  en: enTranslations,
  ru: ruTranslations as unknown as Translations,
  pl: plTranslations as unknown as Translations,
};

const LANGUAGE_STORAGE_KEY = "wolja-digital-language";

function getNestedValue(obj: any, path: string): string {
  return path.split(".").reduce((current, key) => current?.[key], obj) || path;
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "en";

  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "ru" || stored === "pl") {
      return stored;
    }
  } catch (error) {
    console.warn("Failed to read language from localStorage:", error);
  }

  return "en";
}

function storeLanguage(language: Language): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    console.warn("Failed to store language in localStorage:", error);
  }
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language from localStorage on mount
  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    setLanguageState(storedLanguage);
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    storeLanguage(lang);
  };

  const t = (key: string): string => {
    return getNestedValue(translations[language], key);
  };

  // Don't render until language is initialized to prevent hydration mismatch
  if (!isInitialized) {
    return null;
  }

  return (
    <I18nContext.Provider
      value={{ language, setLanguage, t, translations: translations[language] }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
