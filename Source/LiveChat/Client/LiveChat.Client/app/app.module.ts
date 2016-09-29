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
import { MessageComponent } from './messages/message.componet';

@NgModule( {
	imports: [
		BrowserModule, // Make the app runnable in the browser
		FormsModule, // NgModel
		routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		OrganizerComponent,
		AttenderComponent,
		MessageComponent
	],
	providers: [ appRoutingProviders ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }

