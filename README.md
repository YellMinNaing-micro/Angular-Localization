# Localization in Angular

**Introduction**

Localization (L10n) in Angular enables the application to support multiple languages and cultural settings. This guide provides steps to set up localization in an Angular project using the built-in internationalization (i18n) feature or third-party libraries like ngx-translate.

Prerequisites

To implement localization in Angular, you need to have Node.js and Angular CLI installed. You can either work on an existing Angular project or create a new one before proceeding with the localization setup.

Method 1: Using Angular i18n (Built-in Localization)

Angular provides a built-in i18n module that allows static text translations. This approach is ideal for applications where translations are predefined and do not change dynamically.

Steps for Angular i18n

Adding i18n Tags: Mark texts for translation using the i18n attribute in templates.

Extracting Translations: Use Angular CLI to generate translation files containing all marked texts.

Creating Language Files: Duplicate the extracted file and provide translations for each supported language.

Configuring Localization: Modify Angular settings to support multiple languages and define configurations for each.

Building and Serving the Application: Compile the application for different languages and deploy the required versions.

Method 2: Using ngx-translate (Dynamic Localization)

ngx-translate is a third-party library that allows dynamic translations. This approach is useful when the application requires real-time language switching without recompilation.

Steps for ngx-translate

Installing ngx-translate: Add the necessary dependencies for translation support.

Configuring the Module: Set up ngx-translate in the Angular module to load translation files dynamically.

Creating Translation Files: Store key-value pairs for different languages in separate JSON files.

Using Translations in Components: Implement ngx-translate in components to display translated text and allow language switching.

Serving the Application: Run the Angular application and test dynamic language switching.

Conclusion

This guide covered two approaches to localization in Angular:

Built-in i18n: Best for static translations that require build-time compilation.

ngx-translate: Ideal for dynamic language switching at runtime.

Choose the method that best fits your project’s requirements.

References

Angular i18n: https://angular.io/guide/i18n

ngx-translate: https://github.com/ngx-translate/core

