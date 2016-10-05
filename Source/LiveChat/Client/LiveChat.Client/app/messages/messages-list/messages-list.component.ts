import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message';

@Component( {
	moduleId: module.id,
	selector: 'lc-messages-list',
	templateUrl: 'messages-list.component.html'
})

export class MessagesListComponent implements OnInit {
	messageList: Message[];

	constructor() {
		this.messageList = [
			new Message( 'Pesho', 'Az sam mega iak' ),
			new Message( 'Tito', 'I az sam mega iak' ),
			new Message( 'Kiro', 'Az sam NAI IAK' )
		];
	}

	ngOnInit() { 
		alert('Use service for loading messages!');
	}
}

