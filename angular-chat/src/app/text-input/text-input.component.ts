import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {

  current:string;

  constructor() { 
    this.current="";
  }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log('sent!')
  }
  

}



