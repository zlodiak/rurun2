import { Component, OnInit, Input } from '@angular/core';

import { Training } from '../../../interfaces/training';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  @Input() trainings: Training[] = [];

  constructor() { }

  ngOnInit() {
  }

}
