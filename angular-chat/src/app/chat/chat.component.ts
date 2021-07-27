import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  getTextTime():string {
    const ojd = new Date();
    const ojdDate = ojd.getDate()+'/'+(ojd.getMonth()+1)+'/'+ojd.getFullYear();
    const ojdTime = ojd.getHours()+'h'+ojd.getMinutes()+'m'+ojd.getSeconds()+'s';
    return ojdDate + ' ' + ojdTime;
  }

}
