import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  heigthList = 0;
  items = [
    {
      text: 'Past Trials'
    },
    {
      text: 'How It Works'
    },
    {
      text: 'Log In / Sign Up'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  changeHeigth() {
    this.heigthList = Number(this.heigthList) > 0 ? 0 : 80;
  }

}
