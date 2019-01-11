import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  @Input() data: any[];
  @Input() config: any[];
  @Output() actionEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  action(actionType, payload) {
    this.actionEvent.emit({ actionType, payload });
  }

}
