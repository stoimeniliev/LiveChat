import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';

@Component( {
	moduleId: module.id,
	selector: 'lc-message',
	templateUrl: 'message.component.html',
	styles: [
		`
		h1 {
			color: #369;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 250%;
		}
		h2,
		h3 {
			color: #444;
			font-family: Arial, Helvetica, sans-serif;
			font-weight: lighter;
		}
		`
	]
})

export class MessageComponent implements OnInit {
	@Input() message: Message;
	constructor() {
	}

	ngOnInit() { }
}

