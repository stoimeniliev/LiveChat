import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectorComponent } from './projector/projector.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'projector',
		component: ProjectorComponent
	},
	{
		path: 'message',
		component: MessageComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
