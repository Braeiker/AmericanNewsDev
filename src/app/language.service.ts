import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguage: string = 'us';

  getLanguage(): string {
    return this.selectedLanguage;
  }

  setLanguage(language: string) {
    this.selectedLanguage = language;
  }

  // Aggiungi questa funzione
  updateLanguage(language: string) {
    this.selectedLanguage = language;
  }
}
