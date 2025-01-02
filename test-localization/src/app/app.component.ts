import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  lang: string = '';

  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(lang: any) {
    const selectedLang = lang.target.value;

    localStorage.setItem('lang', selectedLang);
    this.translateService.use(selectedLang);
  }
}

