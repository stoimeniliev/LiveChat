import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages-service/messages-service';
import { Message } from '../messages/message/message';

@Component({
	moduleId: module.id,
	selector: 'lc-organizer',
	templateUrl: 'attender.component.html'
})
export class AttenderComponent implements OnInit {
	private messagesService: MessagesService;
	messagesList: Message[];

	constructor(messagesService: MessagesService) {
		this.messagesService = messagesService;
		this.messagesList = [];
	}

	ngOnInit() {
		this.messagesService
			.getMessages()
			.subscribe(messages => this.messagesList = messages.reverse());
	}

	handleMessage(message: Message) {
		this.messagesService
			.addMessage(message)
			.subscribe(message => this.messagesList.unshift(message));
	}
}
