import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  template: `
  <button (click)="toggleTheme()">Toggle Theme</button>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: any[] = [];

  constructor(private themeService: ThemeService, private DataService: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.loadHosting();
  }

  loadHosting() {
    this.DataService.getHosting().subscribe(data => {
      this.items = data;
    });
  }

  toggleTheme(): void {
    const currentTheme = this.themeService.getTheme();
    const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(newTheme);
  }

  onOptionClick(framework: string): void {
    console.log('Redirigiendo a', framework);
    this.router.navigate(['/framework', framework]);
  }

}