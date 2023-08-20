import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateFormatterPipe } from '../pipes/date-formatter.pipe';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { FormsModule } from '@angular/forms';

const PIPES = [
  DateFormatterPipe
]

const COMPONENTS = [
  CalendarComponent,
  InputsComponent
]

const MODULES = [
  CommonModule,
  FormsModule
]

@NgModule({
  declarations: [
    ...PIPES,
    ...COMPONENTS
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...PIPES,
    ...COMPONENTS,
    ...MODULES
  ]
})
export class SharedModule { }
