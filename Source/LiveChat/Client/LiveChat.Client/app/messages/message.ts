export class Message {
	author: string;
	content: string;

	constructor(author: string, content: string){
		this.author = author;
		this.content = content;
	}

	sayMessage(){
		return `${this.author}: ${this.content}`;
	}
}
