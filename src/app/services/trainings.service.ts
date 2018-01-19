import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Training } from '../interfaces/training';
import { Config } from '../config';


@Injectable()
export class TrainingsService {

  constructor(private httpClient: HttpClient) { }

  createTraining(training: Training): Observable<any> {
  return this.httpClient.post(Config.host + 'trainings', training);
}

}
