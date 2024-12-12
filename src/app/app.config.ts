import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { DataModule } from './data/data.module';
import { provideHttpClient } from '@angular/common/http';
import { UserLoginUseCase } from './domain/usecases/user/user-login.usecase';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    DataModule,
    provideHttpClient()
  ]
};
