import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducer } from './reducers/index';

import { AppRoutingModule } from './app-routing.module';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { SharedModule } from './submodules/shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpModule,
		SharedModule,

		AppRoutingModule,

		MaterialModule.forRoot(),

		StoreModule.provideStore(reducer),
		RouterStoreModule.connectRouter(),
		StoreDevtoolsModule.instrumentOnlyWithExtension(),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

