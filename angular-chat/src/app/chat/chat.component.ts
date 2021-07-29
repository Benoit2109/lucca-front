import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input()messages: Message[];
  @Output()submit = new EventEmitter<Message>();
  current:string;
  @Input()pseudo:string;
  

  constructor() { 
    this.messages=[];
    this.current="";
    this.pseudo="";
  }

  ngOnInit(): void {
  }

  onClick() {
    this.submit.emit({pseudo:this.pseudo,date:new Date(),message:this.current});
    this.current="";
  }
  

}
