// translation.service.ts
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(
    private translate: TranslateService,
    private cookieService: CookieService
  ) {}

  init() {
    const lang = this.cookieService.get('userLang') || 'en';
    this.setDefaultAndUse(lang);
  }

  setLanguage(lang: string) {
    this.cookieService.set('userLang', lang);
    this.setDefaultAndUse(lang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || 'en';
  }

  private setDefaultAndUse(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }
}
