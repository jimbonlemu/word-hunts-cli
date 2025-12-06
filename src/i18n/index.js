/**
 * Internationalization (i18n) module
 */

import fs from "fs";
import path from "path";
import { __dirname } from "../utils/path.js";

// Global state for translations
let currentLang = 'en';
let translations = {};

// Initialize translations
function initializeTranslations(lang = 'en') {
  const langPath = path.join(__dirname, `../../src/i18n/${lang}.json`);

  try {
    translations = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    currentLang = lang;
  } catch (e) {
    console.error(`Failed to load translations for language: ${lang}, falling back to English`);
    currentLang = 'en';
    const fallbackPath = path.join(__dirname, '../../src/i18n/en.json');
    translations = JSON.parse(fs.readFileSync(fallbackPath, 'utf8'));
  }
}

// Initialize with default language
initializeTranslations();

export function setLanguage(lang) {
  initializeTranslations(lang);
}

export function t(key, ...params) {
  let translation = translations[key] || key;

  // Replace parameters if provided
  if (params.length > 0) {
    params.forEach((param, index) => {
      translation = translation.replace(`{${index}}`, param);
    });
  }

  return translation;
}

export default { setLanguage, t };