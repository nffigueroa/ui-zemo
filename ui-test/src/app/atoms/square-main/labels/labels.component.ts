import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  @ViewChild('label')  divLabel;
  @ViewChild('labelText') labelTag;
  type: string;
  txt: string;
  @Input() set kindOf (t: string) {
    this.type = t;
    switch (this.type) {
      case 'title-one':
        this.divLabel.nativeElement.classList.add('labels__title-one');
        this.labelTag.nativeElement.classList.add('labels__title-one--normal');
      break;
      case 'title-main':
        this.divLabel.nativeElement.classList.add('labels__title-main');
        this.labelTag.nativeElement.classList.add('labels__title-main--normal');
      break;
      case 'description':
        this.divLabel.nativeElement.classList.add('labels__description');
        this.labelTag.nativeElement.classList.add('labels__description--normal');
      break;
      case 'more-info':
        this.divLabel.nativeElement.classList.add('labels__more-info');
        this.labelTag.nativeElement.classList.add('labels__more-info--normal');
      break;
      case 'disclaimer':
        this.divLabel.nativeElement.classList.add('labels__disclaimer');
        this.labelTag.nativeElement.classList.add('labels__disclaimer--normal');
      break;
      case 'disclaimer-right-bold':
        this.divLabel.nativeElement.classList.add('labels__disclaimer-right');
        this.labelTag.nativeElement.classList.add('labels__disclaimer-right--bold');
      break;
      case 'disclaimer-right-regular':
        this.divLabel.nativeElement.classList.add('labels__disclaimer-right');
        this.labelTag.nativeElement.classList.add('labels__disclaimer-right--regular');
      break;
    }
  }
  @Input() set text (t: string) {
    this.txt = t;
  }
  constructor() { }

  ngOnInit() {
  }

}
