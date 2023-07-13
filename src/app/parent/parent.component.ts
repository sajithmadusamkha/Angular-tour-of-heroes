import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {
  parentMyName = 'Sajia';
  msgFromchild = '';

  isChild = false;

  recievedMsg(e: any) {}

  constructor() {
    console.log('Parent contructor is called');
  }
  firstName = '';

  ngOnInit(): void {
    console.log('Parent OnInit - component is initialized');
  }

  ngOnChanges() {
    console.log('Parent Onchanges');
  }

  ngDoCheck() {
    console.log('Parent DoCheck');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
