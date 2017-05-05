import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import {
	SubscribtionDialogComponent
} from '../subscribtion-dialog/subscribtion-dialog.component';

@Component({
	selector: 'intrct-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

	ngOnInit() {
	}

}
