import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  private visibleMode = 'table';

  constructor(private router: Router) { }

  ngOnInit() {}

  private setVisibleMode(mode): void {
    this.visibleMode = mode;
  }

  private goTo(path): void {
    this.router.navigate([path]);
  }

}
