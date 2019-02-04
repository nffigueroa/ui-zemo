import { Component, OnInit, Input } from '@angular/core';
import { SANITIZER } from '@angular/core/src/render3/interfaces/view';
import {
  DomSanitizer,
  SafeHtml,
  SafeUrl,
  SafeStyle
} from '@angular/platform-browser';
@Component({
  selector: 'app-info-star-square',
  templateUrl: './info-star-square.component.html',
  styleUrls: ['./info-star-square.component.scss']
})
export class InfoStarSquareComponent implements OnInit {
  nameStar: string;
  config: any;
  @Input()
set conf(config: any) {
  this.config = config;
  this.nameStar = this.config.nameStar;
  this.setIcon(null);
}
  constructor(private sanitizer: DomSanitizer) {
   }
  ngOnInit() {
  }
  setIcon(event) {
    let positives, negatives;
      positives = sessionStorage.getItem(`positiveVotes${this.config.nameStar}`);
      negatives = sessionStorage.getItem(`negativeVotes${this.config.nameStar}`);
      this.config.statusVotation = positives > negatives;
  }

  getClass() {
    return this.config.statusVotation ? 'square__ltl-icon' : 'square__ltl-icon-negative';
  }
}
