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

import { Event } from '../../models/event.model';

@Component({
	selector: 'intrct-event-selector',
	templateUrl: './event-selector.component.html',
	styleUrls: ['./event-selector.component.css']
})
export class EventSelectorComponent implements OnInit {
	@Input() header: string;
	@Output() eventChosen = new EventEmitter<string>();

	eventForm: FormGroup;

	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.eventForm = this.fb.group({
			code: ['', Validators.required]
		});
	}

	goToEvent({ value, valid }: {value: Event, valid: boolean}): void {
		this.eventChosen.emit(value.code);
	}
}

