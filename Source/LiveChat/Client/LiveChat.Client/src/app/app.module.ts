import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import {
	MdSidenavModule,
	MdButtonModule,
	MdInputModule,
	MdDialogModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SubscribtionDialogComponent } from './subscribtion-dialog/subscribtion-dialog.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		SubscribtionDialogComponent
	],

	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,

		MdSidenavModule,
		MdButtonModule,
		MdInputModule,
		MdDialogModule,
		FlexLayoutModule,

		AppRoutingModule
	],
	providers: [],

	entryComponents: [
		SubscribtionDialogComponent
	],

	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
