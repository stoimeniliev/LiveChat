import { Component, OnInit } from '@angular/core';

@Component( {
	moduleId: module.id,
	selector: 'lc-message',
	templateUrl: 'message.component.html'
})

export class MessageComponent implements OnInit {
	ngOnInit() {
		console.log('This is a message!');
	}
}

