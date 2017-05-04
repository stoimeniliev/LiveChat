import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import {
	SubscribtionDialogComponent
} from './subscribtion-dialog/subscribtion-dialog.component';

@Component({
	selector: 'intrct-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	isMobile: boolean = window.matchMedia('only screen and (max-width: 769px)').matches;
	opened: boolean = !this.isMobile;
	mode: string = this.isMobile ? 'over' : 'side';

	constructor(public dialog: MdDialog) { }

	openSidebar(sidebar) {
		sidebar.open();
	}

	openDialog() {
		this.dialog.open(SubscribtionDialogComponent);
	}
}
