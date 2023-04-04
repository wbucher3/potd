import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Output()
  date: EventEmitter<string> = new EventEmitter()

  years: number[] = [];
  months: number[] = [];
  days:number[] = [];
  maxDays: number[] = [];

  selectedYear: number = 2023;
  selectedMonth: number = 1;
  selectedDay: number = 1;

  constructor() { 
    for (let i:number = 1; i <= 31; i++) {
      this.maxDays.push(i);
    }
    this.days = this.maxDays;

    for (let i:number = 1; i <= 12; i++) {
      this.months.push(i);
    }

    for (let i:number = 1990; i <= 2100; i++) {
      this.years.push(i);
    }
  }

  ngOnInit(): void {

  }


  isLeapYear() {
    return (
      this.selectedYear % 400 === 0 ||
      (this.selectedYear % 100 !== 0 && this.selectedYear % 4 === 0)
    );
  }


  // on change method for determining the amount of days
  setDays() {
    let maxDate = 31;
    
    if (this.selectedMonth == 2) {
      maxDate = this.isLeapYear() ? 29 : 28;
    } else if (this.selectedMonth == 4 
                || this.selectedMonth == 6
                || this.selectedMonth == 9
                || this.selectedMonth == 11) {
      maxDate = 30;
    }
    this.days = this.maxDays.filter(f => f <= maxDate);
    return maxDate;
  }


  monthOnChange() {
    let maxDay = this.setDays();
    if (this.selectedDay > maxDay) {
      this.selectedDay = 1;
    }
  }

  emitDate() {
    this.date.emit(this.selectedYear + "-" + this.selectedMonth + "-" + this.selectedDay);
  }

}
