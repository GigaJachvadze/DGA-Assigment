import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any): string {
    let dateObj = new Date(value)

    if (!isNaN(+dateObj)) {
      return this.formatDate(dateObj);
    }

    console.warn("Invalid Date For Date Formatter Pipe!")
    return value
  }

  formatDate(date: Date): string {
    let returnVal = "";

    let month = date.toLocaleString('default', {month: 'short'})
    let day = date.toLocaleString('default', {day: '2-digit'})
    let year = date.toLocaleString('default', {year: 'numeric'})
    let hours = date.toLocaleString('default', {hour: '2-digit', hourCycle: 'h23'})
    let seconds = date.toLocaleString('default', {second: '2-digit'})
    let minutes = date.toLocaleString('default', {minute: '2-digit'})

    returnVal = `${hours.length === 1? `0${minutes}`: hours}:${minutes.length === 1? `0${minutes}`: minutes}:${seconds.length === 1? `0${seconds}`: seconds} ${month} ${day} ${year}`

    return returnVal;
  }

}
