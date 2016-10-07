import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CONSTANTS } from '../../constants';
import { Message } from '../../messages/message/message';

@Injectable()
export class MessagesService {
	private getMessagesUrl = CONSTANTS.ENDPOINTS.getMessages;
	private addMessageUrl = CONSTANTS.ENDPOINTS.addMessage;

	constructor( private http: Http ) { }

	getMessages(): Observable<Message[]> {
		// console.log(this.http.get(this.getMessagesUrl));
		return this.http.get( this.getMessagesUrl )
			.map( this.extractData )
			.catch( this.handleError );
	}

	addMessage( message: Message ): Observable<Message> {
		let body = JSON.stringify( message );
		let headers = new Headers( { 'Content-Type': 'application/json' });
		let options = new RequestOptions( { headers: headers });

		return this.http.post( this.addMessageUrl, body, options )
			.map( this.extractData )
			.catch( this.handleError );
	}

	private extractData( res: Response ) {
		let body = res.json();
		return body.data;
	}

	private handleError( error: any ) {
		console.log( error );
		return Observable.throw( error.message );
	}
}

