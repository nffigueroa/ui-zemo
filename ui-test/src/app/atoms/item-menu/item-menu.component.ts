import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

  redirect(title) {
    window.open('', '_blank').document.title = title;
  }

}
