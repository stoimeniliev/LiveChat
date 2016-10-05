// The root of the app from a developer stand point.
// Every service and other global dependency is registered here.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AttenderComponent } from './attender/attender.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { MessageInputComponent } from './messages/message-input/message-input.componet';
import { MessageComponent } from './messages/message/message.component';

@NgModule( {
	imports: [ // For external self-contained modules
		BrowserModule, // Make the app runnable in the browser
		FormsModule, // NgModel
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
	providers: [ appRoutingProviders ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }

