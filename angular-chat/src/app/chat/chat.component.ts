import { Component,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { Message } from './message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input()messages: Message[];
  @Output() submit = new EventEmitter<Message>();
  current:string;

  constructor() { 
    this.messages=[];
    this.current="";
    
  }

  ngOnInit(): void {
  }

  onClick() {
    this.submit.emit({pseudo:"Ben",date:new Date(),message:this.current});
    this.current="";
  }
  

}
