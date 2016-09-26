import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message'

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
	author: string;
	content: string;
	message: Message;
	constructor() {
		this.author = '';
		this.content = '';
		// this.message = '';
	}

	ngOnInit() { }

	submitMessage() {
		// this.message = `${ this.author } says ${ this.content }`
		this.message = new Message( this.author, this.content );
		console.log(this.message.sayMessage());
	}
}

