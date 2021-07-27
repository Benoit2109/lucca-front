import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-window',
  templateUrl: './display-window.component.html',
  styleUrls: ['./display-window.component.scss']
})
export class DisplayWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getTextTime() {
    const ojd = new Date();
    const ojdDate = ojd.getDate()+'/'+(ojd.getMonth()+1)+'/'+ojd.getFullYear();
    const ojdTime = ojd.getHours()+'h'+ojd.getMinutes()+'m'+ojd.getSeconds()+'s';
    return ojdDate + ' ' + ojdTime;
  }

}
