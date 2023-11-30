import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-selector',
  templateUrl: './view-selector.component.html',
  styleUrls: ['./view-selector.component.css']
})
export class ViewSelectorComponent {
    @Output() changeViewEvent = new EventEmitter();
    @Output() changeGraphEvent = new EventEmitter();
    viewNum = 1;

    changeView(value: any) {
        viewNum = value;
        changeViewEvent.emit(value);
    }

    changeGraph() {
        changeGraphEvent.emit()
    
}
