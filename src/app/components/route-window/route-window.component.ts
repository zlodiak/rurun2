import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-route-window',
  templateUrl: './route-window.component.html',
  styleUrls: ['./route-window.component.scss']
})
export class RouteWindowComponent implements OnInit {

  public latitude: number;
  public longitude: number;
  public route = [];

  constructor(private matDialogRef: MatDialogRef<RouteWindowComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.latitude = this.data.route[0].latitude;
    this.longitude = this.data.route[0].longitude;
  }

}
