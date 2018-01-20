import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

import { Training } from '../../interfaces/training';
import { TrainingsService } from '../../services/trainings.service';
import { Config } from '../../config';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  private pulseMax: number;
  private pulseAvg: number;
  private pulseAfter: number;
  private trainingTimeSec: number;
  private trainingDateSec: number;
  private training: Training;

  private myOptions: INgxMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    firstDayOfWeek: 'mo',
    dayLabels: {su: 'Вс', mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб'},
    monthLabels: { 1: 'Янв', 2: 'Фев', 3: 'Мар', 4: 'Апр', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Авг', 9: 'Сен', 10: 'Окт', 11: 'Ноя', 12: 'Дек' }
  };

  @ViewChild('form') form;

  constructor(private matSnackBar: MatSnackBar,
              private trainingsService: TrainingsService) { }

  ngOnInit() {
  }

  private openSnackBar(message: string) {
    this.matSnackBar.open(message, 'OK', {duration: Config.timePeriod});
  }

  private onDateChanged(event: IMyDateModel): void {
    this.trainingDateSec = event.epoc;
  }

  private addTraining(): void {
    this.training = {
      pulseMax: this.pulseMax,
      pulseAvg: this.pulseAvg,
      pulseAfter: this.pulseAfter,
      trainingTimeSec: this.trainingTimeSec,
      trainingDateSec: +this.trainingDateSec['epoc']
    };

    this.trainingsService.createTraining(this.training).subscribe((training) => {
      this.form.nativeElement.reset();
      this.openSnackBar('Данные тренировки добавлены');
    });
  }

  private clickSubmit() {
    if(!this.pulseMax || !this.pulseAvg || !this.pulseAfter || !this.trainingTimeSec || !this.trainingDateSec) {
      this.openSnackBar('Заполните форму полностью');
      return;
    }

    this.trainingsService.getTrainings().subscribe((trainings) => {
      let similarDaysCnt = 0;

      trainings.forEach((t) => {
        if(t.trainingDateSec === +this.trainingDateSec['epoc']) {
          ++similarDaysCnt;
        }
      });

      if(similarDaysCnt === 0) {
        this.addTraining();
      } else {
        this.openSnackBar('Этот день уже заполнен');
        return;
      }
    });


  }

}
