import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';   
import { routes } from './app/app.routes';            
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideClientHydration } from '@angular/platform-browser';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
<<<<<<< HEAD
    provideClientHydration(),
    ...(appConfig.providers ?? [])
=======
    ...(appConfig.providers || []),   
    provideRouter(routes)            
>>>>>>> 79dd6e94249c64e4c5b91fe8f7864da5db2ad181
  ]
}).catch((err) => console.error(err));
