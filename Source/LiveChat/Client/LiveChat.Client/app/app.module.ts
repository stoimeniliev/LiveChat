// The root of the app from a developer stand point.
// Every service and other global dependency is registered here.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular2-in-memory-web-api'; // For development only. Creates an in-memori db.
import { MessageData } from './services/messages-service/messages-mock/message-data'; // Mock service for messages.

import './rxjs-operators';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AttenderComponent } from './attender/attender.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessageInputComponent } from './messages/message-input/message-input.componet';
import { MessageComponent } from './messages/message/message.component';
import { MessagesService } from './services/messages-service/messages-service';

@NgModule( {
	imports: [ // For external self-contained modules
		InMemoryWebApiModule.forRoot( MessageData ), // DELETE THIS IN PRODUCTION!
		BrowserModule, // Make the app runnable in the browser
		FormsModule, // NgModel
		HttpModule,
		routing
	],
	declarations: [ // For internal components to the app
		AppComponent,
		HomeComponent,
		OrganizerComponent,
		AttenderComponent,
		MessageInputComponent,
		MessagesListComponent,
		MessageComponent
	],
	providers: [
		appRoutingProviders,
		MessagesService
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }

