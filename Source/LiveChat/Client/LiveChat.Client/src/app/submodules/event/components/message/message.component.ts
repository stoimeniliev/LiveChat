import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from '@angular/core';

import { Message } from '../../models/message.model';

@Component({
	selector: 'intrct-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
	@Input() message: Message;
	@Output() thumbsUp = new EventEmitter<Message>();
	@Output() thumbsDown = new EventEmitter<Message>();

	constructor() { }

	ngOnInit() {
	}

	onThumbsUp(){
		this.thumbsUp.emit(this.message);
	}

	onThumbsDown() {
		this.thumbsDown.emit(this.message);
	}
}

