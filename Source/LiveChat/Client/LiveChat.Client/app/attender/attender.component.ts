import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages-service/messages-service';
import { Message } from '../messages/message/message';

@Component( {
	moduleId: module.id,
	selector: 'lc-organizer',
	templateUrl: 'attender.component.html'
})
export class AttenderComponent implements OnInit {
	messagesList: Message[];

	constructor( private messagesService: MessagesService ) {
		this.messagesList = [];
	}

	ngOnInit() {
		this.messagesService
			.getMessages()
			.subscribe( messages => this.messagesList = messages);
	}

	handleMessage( message: Message ) {
		this.messagesService
			.addMessage( message )
			.subscribe(message => this.messagesList.unshift(message));
	}
}

