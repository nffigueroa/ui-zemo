import { Component, OnInit } from '@angular/core';
import * as moment_ from 'moment';

@Component({
  selector: 'app-remaining-chart-mol',
  templateUrl: './remaining-chart.component.html',
  styleUrls: ['./remaining-chart.component.scss']
})
export class RemainingChartComponent implements OnInit {
  private dateEnd = '2019-02-28';
  leftDays: number;
  constructor() {
    const date = moment_(this.dateEnd, 'YYYY-MM-DD');
    const now = moment_(new Date);
    this.leftDays = date.diff(now, 'days');
    sessionStorage.setItem('leftDays', this.leftDays.toString());
   }

  ngOnInit() {
  }

}
