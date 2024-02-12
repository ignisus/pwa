import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'user-theme';

  constructor(private cookieService: CookieService) {}

  initializeTheme(): void {
    const storedTheme = this.getTheme();
    this.setTheme(storedTheme);
  }

  setTheme(theme: string): void {
    document.body.className = theme;
    this.cookieService.set(this.THEME_KEY, theme);
  }

  getTheme(): string {
    return this.cookieService.get(this.THEME_KEY) || 'dark-theme';
  }
}
