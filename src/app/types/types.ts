export interface ICalendar {
    header: string;
    weeks: ICalendarWeek[];
    date: Date;
}

export interface ICalendarWeek {
    days: ICalendarDay[];
}

export interface ICalendarDay {
    thisMonth: boolean;
    weekDay: string;
    color: string;
    day: number;
}