import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-window',
  templateUrl: './display-window.component.html',
  styleUrls: ['./display-window.component.scss']
})
export class DisplayWindowComponent implements OnInit {
  @Input() getTextTime: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  

}
