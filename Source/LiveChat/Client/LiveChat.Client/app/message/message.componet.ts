import { Component, OnInit, Input } from '@angular/core';

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
	message: string;
	constructor() {
		this.author = '';
		this.content = '';
		this.message = '';
	}

	ngOnInit() { }

	submitMessage() {
		this.message = `${this.author} says ${this.content}`
	}
}

