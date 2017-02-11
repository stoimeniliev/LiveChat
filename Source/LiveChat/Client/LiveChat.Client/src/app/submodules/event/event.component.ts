import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'intrct-event',
	templateUrl: './event.component.html',
	styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
	private header: string;

	constructor() { }

	ngOnInit() {
		this.header = 'Please enter event code'
	}

	onEventChosen(ev) {
		console.log(ev);
	}
}

