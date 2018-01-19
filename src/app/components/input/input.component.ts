import { Component, OnInit } from '@angular/core';

import {INgxMyDpOptions, IMyDateModel} from 'ngx-mydatepicker';

import { Training } from '../../interfaces/training';
import { TrainingsService } from '../../services/trainings.service';


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
  private training: Training;

  private model: any = { jsdate: new Date() };
  private myOptions: INgxMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    firstDayOfWeek: 'mo',
    dayLabels: {su: 'Вс', mo: 'Пн', tu: 'Вт', we: 'Ср', th: 'Чт', fr: 'Пт', sa: 'Сб'},
    monthLabels: { 1: 'Янв', 2: 'Фев', 3: 'Мар', 4: 'Апр', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Авг', 9: 'Сен', 10: 'Окт', 11: 'Ноя', 12: 'Дек' }
  };

  constructor(private trainingsService: TrainingsService) { }

  ngOnInit() {
  }

  private onDateChanged(event: IMyDateModel): void {
    console.log('date selected', event.epoc);
  }

  private clickSubmit() {
    console.log(this.pulseMax);
    console.log(this.pulseAvg);
    console.log(this.pulseAfter);
    console.log(this.trainingTimeSec);

    if(!this.pulseMax || !this.pulseAvg || !this.pulseAfter || !this.trainingTimeSec) {
      alert('form not valid');
      return;
    }

    this.training = {
      pulseMax: this.pulseMax,
      pulseAvg: this.pulseAvg,
      pulseAfter: this.pulseAfter,
      trainingTimeSec: this.trainingTimeSec
    };

    this.trainingsService.createTraining(this.training).subscribe((training) => {
      console.log(training);
    });

  }

}
