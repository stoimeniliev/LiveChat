import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { EventRoutingModule } from './event-routing.module';
import { SharedModule } from '../shared/shared.module';

import { EventComponent } from './event.component';
import { MessageComponent } from './components/message/message.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { LiveEventComponent } from './components/live-event/live-event.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { MessagePreviewComponent } from './components/message-preview/message-preview.component';

@NgModule({
	imports: [
		CommonModule,
		EventRoutingModule,
		SharedModule,

		MaterialModule,

		ReactiveFormsModule
	],
	declarations: [
		EventComponent,
		MessageComponent,
		SendMessageComponent,
		LiveEventComponent,
		MessageListComponent,
		MessagePreviewComponent,
	]
})
export class EventModule { }


