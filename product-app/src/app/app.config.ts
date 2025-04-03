import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // Configuración de la aplicación
  // Se utiliza para importar módulos y servicios necesarios para la aplicación
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
            provideRouter(routes),
            provideHttpClient(),]
};
