import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EventSelectorComponent } from './components/event-selector/event-selector.component';
import { MaterialModule } from '@angular/material';

@NgModule({
	declarations: [EventSelectorComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MaterialModule
	],
	exports: [
		CommonModule,
		EventSelectorComponent
	]
})
export class SharedModule { }

