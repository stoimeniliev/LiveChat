// The root of the app from a developer stand point.
// Every service and other global dependency is registered here.
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing, appRoutingProviders } from './app.routing';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from "./organizer/organizer.component";
import { AttenderComponent } from "./attender/attender.component";

@NgModule( {
	imports: [ BrowserModule, routing ],
	declarations: [ HomeComponent, OrganizerComponent, AttenderComponent ],
	providers: [ appRoutingProviders ],
	bootstrap: [ HomeComponent ]
})

export class AppModule { }

