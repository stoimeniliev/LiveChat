/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LiveEventComponent } from './live-event.component';

describe( 'LiveEventComponent', () => {
	let component: LiveEventComponent;
	let fixture: ComponentFixture<LiveEventComponent>;

	beforeEach( async(() => {
		TestBed.configureTestingModule( {
			declarations: [ LiveEventComponent ]
		} )
			.compileComponents();
	} ) );

	beforeEach(() => {
		fixture = TestBed.createComponent( LiveEventComponent );
		component = fixture.componentInstance;
		fixture.detectChanges();
	} );

	it( 'should create', () => {
		expect( component ).toBeTruthy();
	} );
} );
