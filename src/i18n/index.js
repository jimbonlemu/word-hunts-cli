/**
 * Internationalization (i18n) module
 */

import fs from "fs";
import path from "path";
import { __dirname } from "../utils/path.js";

class Translator {
  constructor(lang = 'en') {
    this.setLanguage(lang);
  }

  setLanguage(lang) {
    this.lang = lang;
    const langPath = path.join(__dirname, `../../src/i18n/${lang}.json`);
    
    try {
      this.translations = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    } catch (e) {
      console.error(`Failed to load translations for language: ${lang}, falling back to English`);
      this.lang = 'en';
      const fallbackPath = path.join(__dirname, '../../src/i18n/en.json');
      this.translations = JSON.parse(fs.readFileSync(fallbackPath, 'utf8'));
    }
  }

  t(key, ...params) {
    let translation = this.translations[key] || key;
    
    // Replace parameters if provided
    if (params.length > 0) {
      params.forEach((param, index) => {
        translation = translation.replace(`{${index}}`, param);
      });
    }
    
    return translation;
  }
}

// Global instance
let translator = new Translator();

export function setLanguage(lang) {
  translator.setLanguage(lang);
}

export function t(key, ...params) {
  return translator.t(key, ...params);
}

export default { setLanguage, t };