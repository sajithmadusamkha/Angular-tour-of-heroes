import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  parentMyName = 'Sajia';
  msgFromchild = '';

  recievedMsg(e: any) {
    this.msgFromchild = e;
  }
}
