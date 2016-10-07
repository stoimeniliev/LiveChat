import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../message/message';
import { MessagesService } from '../../services/messages-service/messages-service';

@Component( {
	moduleId: module.id,
	selector: 'lc-messages-list',
	templateUrl: 'messages-list.component.html'
})

export class MessagesListComponent implements OnInit {
	@Input() messagesList: Message[];

	constructor( private messagesService: MessagesService ) { }

	ngOnInit() { }
}
