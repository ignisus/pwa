import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentLanguage: string = 'en';

  constructor(private translationService: TranslationService, private themeService: ThemeService) { }

  ngOnInit() {
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

  changeLanguage(event: any): void {
    const lang = event.target.value;
    this.translationService.setLanguage(lang);
  }

  toggleTheme(): void {
    const currentTheme = this.themeService.getTheme();
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
  }
}
