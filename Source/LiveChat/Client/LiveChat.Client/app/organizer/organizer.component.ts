import { Component, OnInit } from '@angular/core';

import { MessagesService } from '../services/messages-service/messages-service';
import { Message } from '../messages/message/message';

@Component( {
	moduleId: module.id,
	selector: 'lc-attender',
	templateUrl: 'organizer.component.html'
})

export class OrganizerComponent implements OnInit {
	messagesList: Message[]

	constructor( private messagesService: MessagesService, ) { }

	ngOnInit() {
		this.messagesService
			.getMessages()
			.subscribe( messages => this.messagesList = messages );
	}
}

