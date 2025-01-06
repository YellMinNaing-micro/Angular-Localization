# Localization in Angular

Introduction

Localization (L10n) in Angular enables the application to support multiple languages and cultural settings. This guide provides steps to set up localization in an Angular project using the built-in internationalization (i18n) feature or third-party libraries like ngx-translate.

Prerequisites

Node.js installed

Angular CLI installed (npm install -g @angular/cli)

An existing Angular project or create a new one:

ng new my-angular-app
cd my-angular-app

Method 1: Using Angular i18n (Built-in Localization)

Angular provides a built-in i18n module for static text translation.

Step 1: Add i18n Tags in HTML

Wrap the text to be translated with the i18n attribute:

<h1 i18n>Welcome to our application!</h1>

Step 2: Extract Translations

Run the following command to extract translation files:

ng extract-i18n --output-path src/locale

This generates messages.xlf in the src/locale folder.

Step 3: Create Language Files

Copy messages.xlf and rename it for each language, e.g., messages.fr.xlf for French, messages.es.xlf for Spanish.
Modify the <target> sections with translations:

<trans-unit id="xyz" datatype="html">
  <source>Welcome to our application!</source>
  <target>Bienvenue dans notre application!</target>
</trans-unit>

Step 4: Configure Angular for Localization

Edit angular.json to define languages:

"configurations": {
  "fr": {
    "localize": ["fr"],
    "outputPath": "dist/my-angular-app-fr"
  },
  "es": {
    "localize": ["es"],
    "outputPath": "dist/my-angular-app-es"
  }
}

Step 5: Build & Serve the Application

To build for a specific language:

ng build --configuration=fr

Serve the localized app:

npx http-server dist/my-angular-app-fr

Method 2: Using ngx-translate (Dynamic Localization)

ngx-translate is a third-party library that allows dynamic translations without recompiling.

Step 1: Install ngx-translate

npm install @ngx-translate/core @ngx-translate/http-loader

Step 2: Configure the Module

Modify app.module.ts:

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

Step 3: Create Translation Files

Create assets/i18n/en.json:

{
  "WELCOME": "Welcome to our application!"
}

Create assets/i18n/fr.json:

{
  "WELCOME": "Bienvenue dans notre application!"
}

Step 4: Use Translation in Components

Modify app.component.ts:

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}

Modify app.component.html:

<h1>{{ 'WELCOME' | translate }}</h1>
<button (click)="switchLanguage('en')">English</button>
<button (click)="switchLanguage('fr')">Français</button>

Step 5: Serve the Application

Run the application:

ng serve

Click the buttons to switch languages dynamically.

Conclusion

This guide covered two approaches to localization in Angular:

Built-in i18n: Suitable for static translations requiring build-time compilation.

ngx-translate: More flexible, allowing dynamic language switching at runtime.

Choose the method that best fits your project’s requirements.

References

Angular i18n: https://angular.io/guide/i18n

ngx-translate: https://github.com/ngx-translate/core

