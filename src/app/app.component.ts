import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { TranslationService } from './translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private themeService: ThemeService
  ) {}
  isLoading = true;
  title = 'Ignisus';
  ngOnInit() {
    this.translationService.init();
    this.themeService.initializeTheme();
  }
  @HostListener('window:load', ['$event'])
  onLoad(event: Event) {
    this.isLoading = false;
  }
}
