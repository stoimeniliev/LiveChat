import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'intrct-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.css']
})
export class MessagePreviewComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<MessagePreviewComponent>) { }

  ngOnInit() {
  }

}
