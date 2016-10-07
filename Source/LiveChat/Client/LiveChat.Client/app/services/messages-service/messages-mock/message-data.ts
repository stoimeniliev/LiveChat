import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Message } from '../../../messages/message/message';

export class MessageData implements InMemoryDbService {
	createDb() {
		let messages: Message[] = [
		];
		return { messages };
	}
}
