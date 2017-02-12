import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'intrct-live-event',
	templateUrl: './live-event.component.html',
	styleUrls: ['./live-event.component.css']
})
export class LiveEventComponent implements OnInit {
	private eventName: string;

	constructor() {
		this.eventName = 'Awesome event name';
	}

	ngOnInit() {
	}

}

