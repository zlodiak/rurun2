import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';

import {  MatDialogModule,
          MatSnackBarModule,
          MatButtonModule,
          MatSidenavModule,
          MatSliderModule,
          MatInputModule,
          MatDatepickerModule,
          MatSortModule,
          MatSelectModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrainingsService } from './services/trainings.service';
import { TableComponent } from './components/output/table/table.component';
import { GraphComponent } from './components/output/graph/graph.component';
import { DateService } from './services/date.service';
import { RouteWindowComponent } from './components/route-window/route-window.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    PageNotFoundComponent,
    TableComponent,
    GraphComponent,
    RouteWindowComponent
  ],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatSelectModule,
    NgxChartsModule,
    MatSortModule,
    NgxMyDatePickerModule.forRoot(),
    MatDatepickerModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDT2NO8RgOBPpi3Hph-sjfyE1zyRPAoMnQ'
    })
  ],
  providers: [
    DateService,
    TrainingsService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RouteWindowComponent
  ]
})
export class AppModule { }
