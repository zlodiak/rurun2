import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';

import { TrainingsService } from '../../../services/trainings.service';
import { DateService } from '../../../services/date.service';
import { Training } from '../../../interfaces/training';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  private sortedData;
  private trainings: Training[] = [];

  constructor(private dateService: DateService,
              private trainingsService: TrainingsService) {}

  ngOnInit() {
    this.getTrainings();
  }

  private getTrainings(): void {
    this.trainingsService.getTrainings().subscribe((trainings) => {
      this.trainings = trainings;
      this.sortedData = this.trainings.slice();
    });
  }

  private sortData(sort: Sort) {
    const data = this.trainings.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'pulseMax': return this.compare(+a.pulseMax, +b.pulseMax, isAsc);
        case 'pulseAvg': return this.compare(+a.pulseAvg, +b.pulseAvg, isAsc);
        case 'pulseAfter': return this.compare(+a.pulseAfter, +b.pulseAfter, isAsc);
        case 'trainingTimeSec': return this.compare(+a.trainingTimeSec, +b.trainingTimeSec, isAsc);
        case 'trainingDateSec': return this.compare(+a.trainingDateSec, +b.trainingDateSec, isAsc);
        default: return 0;
      }
    });
  }

  private compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  private secsToMins(secs): number {
    return +(secs / 60).toFixed(2);
  }

}


