import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from '@angular/core';
import { MdDialog } from '@angular/material';

import { Message } from '../../models/message.model';

import {
	MessagePreviewComponent
} from '../message-preview/message-preview.component';

@Component({
	selector: 'intrct-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
	@Input() message: Message;
	@Output() thumbsUp = new EventEmitter<Message>();
	@Output() thumbsDown = new EventEmitter<Message>();

	constructor(public dialog: MdDialog) { }

	ngOnInit() {
	}

	onThumbsUp() {
		this.thumbsUp.emit(this.message);
	}

	onThumbsDown() {
		this.thumbsDown.emit(this.message);
	}

	showFullMessage() {
		console.log('Dialog should be show here, but at the time there are some bugs and future release of Angular Material should solve that.');
		// this.dialog.open(MessagePreviewComponent);
	}
}


