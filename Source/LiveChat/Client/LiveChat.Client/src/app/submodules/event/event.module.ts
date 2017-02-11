import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EventComponent } from './event.component';
import { MessageComponent } from './components/message/message.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { LiveEventComponent } from './components/live-event/live-event.component';

@NgModule({
	imports: [
		CommonModule,
		EventRoutingModule,
		SharedModule
	],
	declarations: [
		EventComponent,
		MessageComponent,
		SendMessageComponent,
		LiveEventComponent
	]
})
export class EventModule { }

