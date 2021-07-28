import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  postedAt= new Date();
  pseudo:string="Benoit";
  message:string="Bonjour comment ça va?"

  constructor() {
    
   }

  ngOnInit(): void {
  }

  getColor() {
    if(this.pseudo === "Benoit"){
      return "red";
    } else {
      return "green";
    }
  }
  

}
