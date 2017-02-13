import {
	Component,
	OnInit
} from '@angular/core';

import { Message } from '../../models/message.model';
import {
	SPONSORED,
	NOT_SPONSORED
} from '../../event.constants';

@Component({
	selector: 'intrct-live-event',
	templateUrl: './live-event.component.html',
	styleUrls: ['./live-event.component.css']
})
export class LiveEventComponent implements OnInit {
	private eventName: string;
	private messages: Message[] = [
		new Message('Ivan Ivanov', 'I dont know a thing?!', 1, NOT_SPONSORED),
		new Message('The big coproration', 'SOME GRAND IMAGE HERE', 1, SPONSORED),
		new Message('Ivan Ivanov', 'I dont know a thing?!', 1, NOT_SPONSORED),
		new Message('Ivan Ivanov', 'I dont know a thing?!', 1, NOT_SPONSORED),
		new Message('The big coproration', 'SOME GRAND IMAGE HERE', 1, SPONSORED),
		new Message('Petar Petrov', 'My question is here...', 2, NOT_SPONSORED)
	]

	constructor() {
		this.eventName = 'Awesome event name';
	}

	ngOnInit() {
	}

	onAskedQuestion(ev) {
		console.log(ev);
	}

	onThumbsUp(ev: Message) {
		console.log(ev);
	}

	onThumbsDown(ev: Message) {
		console.log(ev);
	}
}


