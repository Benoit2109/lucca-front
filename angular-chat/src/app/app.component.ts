import { Component } from '@angular/core';
import { Message } from './chat/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messages:Message[]=[
    {pseudo:"Ben",date:new Date(),message:"Bonjour François-Xavier"},{pseudo:"François-Xavier",date:new Date(),message:"Bonjour Benoit, Comment ça va?"},
    {pseudo:"Ben",date:new Date(),message:"Très bien, merci. Avez-vous regardé mon test?"},{pseudo:"François-Xavier",date:new Date(),message:"Oui, certaines choses sont à revoir mais ce sera le but de notre accompagnement pendant ton alternance. Bienvenu chez Lucca!"},

  ];

  pseudo1:string="Ben";
  pseudo2:string="François-Xavier";
  
  
  constructor(){
    
  }

  onSubmit=(message:Message)=>{
    this.messages.push(message);
  }
  
}
