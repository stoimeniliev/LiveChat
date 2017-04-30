import { Component } from '@angular/core';

@Component({
	selector: 'intrct-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	isMobile: boolean = window.matchMedia("only screen and (max-width: 760px)").matches;
	opened: boolean = !this.isMobile;
	mode: string = this.isMobile ? 'over' : 'side';

	constructor(){
		console.log(this.isMobile);
	}

	openSidebar(sidebar){
		sidebar.open();
	}
}
