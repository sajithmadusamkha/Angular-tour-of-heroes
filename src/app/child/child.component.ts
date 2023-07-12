import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input()
  myName: any = 'Sajith Madusankha';

  @Output()
  sendEmitter = new EventEmitter();

  sentToParent(event: any) {
    this.sendEmitter.emit(event.target.value);
  }
}
