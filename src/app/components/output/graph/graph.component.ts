import { Component, OnInit } from '@angular/core';

import { TrainingsService } from '../../../services/trainings.service';
import { DateService } from '../../../services/date.service';
import { Training } from '../../../interfaces/training';


@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  single: any[] = [];
  view: any[] = [document.documentElement.clientWidth - 100, 400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Дата';
  showYAxisLabel = true;
  yAxisLabel = 'Пульс, уд/мин';
  colorScheme = {
    domain: ['#C7B42C']
  };

  private selectedTrainings: Training[] = [];

  constructor(private dateService: DateService,
              private trainingsService: TrainingsService) {}

  ngOnInit() {
    this.getTrainings();
  }

  private getTrainings(): void {
    this.trainingsService.getTrainings().subscribe((trainings) => {
      this.single = [];

      trainings.forEach((t) => {
        this.single.push({
          name: t['trainingDateSec'],
          value: t['pulseMax']
        });
      });

      this.single.sort(compareDates);

      this.single.map((t) => {
        t['name'] = this.dateService.fromUnixToHuman(t['name']).slice(0, -6);
      });

      Object.assign(this, this.single);
    });
  }

}

function compareDates(date1, date2) {
  return date1['name'] - date2['name'];
}
