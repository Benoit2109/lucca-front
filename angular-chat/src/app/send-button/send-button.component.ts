import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-send-button',
  templateUrl: './send-button.component.html',
  styleUrls: ['./send-button.component.scss']
})
export class SendButtonComponent implements OnInit {

  sendText:string = "Send!";

  constructor() { }

  ngOnInit(): void {
  }

  @Input() onSubmit: void;

}
