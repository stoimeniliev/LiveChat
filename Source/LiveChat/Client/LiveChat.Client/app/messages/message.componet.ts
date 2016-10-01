import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message/message'

@Component( {
	moduleId: module.id,
	selector: 'lc-message',
	templateUrl: 'message.component.html',
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

export class MessageComponent implements OnInit {
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

