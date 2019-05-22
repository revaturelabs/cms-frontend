import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
<<<<<<< HEAD
=======
import 'hammerjs';
>>>>>>> 619bc6c63e4d2cd61863d9423103f76c2eac4ba7

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
