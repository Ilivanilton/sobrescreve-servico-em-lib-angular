import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HELLO_WORD_TOKEN } from 'my-lib';
import { AppService } from './app.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // {provide: HELLO_WORD_TOKEN, useClass: AppService},
    provideRouter(routes)
  ]
};
