import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'engagement-views',
  templateUrl: './engagement-views.component.html',
  styleUrls: ['./engagement-views.component.css']
})
export class EngagementViewsComponent {
  // @Output() changeViewEvent = new EventEmitter();

  viewSelectNum = 0;
  graphSelectNum = true;

  ngOnInit() {
    console.log("!!!!!");
  }

  changeView(value: any) {
    this.viewSelectNum = value;
    this.graphSelectNum = true;
    // this.changeViewEvent.emit(value);
  }

  changeGraph() {
    this.graphSelectNum = !this.graphSelectNum;
  }
}
