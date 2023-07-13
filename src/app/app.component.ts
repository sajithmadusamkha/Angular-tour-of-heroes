import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sajith Madusankha';
  imgPath = '../assets/bg.jpg';
  name = 'Sajith';
  isdisabled = false;
  value = 'Submit';
  inputValue = '';

  passValueToComponent(event: any) {
    console.log(event.target.value);
  }

  checkValue() {
    if (this.inputValue === this.name) {
      this.isdisabled = true;
    } else {
      this.isdisabled = false;
    }
  }

  isApproved = false;

  approve(status: any) {
    this.isApproved = status;
  }

  numbers = ['one', 'two', 'three', 'four', 'five'];

  luckyNumber = 0;

  highlightColor = 'white';
  isStyled = false;

  highlight(color: string) {
    this.highlightColor = color;
  }

  toggleStyle() {
    this.isStyled = !this.isStyled;
  }

  sendInput(input: any) {
    console.log(input.value);
  }
}
