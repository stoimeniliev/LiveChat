import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventComponent } from './event.component';
import { LiveEventComponent } from './components/live-event/live-event.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: EventComponent,
			},
			{
				path: ':id',
				component: LiveEventComponent
			}
		]
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: []
})
export class EventRoutingModule { }

