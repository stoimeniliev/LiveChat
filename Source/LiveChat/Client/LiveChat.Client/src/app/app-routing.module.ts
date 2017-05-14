import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectorComponent } from './projector/projector.component';
import { MessageComponent } from './message/message.component';
import { MobileViewComponent } from './mobile-view/mobile-view.component';

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
		path: 'mobile',
		component: MobileViewComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
