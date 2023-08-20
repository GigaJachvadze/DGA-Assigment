import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  input_1 = '';
  input_2 = '';

  input_1_diffrences_indexes: number[] = []
  input_2_diffrences_indexes: number[] = []

  @ViewChild('input_1_ref') input_1_ref!: ElementRef<HTMLElement>
  @ViewChild('input_2_ref') input_2_ref!: ElementRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {}

  compare(): void {
    this.input_1_diffrences_indexes = [];
    this.input_2_diffrences_indexes = [];

    for (let i = 0; i < this.input_1.length; i++) {
      let char_1 = this.input_1[i];
      let char_2 = this.input_2[i];

      if (char_2 === undefined) {
        while (i < this.input_1.length) {
          this.input_1_diffrences_indexes.push(i);
          i++;
        }
        break;
      }

      if (char_1.trim() != char_2.trim()) {
        this.input_1_diffrences_indexes.push(i);
      }
    }

    for (let i = 0; i < this.input_2.length; i++) {
      let char_1 = this.input_1[i];
      let char_2 = this.input_2[i];

      if (char_1 === undefined) {
        while (i < this.input_2.length) {
          this.input_2_diffrences_indexes.push(i);
          i++;
        }
        break;
      }


      if (char_1.trim() != char_2.trim()) {
        this.input_2_diffrences_indexes.push(i);
      }
    }

    this.draw_1();
    this.draw_2();
  }

  draw_1(): void {
    let newHTML = "";
    for (let j = 0; j < this.input_1.length; j++) {
      let done = false;
      for (let i = 0; i < this.input_1_diffrences_indexes.length; i++) {
        let index = this.input_1_diffrences_indexes[i];
        if (j == index) {
          done = true;
          newHTML += `<span style="background-color: aqua; height: 100%;">${this.input_1[j]}</span>`
          break;
        }
      }
      if (!done) {
        newHTML += this.input_1[j];
      }
    }
    
    this.input_1_ref.nativeElement.innerHTML = newHTML;
  }

  draw_2(): void {
    let newHTML = "";
    for (let j = 0; j < this.input_2.length; j++) {
      let done = false;
      for (let i = 0; i < this.input_2_diffrences_indexes.length; i++) {
        let index = this.input_2_diffrences_indexes[i];
        if (j == index) {
          done = true;
          newHTML += `<span style="background-color: aqua; height: 100%;">${this.input_2[j]}</span>`
          break;
        }
      }
      if (!done) {
        newHTML += this.input_2[j];
      }
    }
    
    this.input_2_ref.nativeElement.innerHTML = newHTML;
  }


  assign_1(event: any): void {
    this.input_1 = event.target.textContent;
    this.reset();
    this.input_1_ref.nativeElement.focus();
    document.execCommand('selectAll', false, undefined);
    document.getSelection()!.collapseToEnd();
    this.compare();
  }

  assign_2(event: any): void {
    this.input_2 = event.target.textContent;
    this.reset();
    this.input_2_ref.nativeElement.focus();
    document.execCommand('selectAll', false, undefined);
    document.getSelection()!.collapseToEnd();
    this.compare();
  }

  reset(): void {
    this.input_1_ref.nativeElement.innerHTML = this.input_1;
    this.input_2_ref.nativeElement.innerHTML = this.input_2;
  }
}