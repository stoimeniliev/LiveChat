import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Message } from '../message/message';
import { MessagesService } from '../../services/messages-service/messages-service';

@Component({
	moduleId: module.id,
	selector: 'lc-message-input',
	templateUrl: 'message-input.component.html',
	styles: [
		`label {
			display: inline;
			font-weight: bold;
		}`,
		`label:before, label:after {
			content: "\\A";
			white-space: pre;
		}`,
		`button {
			display: block;
		}`
	]
})

export class MessageInputComponent implements OnInit {
	private message: Message;
	private saidMessage: string;

	@Output() onNewMessage = new EventEmitter<Message>();

	constructor() { }

	ngOnInit() { }

	submitMessage(author: HTMLInputElement, content: HTMLInputElement) {
		this.message = new Message(author.value || 'Annonymous', content.value);
		this.onNewMessage.emit(this.message);
		author.value = '';
		content.value = '';
	}
}

