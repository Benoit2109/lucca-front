import { Component } from '@angular/core';
import { Message } from './chat/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  messages:Message[]=[{pseudo:"Ben",date:new Date(),message:"coucou"},{pseudo:"FX",date:new Date(),message:"salut!"}];
  
  constructor(){

  }

  onSubmit=(message:Message)=>{
    this.messages.push(message);
  }
  
}
