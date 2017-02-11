import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { go } from '@ngrx/router-store';

import * as fromRoot from '../../reducers';

@Component({
	selector: 'intrct-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	private header: string;

	constructor(private store: Store<fromRoot.State>) {
		this.header = 'Audience interaction and engagement for your events';
	}

	ngOnInit() {
	}

	onEventChosen(ev) {
		console.log(ev);
		this.store.dispatch(go(['event', ev]));
	}
}

