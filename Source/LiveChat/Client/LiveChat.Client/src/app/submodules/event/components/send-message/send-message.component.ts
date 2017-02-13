import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';

import { Message } from '../../models/message.model';

@Component({
	selector: 'intrct-send-message',
	templateUrl: './send-message.component.html',
	styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
	@Output() askedQuestion = new EventEmitter<string>();

	questionForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.questionForm = this.fb.group({
			question: ['', Validators.required]
		});
	}

	askQuestion({ value }: { value }):void {
		this.askedQuestion.emit(value.question);
	}
}

