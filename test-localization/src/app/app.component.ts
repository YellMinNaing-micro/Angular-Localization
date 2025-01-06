import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {

  lang: string = '';
  private appName = 'Test Localization';

  constructor(private translateService: TranslateService,
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          // Traverse the ActivatedRoute tree to get titles of nested routes
          const titles: string[] = [];
          while (route) {
            if (route.snapshot.data['title']) {
              titles.unshift(route.snapshot.data['title']);
            }
            route = route.firstChild!;
          }
          return titles;
        })
      )
      .subscribe((titles) => {
        // Join the titles and append the app name
        const fullTitle = [...titles, this.appName].join(' | ');
        this.titleService.setTitle(fullTitle);
      });
  }

  changeLang(lang: any) {
    const selectedLang = lang.target.value;

    localStorage.setItem('lang', selectedLang);
    this.translateService.use(selectedLang);
  }
}

