import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { AttenderComponent } from './attender/attender.component';

const appRoutes: Routes = [
	{ path: 'organizer', component: OrganizerComponent },
	{ path: 'attender', component: AttenderComponent },
	{ path: '', component: HomeComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
