import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message';

@Component( {
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
	message: Message;
	saidMessage: string;
	constructor() {
		this.saidMessage = '';
	}

	ngOnInit() { }

	submitMessage(author: HTMLInputElement, content: HTMLInputElement) {
		this.message = new Message( author.value, content.value );
		this.saidMessage = this.message.getMessage();
	}
}

