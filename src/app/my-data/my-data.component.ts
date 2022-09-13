import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {
  firstName: string = 'Александра';
  lastName: string = 'Пташиц';
  gender: string = 'ж';
  age: number = 28;
  imgURL: string = 'https://avatars.githubusercontent.com/u/98906181?v=4'

  constructor() { }

  ngOnInit(): void {
  }

}
