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
import { Question } from '../../models/question.model';

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

	askQuestion({ value, valid }: { value: Question, valid: boolean }):void {
		this.askedQuestion.emit(value.question);
	}
}

