import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'intrct-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
	@Input() author: string;
	@Input() content: string;

	constructor() { }

	ngOnInit() {
	}

}
