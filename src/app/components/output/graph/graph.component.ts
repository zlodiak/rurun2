import { Component, OnInit } from '@angular/core';

import { TrainingsService } from '../../../services/trainings.service';
import { Training } from '../../../interfaces/training';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  single: any[] = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  private trainings: Training[] = [];

  constructor(private trainingsService: TrainingsService) { Object.assign(this, this.single)   }

  ngOnInit() {
    this.getTrainings();

  }

  private getTrainings(): void {
    this.trainingsService.getTrainings().subscribe((trainings) => {
      this.trainings = trainings;
    });
  }

  onSelect(event) {
    console.log(event);
  }

}
