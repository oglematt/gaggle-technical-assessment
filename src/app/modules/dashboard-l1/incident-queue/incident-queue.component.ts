import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-queue',
  templateUrl: './incident-queue.component.html',
  styleUrls: ['./incident-queue.component.scss']
})
export class IncidentQueueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  selectAll(): void {
    alert('If fully implemented, this would toggle all rows based on some sort of selection model');
  }
}
