import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../chat/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  postedAt= new Date();
  
  @Input()messages:Message[];
  @Input()pseudo:string;

  constructor() {
    this.messages=[]
    this.pseudo="";
   }

  ngOnInit(): void {
  }

  getPseudoColor(pseudo:string) {
    if(pseudo==="Ben"){
      return "#f8521b";
    } else if(pseudo==="François-Xavier"){
      return "#F8DB1B";
    } else {
      return "#F4E66F";
    }
  }
  

}
