import { Component, OnInit, Input, ViewChildren, ViewChild } from '@angular/core';
import { QueryList } from '@angular/core/src/render3';

@Component({
  selector: 'app-button-square',
  templateUrl: './button-square.component.html',
  styleUrls: ['./button-square.component.scss']
})
export class ButtonSquareComponent implements OnInit {
  @ViewChild('btn') dateRef;
  @ViewChild('label') label;
  txt: string;
  @Input() set text(t: string) {
    this.txt = t;
  }
  @Input() set kindOf(t: string) {
    switch (t) {
      case 'BLACK':
        this.dateRef.nativeElement.classList.add('button-square-black');
        this.label.nativeElement.classList.add('button-square-black__text');
        break;
      case 'WHITE':
      this.dateRef.nativeElement.classList.add('button-square');
      this.label.nativeElement.classList.add('button-square__text');
        break;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
