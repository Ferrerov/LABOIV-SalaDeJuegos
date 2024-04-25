import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"saladejuegos-ferrero","appId":"1:401823134910:web:059d2efce9bd1921c19aef","storageBucket":"saladejuegos-ferrero.appspot.com","apiKey":"AIzaSyB_RFqqAj4KMMDJN0vEOymFXtFhZeKj0Hk","authDomain":"saladejuegos-ferrero.firebaseapp.com","messagingSenderId":"401823134910"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
