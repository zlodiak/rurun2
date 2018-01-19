import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { TrainingsService } from '../../services/trainings.service';
import { Training } from '../../interfaces/training';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  private visibleMode = 'table';
  private trainings: Training[] = [];

  constructor(private trainingsService: TrainingsService,
              private router: Router) { }

  ngOnInit() {
    this.getTrainings();
  }

  private setVisibleMode(mode): void {
    this.visibleMode = mode;
  }

  private getTrainings(): void {
    this.trainingsService.getTrainings().subscribe((trainings) => {
      this.trainings = trainings;
      console.log(this.trainings);
    });
  }

  private goTo(path): void {
    this.router.navigate([path]);
  }

}
