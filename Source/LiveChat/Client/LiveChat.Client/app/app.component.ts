// The root of the app from the stand point of the user. This points to the html tag that is placed in the initial index.html.
// In this case lc-app (lc - live chat).
import { Component } from '@angular/core';

@Component( {
	moduleId: module.id,
	selector: 'lc-app',
	templateUrl: 'app.component.html'
})

export class AppComponent {

}

