// Starting point of the application from the stand point of angular. Angular sees the bootstrapModule function and starts AppModule.
// Basically says that the root of the app is AppModulse.
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule( AppModule );