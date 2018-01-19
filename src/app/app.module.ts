import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

import {  MatButtonModule,
          MatSidenavModule,
          MatSliderModule,
          MatInputModule,
          MatDatepickerModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrainingsService } from './services/trainings.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    PageNotFoundComponent
  ],
  imports: [
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
    AppRoutingModule
  ],
  providers: [
    TrainingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
