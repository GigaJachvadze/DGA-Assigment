import { Component, OnInit } from '@angular/core';
import { ICalendar, ICalendarDay, ICalendarWeek } from 'src/app/types/types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  restDays = ["SUN", "SAT"];

  calendar: ICalendar = <ICalendar>{};

  calendarDays: number[][] = []

  constructor() { }

  ngOnInit(): void {
    this.buildCalendar();
  }

  buildCalendar(): void {
    this.calendar.date = new Date()
    this.calendar.weeks = []

    this.calendar.header = this.calendar.date.toLocaleString('default', {month: 'long', year: 'numeric'}).toUpperCase()

    let currentMonth = this.calendar.date.getMonth();

    let newDate = new Date(this.calendar.date.getFullYear(), currentMonth, 1);

    let weekDayOfNewDate = newDate.getDay();

    newDate.setDate(newDate.getDate() - weekDayOfNewDate);

    weekDayOfNewDate = newDate.getDay();

    let temp = []
    let daysLength = 0

    while (currentMonth >= newDate.getMonth() || daysLength % this.weekDays.length != 0) {
      let day = <ICalendarDay>{
        thisMonth: currentMonth === newDate.getMonth()? true : false,
        color: newDate.getDate() === this.calendar.date.getDate()? '#ff8ae9': this.restDays.includes(this.weekDays[newDate.getDay()])? '#5283ff' : '#00000',
        weekDay: this.weekDays[newDate.getDay()],
        day: newDate.getDate()
      }
      temp.push(day);

      newDate.setDate(day.day + 1);

      if (temp.length % this.weekDays.length == 0) {
        let week = <ICalendarWeek> {days: temp};
        this.calendar.weeks.push(week);
        temp = [];
      }
      daysLength++;
    }
  }
}