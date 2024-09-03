import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  faSun = faSun;
  faMoon = faMoon;
  isDarkMode: boolean = false;

  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }

  applyTheme(): void {
    this.isDarkMode = localStorage.getItem('theme') === 'dark';
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
