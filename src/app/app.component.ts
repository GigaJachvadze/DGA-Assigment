import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DGA-Assigment';

  now = new Date();

  ngOnInit(): void {
      setInterval(() => {
        this.now = new Date();
      }, 1000)
  }
}
